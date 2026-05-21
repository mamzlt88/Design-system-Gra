# ColorIndicator - Component Planning Document

**Status**: Draft, implemented in Storybook for review
**Figma source**: `Color Indicator` (`9097:6463`)
**Atomic level**: Atom

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `color` | `red`, `yellow`, `green`, `aquamarine`, `blue`, `brand` | No | `red` | Figma `Color` | Direct color variant |
| `label` | Text | No | None | Accessibility need | Adds accessible name when the marker carries meaning |
| `height` | Number | No | `24` | Figma size | Keeps 6px width while allowing row-specific height |

## Behavior Notes

- The component is non-interactive.
- It should be paired with visible text or nearby context because color alone is not enough meaning.
- Without `label`, the indicator is treated as decorative and hidden from assistive technology.
- Default dimensions are 6px wide by 24px high with 4px radius.

## Storybook Coverage

- Default red indicator.
- Grouped color examples for all Figma color variants.
- Controls for color, height, and accessibility label.

## Accessibility Requirements

- Use `role="img"` only when a meaningful label is provided.
- Use `aria-hidden` when decorative.
- Do not rely on color as the only communication channel.
- Keep the component out of tab order.

## Best Practices Review

- [ ] One responsibility: `ColorIndicator` only renders a narrow color marker.
- [ ] Props over state: color, label, and height are controlled entirely by props.
- [ ] Descriptive typed props: color options are exported and documented in Storybook controls.
- [ ] No business logic: the component does not fetch, route, store, or derive product state.
- [ ] Accessibility basics: decorative and meaningful uses are documented.
- [ ] Naming and co-location: central stories remain in `src/stories/Atoms`.
- [ ] Simple props: no complex object props are required.
- [ ] Defaults and variants: all Figma color variants are represented.
- [ ] Storybook states, args, controls, and behavior docs are complete.

## Review Gate

- [ ] Designer confirms colors against Figma.
- [ ] Accessibility label guidance is approved.
- [ ] Best Practices Review checklist approved.
