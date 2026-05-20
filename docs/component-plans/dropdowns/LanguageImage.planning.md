# LanguageImage - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Dropdowns Batch 01
**Atomic Level**: Atom
**Figma Node**: `7878:11296`
**Figma Name**: `Language Image`
**Matched to existing code**: No

## Purpose

LanguageImage gives a language dropdown a compact visual marker for English or Spanish.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `language` | `english`, `spanish` | No | `english` | Figma `Language` | Language variant |
| `size` | Number | No | `40` | Implementation need | Visual size |
| `label` | Text | No | Language label | Accessibility need | Screen reader label |

## Visual States

- [ ] English
- [ ] Spanish
- [ ] Smaller size
- [ ] Inside dropdown row

## Behaviors

- This component is not interactive by itself.
- It should appear beside visible language text.
- It should keep a stable size inside dropdown rows.

## Accessibility Requirements

- Use `role="img"` with a useful label.
- Do not rely on this image alone to identify the language.
- Pair it with visible language text in full dropdown patterns.

## Best Practices Review

- [ ] One responsibility: `LanguageImage` only renders the language marker and does not own dropdown state or language selection.
- [ ] Props over state: language, size, and label are controlled by props with no internal state.
- [ ] Descriptive typed props: `language`, `size`, and `label` remain typed and documented.
- [ ] No business logic: source stays free of localization lookup, routing, storage, auth, and data-fetching side effects.
- [ ] Simple props: public API remains primitive values and language unions.
- [ ] Accessibility: useful label is provided, and full dropdowns pair the image with visible language text.
- [ ] Defaults and variants: English, Spanish, small size, and dropdown-row examples are represented in stories.
- [ ] Central stories: `src/stories` remains the workspace convention; co-location is a future migration option, not required in this batch.

## Review Gate

- [ ] Designer confirms the visual representation against Figma once Figma access is available.
- [ ] Designer confirms whether this should use real image/flag assets or token-based styling.
- [ ] Best Practices Review checklist approved.
- [ ] Agent may proceed to Step 07 for `LanguageImage`.
