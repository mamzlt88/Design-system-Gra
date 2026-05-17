from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any

from figma_storybook_agent.classifier import classify_assets
from figma_storybook_agent.figma_client import FigmaClient
from figma_storybook_agent.inventory import build_inventory
from figma_storybook_agent.models import FigmaAsset
from figma_storybook_agent.token_extractor import extract_design_tokens, render_tokens_ts


LEVEL_ORDER = {
    "tokens": 0,
    "atoms": 1,
    "molecules": 2,
    "organisms": 3,
    "templates": 4,
    "pages": 5,
    "needs_review": 6,
}

GENERIC_FAMILY_SEGMENTS = {
    "component",
    "components",
    "content",
    "frame",
    "frame 1",
    "frame 2",
    "states",
    "states components",
    "types components",
}


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Fetch Figma once and split styles into tokens and assets into a component backlog."
    )
    parser.add_argument("--file-key", required=True)
    parser.add_argument("--token-file", type=Path)
    parser.add_argument(
        "--from-snapshot",
        action="store_true",
        help="Reuse the saved snapshot instead of fetching Figma again.",
    )
    parser.add_argument("--snapshot", type=Path, default=Path("design/figma-file.snapshot.json"))
    parser.add_argument("--tokens-json", type=Path, default=Path("src/tokens/figma-tokens.json"))
    parser.add_argument("--tokens-ts", type=Path, default=Path("src/tokens/figmaTokens.ts"))
    parser.add_argument("--backlog-json", type=Path, default=Path("docs/component-backlog/figma-components.json"))
    parser.add_argument("--backlog-md", type=Path, default=Path("docs/component-backlog/figma-components.md"))
    parser.add_argument("--icons-json", type=Path, default=Path("docs/icon-library/figma-icons.json"))
    parser.add_argument("--icons-md", type=Path, default=Path("docs/icon-library/figma-icons.md"))
    args = parser.parse_args()

    if args.from_snapshot:
        figma_file = json.loads(args.snapshot.read_text(encoding="utf-8"))
    else:
        if args.token_file is None:
            raise SystemExit("--token-file is required unless --from-snapshot is used.")
        token = args.token_file.read_text(encoding="utf-8").strip()
        if not token:
            raise SystemExit("Token file is empty.")
        figma_file = FigmaClient(token).fetch_file(args.file_key)

    assets = classify_assets(build_inventory(figma_file))
    token_payload = extract_design_tokens(figma_file)
    icon_payload = _build_icon_library(figma_file, assets)
    backlog_payload = _build_component_backlog(figma_file, assets)

    if not args.from_snapshot:
        _write_json(args.snapshot, figma_file)
    _write_json(args.tokens_json, token_payload)
    _write_text(args.tokens_ts, render_tokens_ts(token_payload))
    _write_json(args.backlog_json, backlog_payload)
    _write_text(args.backlog_md, _render_backlog_markdown(backlog_payload))
    _write_json(args.icons_json, icon_payload)
    _write_text(args.icons_md, _render_icon_markdown(icon_payload))

    print("Figma source extraction complete.")
    print(f"Document: {backlog_payload['meta']['documentName']}")
    print(f"Styles turned into tokens: {token_payload['meta']['styleCount']}")
    print(f"Resolved tokens: {token_payload['meta']['resolvedStyleCount']}")
    print(f"Figma components/assets cataloged: {backlog_payload['meta']['componentAssetCount']}")
    print(f"Icons moved to icon library: {icon_payload['meta']['iconCount']}")
    print(f"Frames kept for review: {backlog_payload['meta']['reviewFrameCount']}")
    print(f"Needs review: {backlog_payload['meta']['needsReviewCount']}")


def _build_component_backlog(figma_file: dict[str, Any], assets: list[FigmaAsset]) -> dict[str, Any]:
    component_assets = sorted(
        [
        _serialize_asset(asset)
        for asset in assets
        if asset.node_type in {"COMPONENT", "COMPONENT_SET"} and not _is_icon_asset(asset)
        ],
        key=_asset_sort_key,
    )
    review_frames = sorted(
        [
        _serialize_asset(asset)
        for asset in assets
        if asset.node_type == "FRAME" and not _is_icon_asset(asset)
        ],
        key=_asset_sort_key,
    )
    icon_count = sum(1 for asset in assets if asset.node_type in {"COMPONENT", "COMPONENT_SET"} and _is_icon_asset(asset))

    return {
        "meta": {
            "documentName": figma_file.get("name") or "Figma file",
            "source": "Figma API",
            "stylePolicy": "Figma styles are treated as design tokens.",
            "assetPolicy": "Figma components and component sets are treated as the component backlog. Icons are split into the icon library.",
            "componentAssetCount": len(component_assets),
            "iconAssetCount": icon_count,
            "reviewFrameCount": len(review_frames),
            "totalCatalogedAssets": len(component_assets) + len(review_frames) + icon_count,
            "needsReviewCount": sum(
                1
                for asset in assets
                if asset.atomic_level.value == "needs_review" and not _is_icon_asset(asset)
            ),
        },
        "components": component_assets,
        "reviewFrames": review_frames,
    }


