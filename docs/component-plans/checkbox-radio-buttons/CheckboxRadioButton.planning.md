# CheckboxRadioButton - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Checkbox & Radio Buttons Batch 01
**Atomic Level**: Atom
**Figma Node**: `7521:6940`
**Figma Name**: `Checkbox & Radio Button`
**Matched to existing code**: No

## Purpose

CheckboxRadioButton gives people a standard way to select a radio option or checkbox option.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `type` | `radioText`, `radio`, `square`, `squareRed` | No | `radioText` | Figma `Type` | Control shape and meaning |
| `state` | `default`, `selected`, `disabled` | No | `default` | Figma `State` | Visual state |
| `itemText` | Text | No | `Item` | Figma `Item_Text` | Main label |
| `supportiveText` | Text | No | `Supportive text` | Figma `Supp_Text` | Helper text |
| `showSupportiveText` | On or off | No | Off | Figma `Show_Supp.Text` | Shows helper text |
| `disabled` | On or off | No | Off | Interaction need | Prevents selection |
| `onChange` | Action | No | None | Interaction need | Runs when selected |

## Visual States

- [ ] Default
- [ ] Selected
- [ ] Disabled
- [ ] Radio Text
- [ ] Radio
- [ ] Square
- [ ] Square Red
- [ ] With supportive text

## Behaviors

- Radio types use native radio inputs.
- Square types use native checkbox inputs.
- The control fires `onChange` unless disabled.

## Accessibility Requirements

- Use a native `input`.
- Connect the visible label to the input through a wrapping label.
- Use native disabled behavior.
- Keyboard users can reach it with `Tab` and select it with `Space`.

## Best Practices Review

- [ ] One responsibility: `CheckboxRadioButton` only presents a checkbox/radio option and does not own form submission or validation.
- [ ] Props over state: selected/default/disabled state is controlled by props; Storybook selection state remains demo-only.
- [ ] Descriptive typed props: `type`, `state`, labels, supportive text, disabled, and `onChange` remain typed and documented.
- [ ] No business logic: source stays free of form submission, storage, routing, auth, and data-fetching side effects.
- [ ] Simple props: public API remains primitive values, booleans, unions, and callbacks.
- [ ] Accessibility: native inputs, wrapped label, disabled behavior, and keyboard selection stay covered.
- [ ] Defaults and variants: radio, checkbox, selected, disabled, and supportive-text states are represented in stories.
- [ ] Central stories: `src/stories` remains the workspace convention; co-location is a future migration option, not required in this batch.

## Review Gate

- [ ] Designer confirms the first-pass visual style against Figma.
- [ ] Designer confirms whether `Square Red` means danger, required confirmation, or another product meaning.
- [ ] Best Practices Review checklist approved.
- [ ] Agent may proceed to Step 07 for `CheckboxRadioButton`.
