# Button - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Buttons Batch 01
**Atomic Level**: Atom
**Figma Node**: `50:6188`
**Figma Name**: `Buttons`
**Matched to existing code**: Partial, current `Button` exists but does not include all Figma options

## Purpose

Button is the main action control. Use it when a person needs to submit, confirm, continue, cancel, or trigger an action.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `label` | Text | Yes | `Label` | Figma `Button_text` | Visible button text |
| `variant` | `filled`, `outlined`, `text` | No | `filled` | Figma `Style` | How strong the button looks |
| `tone` | `primary`, `secondary`, `red`, `warning`, `green`, `standard` | No | `primary` | Figma `Type` | The meaning or emphasis |
| `leftIcon` | On or off | No | On | Figma `Left_Icon` | Shows an icon before the label |
| `rightIcon` | On or off | No | On | Figma `Right_Icon` | Shows an icon after the label |
| `icon` | Icon name | No | Figma default icon | Figma `Change_Icon` | Uses the icon library |
| `disabled` | On or off | No | Off | Figma `State=Disabled` | Prevents the action |
| `onClick` | Action | No | None | Interaction need | Captured in Storybook actions |

## Visual States

- [ ] Enabled
- [ ] Pressed
- [ ] Disabled
- [ ] Light mode
- [ ] Dark mode

## Behaviors

- Click fires `onClick` when the button is enabled.
- Disabled does not fire `onClick`.
- Pressed should be shown as a Storybook state, but normal users get it from the browser while clicking.
- Dark mode should come from Storybook theme or background setup, not a required component prop unless the app has no theme system.

## Accessibility Requirements

- Use a native `<button>`.
- Keep the visible label readable by screen readers.
- Disabled buttons must use the native `disabled` attribute.
- Keyboard users can reach it with `Tab` and activate it with `Enter` or `Space`.
- Touch target should be at least 44px tall and wide.

## Reuse Decisions

- Reuses the icon library for optional left and right icons.
- Used by forms, dialogs, cards, empty states, and navigation actions.
- Do not use this for navigation-only links. Use `ExternalLinkButton` or a link component instead.

## Review Gate

- [ ] Designer confirms the tone names: primary, secondary, red, warning, green, standard.
- [ ] Designer confirms whether both left and right icons should default to visible.
- [ ] Designer confirms dark mode is handled as a theme, not a separate public prop.
- [ ] Agent may proceed to Step 07 for `Button`.