def _build_icon_library(figma_file: dict[str, Any], assets: list[FigmaAsset]) -> dict[str, Any]:
    icons = sorted(
        [
        _serialize_asset(asset)
        for asset in assets
        if asset.node_type in {"COMPONENT", "COMPONENT_SET"} and _is_icon_asset(asset)
        ],
        key=_asset_sort_key,
    )

    return {
        "meta": {
            "documentName": figma_file.get("name") or "Figma file",
            "source": "Figma API",
            "iconPolicy": "Figma assets from the Icons page/frame are treated as icon library entries.",
            "iconCount": len(icons),
            "needsReviewCount": sum(1 for icon in icons if icon["atomicLevel"] == "needs_review"),
        },
        "icons": icons,
    }


def _serialize_asset(asset: FigmaAsset) -> dict[str, Any]:
    return {
        "nodeId": asset.node_id,
        "name": asset.name,
        "nodeType": asset.node_type,
        "page": asset.page_name,
        "frame": asset.frame_name,
        "path": list(asset.name_path),
        "atomicLevel": asset.atomic_level.value,
        "classificationConfidence": asset.classification_confidence,
        "classificationReason": asset.classification_reason,
        "family": _component_family(asset),
        "status": "unmapped",
        "nextStep": "Map to an existing code component, or move through Step 06 before implementation.",
        "variantAxes": asset.variant_axes,
        "componentProperties": asset.component_properties,
        "styleReferences": asset.style_refs,
        "boundVariables": asset.bound_variables,
        "autoLayout": asset.auto_layout,
        "childCount": asset.child_count,
        "descendantCount": asset.descendant_count,
        "componentKey": asset.component_key,
        "description": asset.description,
        "documentationLink": asset.documentation_link,
    }


def _render_backlog_markdown(payload: dict[str, Any]) -> str:
    meta = payload["meta"]
    lines = [
        "# Figma Component Backlog",
        "",
        "This file treats Figma styles as tokens and Figma components/component sets as the component backlog.",
        "Icon assets are split into `docs/icon-library/figma-icons.md`.",
        "",
        "## Summary",
        "",
        f"- Document: `{meta['documentName']}`",
        f"- Component assets: `{meta['componentAssetCount']}`",
        f"- Icon assets split out: `{meta['iconAssetCount']}`",
        f"- Review frames: `{meta['reviewFrameCount']}`",
        f"- Total cataloged assets: `{meta['totalCatalogedAssets']}`",
        f"- Needs review: `{meta['needsReviewCount']}`",
        "",
    ]
    _append_grouped_asset_table(lines, "Component Assets", payload["components"])

    lines.extend([
        "",
        "## Review Frames",
        "",
        "Frames are kept separate because many are pages, examples, swatches, or layouts. Review them before treating them as components.",
    ])
    _append_grouped_asset_table(lines, "Review Frames by Level", payload["reviewFrames"])
    lines.append("")
    return "\n".join(lines)


def _render_icon_markdown(payload: dict[str, Any]) -> str:
    meta = payload["meta"]
    lines = [
        "# Figma Icon Library",
        "",
        "This file lists Figma assets that were split out of the main component backlog because they live in the Figma Icons page/frame.",
        "",
        "## Summary",
        "",
        f"- Document: `{meta['documentName']}`",
        f"- Icons: `{meta['iconCount']}`",
        f"- Needs review: `{meta['needsReviewCount']}`",
        "",
    ]
    _append_grouped_icon_table(lines, "Icons by Level", payload["icons"])
    lines.append("")
    return "\n".join(lines)


