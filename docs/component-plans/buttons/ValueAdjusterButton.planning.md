# ValueAdjusterButton - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Buttons Batch 02
**Atomic Level**: Atom
**Figma Node**: `8510:11062`
**Figma Name**: `Value Adjuster Button`
**Matched to existing code**: No

## Purpose

ValueAdjusterButton increases or decreases a nearby numeric value one step at a time.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `adjustment` | `decrease`, `increase` | No | `decrease` | Figma `Type` | Minus or plus action |
| `state` | `enabled`, `pressed`, `disabled` | No | `enabled` | Figma `State` | Visual state |
| `ariaLabel` | Text | No | `Decrease value` | Accessibility need | Icon-only button label |
| `disabled` | On or off | No | Off | Interaction need | Prevents changes |
| `onClick` | Action | No | None | Interaction need | Runs when activated |

## Visual States

- [ ] Decrease
- [ ] Increase
- [ ] Pressed
- [ ] Disabled
- [ ] Paired with a visible value

## Behaviors

- Click fires `onClick` unless disabled.
- The button icon changes based on `adjustment`.
- Disabled state should be used at minimum or maximum limits.

## Accessibility Requirements

- Use a native `<button>`.
- Provide a clear accessible label, for example `Increase value`.
- Place the button next to the visible value it changes.
- Keyboard users can reach it with `Tab` and activate it with `Enter` or `Space`.

## Best Practices Review

- [ ] One responsibility: `ValueAdjusterButton` only renders the increase/decrease action and does not own the numeric value.
- [ ] Props over state: adjustment, visual state, disabled, and click handling are controlled by props.
- [ ] Descriptive typed props: `adjustment`, `state`, `ariaLabel`, `disabled`, and `onClick` remain typed and documented.
- [ ] No business logic: source stays free of min/max calculations, storage, routing, auth, and data-fetching side effects.
- [ ] Simple props: public API remains primitive values and callbacks.
- [ ] Accessibility: native button, clear accessible label, keyboard activation, and relation to visible value stay covered.
- [ ] Defaults and variants: decrease, increase, pressed, and disabled states are represented in stories.
- [ ] Central stories: `src/stories` remains the workspace convention; co-location is a future migration option, not required in this batch.

## Review Gate

- [ ] Designer confirms whether decrease should always have left-rounded corners and increase right-rounded corners.
- [ ] Designer confirms min and max disabled behavior in product context.
- [ ] Best Practices Review checklist approved.
- [ ] Agent may proceed to Step 07 for `ValueAdjusterButton`.
