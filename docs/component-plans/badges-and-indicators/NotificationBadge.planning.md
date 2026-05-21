# NotificationBadge - Component Planning Document

**Status**: Draft, implemented in Storybook for review
**Figma source**: `Notification Badge` (`7509:2356`)
**Atomic level**: Atom

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `size` | `small`, `singleDigit`, `multipleDigits` | No | `small` | Figma `Size` | Dot, one-digit, or multiple-digit badge |
| `value` | Text or number | No | `3` or `32` | Figma digit text | Visible count for digit sizes |
| `label` | Text | No | Derived | Accessibility need | Describes unread marker or count |

## Behavior Notes

- The badge is non-interactive. Parent controls own click behavior.
- Small size is a dot and does not display a count.
- Digit sizes display a short value and keep the Figma 15px height.
- `value` should stay concise; longer notification summaries belong outside this atom.

## Storybook Coverage

- Small, single-digit, and multiple-digit examples.
- Grouped size examples in one canvas.
- Controls for size, value, and accessible label.

## Accessibility Requirements

- Use a clear accessible label for the count or unread marker.
- Do not expose the dot as unlabeled visual noise.
- Pair the badge with a parent icon, tab, link, or label that explains the destination.
- Keep the badge itself out of tab order.

## Best Practices Review

- [ ] One responsibility: `NotificationBadge` only renders a compact notification marker.
- [ ] Props over state: size, value, and label are controlled by props.
- [ ] Descriptive typed props: size options are exported and documented.
- [ ] No business logic: unread counts are passed in and not fetched by the component.
- [ ] Accessibility basics: count and dot markers have labels.
- [ ] Naming and co-location: central stories remain in `src/stories/Atoms`.
- [ ] Simple props: `value` is primitive text or number.
- [ ] Defaults and variants: all Figma sizes are represented.
- [ ] Storybook states, args, controls, and behavior docs are complete.

## Review Gate

- [ ] Designer confirms dot and digit badge dimensions against Figma.
- [ ] Product confirms count formatting stays outside this atom.
- [ ] Best Practices Review checklist approved.
