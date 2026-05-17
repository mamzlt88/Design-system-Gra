# AmountSelector - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Buttons Batch 01
**Atomic Level**: Atom
**Figma Node**: `8273:7829`
**Figma Name**: `Amount Selector`
**Matched to existing code**: No

## Purpose

AmountSelector shows a selected amount or a starting placeholder. Use it when a person needs to choose or confirm a value.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `value` | Text | Yes | `Value` | Figma `Value_Text` | Visible amount or placeholder |
| `state` | `initial`, `default` | No | `initial` | Figma `State` | Whether the value is empty or chosen |
| `disabled` | On or off | No | Off | Interaction need | Needed if the selector cannot be used |
| `onClick` | Action | No | None | Interaction need | Opens the value choice flow |

## Visual States

- [ ] Initial
- [ ] Default
- [ ] Hover or press, if this behaves like a button
- [ ] Disabled, if the product has unavailable choices

## Behaviors

- Click should open the amount selection flow.
- The component should clearly show when a real value has been selected.
- The component should keep the same size when the value changes.

## Accessibility Requirements

- If clickable, use a native `<button>`.
- Provide a clear accessible label, for example `Select amount`.
- Keyboard users can reach it with `Tab` and activate it with `Enter` or `Space`.

## Reuse Decisions

- Can reuse `Button` behavior if this is an action.
- May later be paired with `ValueAdjusterButton` if the design uses plus and minus controls.

## Review Gate

- [ ] Designer confirms whether this is a clickable button or only a display chip.
- [ ] Designer confirms whether `disabled` exists in the real product.
- [ ] Agent may proceed to Step 07 for `AmountSelector`.