def _append_grouped_asset_table(lines: list[str], title: str, items: list[dict[str, Any]]) -> None:
    lines.extend(["", f"## {title}", ""])
    if not items:
        lines.extend(["_None_", ""])
        return

    for level, group in _group_by_level(items):
        lines.extend([
            f"### {_level_title(level)}",
            "",
        ])
        family_groups = _group_by_family(group)
        has_named_family = any(family for family, _ in family_groups)
        for family, family_group in family_groups:
            if family:
                lines.extend([f"#### {family}", ""])
            elif has_named_family:
                lines.extend([f"#### Other {_level_title(level)}", ""])
            _append_asset_rows(lines, family_group)


def _append_grouped_icon_table(lines: list[str], title: str, items: list[dict[str, Any]]) -> None:
    lines.extend(["", f"## {title}", ""])
    if not items:
        lines.extend(["_None_", ""])
        return

    for level, group in _group_by_level(items):
        lines.extend([
            f"### {_level_title(level)}",
            "",
            "| Name | Node ID | Status | Token Bindings |",
            "|------|---------|--------|----------------|",
        ])
        for item in group:
            token_bindings = ", ".join(sorted(item.get("boundVariables") or {})) or "none"
            lines.append(
                "| "
                f"`{_escape(item['name'])}` | "
                f"`{_escape(item['nodeId'])}` | "
                f"`{_escape(item['status'])}` | "
                f"`{_escape(token_bindings)}` |"
            )
        lines.append("")


def _group_by_level(items: list[dict[str, Any]]) -> list[tuple[str, list[dict[str, Any]]]]:
    grouped: dict[str, list[dict[str, Any]]] = {}
    for item in sorted(items, key=_asset_sort_key):
        grouped.setdefault(str(item.get("atomicLevel") or "needs_review"), []).append(item)
    return sorted(grouped.items(), key=lambda entry: (LEVEL_ORDER.get(entry[0], 99), entry[0]))


def _group_by_family(items: list[dict[str, Any]]) -> list[tuple[str | None, list[dict[str, Any]]]]:
    grouped: dict[str | None, list[dict[str, Any]]] = {}
    for item in sorted(items, key=_asset_sort_key):
        family = item.get("family") if isinstance(item.get("family"), str) else None
        grouped.setdefault(family, []).append(item)
    return sorted(grouped.items(), key=lambda entry: _family_sort_key(entry[0]))


def _family_sort_key(family: str | None) -> tuple[int, str]:
    if family:
        return (0, family.casefold())
    return (1, "")


def _append_asset_rows(lines: list[str], items: list[dict[str, Any]]) -> None:
    lines.extend([
        "| Name | Node ID | Type | Level | Status |",
        "|------|---------|------|-------|--------|",
    ])
    for item in items:
        lines.append(
            "| "
            f"`{_escape(item['name'])}` | "
            f"`{_escape(item['nodeId'])}` | "
            f"`{_escape(item['nodeType'])}` | "
            f"`{_escape(item['atomicLevel'])}` | "
            f"`{_escape(item['status'])}` |"
        )
    lines.append("")


def _level_title(level: str) -> str:
    if level == "needs_review":
        return "Needs Review"
    return level.replace("_", " ").title()


def _is_icon_asset(asset: FigmaAsset) -> bool:
    segments = [asset.page_name or "", asset.frame_name or "", *asset.name_path]
    return any(_segment_key(segment) == "icons" for segment in segments)


def _segment_key(value: str) -> str:
    normalized = "".join(character.lower() if character.isalnum() else " " for character in value)
    return " ".join(normalized.split())


def _component_family(asset: FigmaAsset) -> str | None:
    candidates = [
        asset.page_name or "",
        *(asset.name_path or ()),
        asset.frame_name or "",
    ]
    for candidate in candidates:
        label = _clean_family_label(candidate)
        if not label:
            continue
        if _segment_key(label) in GENERIC_FAMILY_SEGMENTS:
            continue
        return label
    return None


def _clean_family_label(value: str) -> str:
    label = value.replace("↳", " ")
    label = " ".join(label.split())
    return label.strip(" -_/")


def _asset_sort_key(item: dict[str, Any]) -> tuple[str, str, str, str, str, str]:
    level = str(item.get("atomicLevel") or "needs_review")
    family = item.get("family") if isinstance(item.get("family"), str) else ""
    name = str(item.get("name") or "")
    family_root_sort = "" if family and name == family else name.casefold()
    return (
        f"{LEVEL_ORDER.get(level, 99):02d}",
        level,
        "0" if family else "1",
        family.casefold(),
        family_root_sort,
        str(item.get("nodeId") or ""),
    )


def _write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2), encoding="utf-8")


def _write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def _escape(value: object) -> str:
    return str(value).replace("|", "\\|").replace("\n", " ")


if __name__ == "__main__":
    main()
