# StatusBadge - Component Planning Document

**Status**: Draft, implemented in Storybook for review
**Figma source**: `Status Badge` (`7483:6154`)
**Atomic level**: Atom

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `status` | `informative`, `success`, `warning`, `attention`, `critical`, `progress`, `loading` | No | `informative` | Figma `Status` | Status meaning and color treatment |
| `styleVariant` | `default`, `emphasized` | No | `default` | Figma `Style` | Regular or semi-bold text weight |
| `label` | Text | No | `STATUS` | Figma `Status_Text` | Visible badge text |

## Behavior Notes

- The badge is non-interactive and presentational.
- Color communicates the status family, but visible text remains required.
- Loading uses the Figma gradient treatment and accessible loading label.
- Long explanations should live near the badge, not inside it.

## Storybook Coverage

- Default informative badge.
- Grouped status examples for all Figma statuses.
- Grouped style examples for default and emphasized rows.
- Controls for status, style variant, and label.

## Accessibility Requirements

- Visible text must identify the status in context.
- Loading state must expose a status label to assistive technology.
- Color must not be the only status cue.
- Keep the badge out of tab order.

## Best Practices Review

- [ ] One responsibility: `StatusBadge` only renders a compact visible status label.
- [ ] Props over state: status, style, and label are controlled by props.
- [ ] Descriptive typed props: status and style options are exported and documented.
- [ ] No business logic: app state decides which status to pass.
- [ ] Accessibility basics: visible text and loading semantics are covered.
- [ ] Naming and co-location: central stories remain in `src/stories/Atoms`.
- [ ] Simple props: no complex object props are required.
- [ ] Defaults and variants: all Figma statuses and styles are represented.
- [ ] Storybook states, args, controls, and behavior docs are complete.

## Review Gate

- [ ] Designer confirms status colors and emphasized weight against Figma.
- [ ] Product confirms `attention`, `critical`, and `warning` usage guidance.
- [ ] Best Practices Review checklist approved.
