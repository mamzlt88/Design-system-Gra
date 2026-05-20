# PillButton - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Buttons Batch 02
**Atomic Level**: Atom
**Figma Node**: `8363:4304`
**Figma Name**: `Pill Buttons`
**Matched to existing code**: No

## Purpose

PillButton gives people a compact way to select a short option, filter, or tab-like choice.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `label` | Text | Yes | `Tab X` | Figma `Tab_Text` | Visible pill text |
| `state` | `enabled`, `selected`, `pressed` | No | `enabled` | Figma `State` | Visual state |
| `disabled` | On or off | No | Off | Interaction need | Prevents selection |
| `onClick` | Action | No | None | Interaction need | Runs when selected |

## Visual States

- [ ] Enabled
- [ ] Selected
- [ ] Pressed
- [ ] Disabled, added as an implementation guard

## Behaviors

- Click fires `onClick` unless disabled.
- Selected pills expose selected state with `aria-pressed`.
- The pill keeps a compact, stable size across states.

## Accessibility Requirements

- Use a native `<button>`.
- Visible text acts as the accessible name.
- Use `aria-pressed` when selected.
- Keyboard users can reach it with `Tab` and activate it with `Enter` or `Space`.

## Best Practices Review

- [ ] One responsibility: `PillButton` only presents a compact selectable option and does not own filtering or tab-panel content.
- [ ] Props over state: selected, pressed, and disabled visuals are controlled by props; Storybook toggle state remains demo-only.
- [ ] Descriptive typed props: `label`, `state`, `disabled`, and `onClick` remain typed and documented.
- [ ] No business logic: source stays free of filtering, routing, storage, auth, and data-fetching side effects.
- [ ] Simple props: public API remains text, state union, boolean, and callback props.
- [ ] Accessibility: native button, visible label, `aria-pressed`, and keyboard activation stay covered.
- [ ] Defaults and variants: enabled, selected, pressed, and disabled states are represented in stories.
- [ ] Central stories: `src/stories` remains the workspace convention; co-location is a future migration option, not required in this batch.

## Review Gate

- [ ] Designer confirms whether selected pills should behave like toggle buttons or tabs.
- [ ] Designer confirms whether disabled is needed in product flows.
- [ ] Best Practices Review checklist approved.
- [ ] Agent may proceed to Step 07 for `PillButton`.
