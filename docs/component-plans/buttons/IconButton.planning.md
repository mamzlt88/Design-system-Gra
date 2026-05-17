# IconButton - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Buttons Batch 01
**Atomic Level**: Atom
**Figma Node**: `91:4104`
**Figma Name**: `03 Icon Button`
**Matched to existing code**: No

## Purpose

IconButton is a compact action button that uses only an icon. Use it for toolbars, close actions, quick actions, and compact repeated controls.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `ariaLabel` | Text | Yes | None | Accessibility requirement | Required because the button has no visible text |
| `icon` | Icon name | Yes | Figma default icon | Figma `Change_Icon` | Uses the icon library |
| `variant` | `filled`, `tonal`, `outlined`, `outlinedAccent`, `filledRed`, `standard`, `standardInverse` | No | `filled` | Figma `Style` | Visual style |
| `disabled` | On or off | No | Off | Figma `State=Disabled` | Prevents the action |
| `onClick` | Action | No | None | Interaction need | Captured in Storybook actions |

## Visual States

- [ ] Enabled
- [ ] Pressed
- [ ] Disabled
- [ ] Light mode
- [ ] Dark mode

## Behaviors

- Click fires `onClick` when enabled.
- Disabled does not fire `onClick`.
- Pressed is a visual state for Storybook and should also appear during real mouse or touch press.

## Accessibility Requirements

- Use a native `<button>`.
- `ariaLabel` is required.
- Keyboard users can reach it with `Tab` and activate it with `Enter` or `Space`.
- Touch target should be at least 44px tall and wide.
- Icon alone must not be the only accessible name.

## Reuse Decisions

- Reuses the icon library.
- Used by toolbar actions, dismiss buttons, edit buttons, and compact repeated actions.
- Do not use this when the action needs a visible text label.

## Review Gate

- [ ] Designer confirms the final public name should be `IconButton`, not `03 Icon Button`.
- [ ] Designer confirms `outlinedAccent` and `standardInverse` naming.
- [ ] Agent may proceed to Step 07 for `IconButton`.
