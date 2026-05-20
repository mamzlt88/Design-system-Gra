# IconContainer - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Icon Containers Batch 01
**Atomic Level**: Atom
**Figma Node**: `9084:6053`
**Figma Name**: `Icon Containers`
**Matched to existing code**: No

## Purpose

IconContainer gives a small icon a consistent colored surface so it can support nearby text in cards, lists, and status rows.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `color` | `red`, `yellow`, `green`, `brand`, `blue`, `purple`, `pink` | No | `red` | Figma `Color` | Color theme |
| `styleVariant` | `default`, `emphasized` | No | `default` | Figma `Style` | Soft or filled surface |
| `icon` | Local `IconName` options | No | `check` | Figma `Change_Icon` | Uses local icon library for stability |
| `label` | Text | No | Color label | Accessibility need | Screen reader label |
| `size` | Number | No | `37` | Figma layout | Container size |

## Visual States

- [ ] Red default
- [ ] Yellow default
- [ ] Green default
- [ ] Brand default
- [ ] Blue default
- [ ] Purple default
- [ ] Pink default
- [ ] Red emphasized
- [ ] Yellow emphasized
- [ ] Green emphasized
- [ ] Brand emphasized
- [ ] Blue emphasized
- [ ] Purple emphasized
- [ ] Pink emphasized

## Behaviors

- This component is not interactive.
- It should keep a stable circular 37x37 size across all variants.
- The icon can be swapped without changing the container size.
- Use `IconButton` instead when the icon should perform an action.

## Accessibility Requirements

- Use `role="img"` with a useful label when the icon adds meaning.
- Hide or label it appropriately in composed layouts where nearby text already provides the meaning.
- Do not rely on color alone to communicate status.

## Best Practices Review

- [ ] One responsibility: `IconContainer` only renders a stable icon surface and does not own card/list content or click behavior.
- [ ] Props over state: color, style variant, icon, label, and size are controlled by props with no internal state.
- [ ] Descriptive typed props: `color`, `styleVariant`, `icon`, `label`, and `size` remain typed and documented.
- [ ] No business logic: source stays free of status calculation, routing, auth, storage, and data-fetching side effects.
- [ ] Simple props: public API remains primitive values, icon names, and visual unions.
- [ ] Accessibility: role/label behavior is confirmed, and color is not the only status signal.
- [ ] Defaults and variants: all color and emphasis variants are represented in stories.
- [ ] Central stories: `src/stories` remains the workspace convention; co-location is a future migration option, not required in this batch.

## Reuse Decisions

- **Reuses**: `Icon` atom for the inner symbol.
- **Used by**: Cards, list items, status rows.
- **Do not reuse this for**: clickable icon actions. Use `IconButton`.

## Review Gate

- [ ] Designer confirms the soft and emphasized colors match the Figma tokens.
- [ ] Designer confirms the 37x37 size and circular 32px radius.
- [ ] Designer confirms which icon should be the default.
- [ ] Best Practices Review checklist approved.
- [ ] Agent may proceed to Step 07 for `IconContainer`.
