from __future__ import annotations

import argparse
import json
import ssl
import urllib.parse
import urllib.request
from pathlib import Path

try:
    import certifi
except ImportError:  # pragma: no cover - optional local dependency
    certifi = None


FIGMA_FILE_KEY = "LuOSourQp644YKhg0MrCE0"

ILLUSTRATIONS = [
    ("proof-of-investment-submit", "7619:17990"),
    ("proof-of-investment-submitting", "7619:23895"),
    ("proof-of-investment-error", "7619:18860"),
    ("proof-of-investment-error-persists", "7619:18086"),
    ("proof-of-investment-complete", "7619:23879"),
    ("loan-proposal-loan-amount", "1958:3238"),
    ("loan-proposal-questionnaire", "1958:3236"),
    ("loan-proposal-questionnaire-complete", "7423:2610"),
    ("loan-proposal-id-verification", "1958:3237"),
    ("loan-proposal-proof-of-address", "1958:3235"),
    ("loan-proposal-continue-process", "7423:342"),
    ("loan-proposal-vertical-steps", "7619:24961"),
    ("loan-progress-loan-amount-change", "9894:13515"),
    ("loan-progress-center-approval", "9894:13514"),
    ("disbursement-ready", "7619:23631"),
    ("disbursement-disbursed", "7619:23522"),
    ("disbursement-error", "7619:23404"),
    ("disbursement-pending", "7810:1255"),
    ("approvals-overdue-payment", "7619:24261"),
    ("approvals-not-eligible", "7619:24812"),
    ("approvals-empty-state-in-progress", "9858:7482"),
]


def main() -> None:
    parser = argparse.ArgumentParser(description="Export Figma illustration nodes as local SVG assets.")
    parser.add_argument("--file-key", default=FIGMA_FILE_KEY)
    parser.add_argument("--token-file", type=Path, default=Path("/private/tmp/figma_token"))
    parser.add_argument("--out-dir", type=Path, default=Path("src/assets/illustrations"))
    args = parser.parse_args()

    token = args.token_file.read_text(encoding="utf-8").strip() if args.token_file.exists() else ""
    if not token:
        raise SystemExit(f"Missing Figma token file: {args.token_file}")

    args.out_dir.mkdir(parents=True, exist_ok=True)
    context = ssl.create_default_context(cafile=certifi.where()) if certifi is not None else ssl.create_default_context()
    id_to_name = {node_id: name for name, node_id in ILLUSTRATIONS}
    image_urls = fetch_export_urls(args.file_key, sorted(id_to_name), token, context)

    manifest = []
    for node_id, export_url in image_urls.items():
        name = id_to_name[node_id]
        svg_path = args.out_dir / f"{name}.svg"
        svg = fetch_text(export_url, {}, context)
        svg_path.write_text(svg, encoding="utf-8")
        manifest.append({"name": name, "nodeId": node_id, "path": str(svg_path)})

    manifest_path = args.out_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"Exported {len(manifest)} SVG illustrations to {args.out_dir}")


def fetch_export_urls(file_key: str, node_ids: list[str], token: str, context: ssl.SSLContext) -> dict[str, str]:
    query = urllib.parse.urlencode({"ids": ",".join(node_ids), "format": "svg"})
    url = f"https://api.figma.com/v1/images/{file_key}?{query}"
    payload = json.loads(fetch_text(url, {"X-Figma-Token": token}, context))
    if payload.get("err"):
        raise RuntimeError(f"Figma export failed: {payload['err']}")
    images = payload.get("images") or {}
    missing = [node_id for node_id in node_ids if not images.get(node_id)]
    if missing:
        raise RuntimeError(f"Figma did not return export URLs for: {', '.join(missing)}")
    return images


def fetch_text(url: str, headers: dict[str, str], context: ssl.SSLContext) -> str:
    request = urllib.request.Request(url, headers=headers, method="GET")
    with urllib.request.urlopen(request, timeout=60, context=context) as response:
        return response.read().decode("utf-8")


if __name__ == "__main__":
    main()
