# AmountSelector - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Input Components Batch 01
**Atomic Level**: Atom
**Figma Node**: `8273:7829`
**Figma Name**: `Amount Selector`
**Matched to existing code**: No

## Purpose

AmountSelector works as an input stepper. Use it when a person needs to increase or decrease a visible amount in small steps.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `value` | Text or number | Yes | `Value` | Figma `Value_Text` | Visible amount or placeholder |
| `state` | `initial`, `default` | No | `initial` | Figma `State` | Whether the value is empty or chosen |
| `pressedControl` | `decrease`, `increase`, none | No | None | Interaction need | Shows the pressed state |
| `disabled` | On or off | No | Off | Interaction need | Disables both controls |
| `decreaseDisabled` | On or off | No | Off | Interaction need | Disables the minus control |
| `increaseDisabled` | On or off | No | Off | Interaction need | Disables the plus control |
| `onDecrease` | Action | No | None | Interaction need | Runs when minus is clicked |
| `onIncrease` | Action | No | None | Interaction need | Runs when plus is clicked |

## Visual States

- [ ] Initial
- [ ] Default
- [ ] Pressed decrease
- [ ] Pressed increase
- [ ] Disabled

## Behaviors

- Plus and minus controls should update the value in interactive demos.
- The pressed control should show a visible pressed state.
- The component should keep the same size when the value changes.

## Accessibility Requirements

- Use a labeled group for the full stepper.
- Use native `<button>` controls for minus and plus.
- Keyboard users can reach each control with `Tab` and activate it with `Enter` or `Space`.
- Announce value changes politely where needed.

## Best Practices Review

- [ ] One responsibility: `AmountSelector` only presents the stepper UI and delegates value math/rules to the app.
- [ ] Props over state: value, pressed control, disabled flags, and callbacks are controlled by props; interactive amount changes remain story-only demo state.
- [ ] Descriptive typed props: `value`, `state`, `pressedControl`, disabled flags, and increment/decrement callbacks remain typed and documented.
- [ ] No business logic: source stays free of min/max calculation, storage, routing, auth, and data-fetching side effects.
- [ ] Simple props: public API remains primitive values, booleans, state unions, and callbacks.
- [ ] Accessibility: labelled group, native controls, keyboard behavior, and polite value announcements stay covered.
- [ ] Defaults and variants: initial, selected, disabled, pressed decrease, and pressed increase states are represented in stories.
- [ ] Central stories: `src/stories` remains the workspace convention; co-location is a future migration option, not required in this batch.

## Reuse Decisions

- Reuses `ValueAdjusterButton` for the minus and plus controls.
- Belongs to Input Components, not Buttons, because it changes a value.

## Review Gate

- [ ] Designer confirms the value step amount for each product flow.
- [ ] Designer confirms minimum and maximum disabled behavior.
- [ ] Best Practices Review checklist approved.
- [ ] Agent may proceed to Step 07 for `AmountSelector`.
