# ExternalLinkButton - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Buttons Batch 01
**Atomic Level**: Atom
**Figma Node**: `9182:7501`
**Figma Name**: `External Link Button`
**Matched to existing code**: No

## Purpose

ExternalLinkButton opens a page outside the current app. Use it when the person is leaving the product or opening supporting information in another place.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `label` | Text | Yes | `External Link` | Figma `Link_Text` | Visible link text |
| `href` | URL | Yes | None | Link behavior | Destination URL |
| `textSize` | `large`, `medium` | No | `medium` | Figma `Text_Size` | Text size |
| `disabled` | On or off | No | Off | Interaction need | Prevents navigation when unavailable |
| `onClick` | Action | No | None | Interaction need | Optional tracking or analytics |

## Visual States

- [ ] Enabled
- [ ] Pressed
- [ ] Large text
- [ ] Medium text
- [ ] Disabled, if the product needs unavailable links

## Behaviors

- Opens the `href` destination.
- Should make it visually clear that the link goes outside the current app.
- Pressed should be a short-lived visual state.

## Accessibility Requirements

- Use an `<a>` element when navigation is the main action.
- Include visible text.
- If it opens a new tab, include screen-reader text that says it opens in a new tab.
- Keyboard users can reach it with `Tab` and activate it with `Enter`.

## Reuse Decisions

- Reuses the icon library for the external-link icon.
- Use this for navigation. Use `Button` for in-page actions.

## Review Gate

- [ ] Designer confirms if external links open in the same tab or a new tab.
- [ ] Designer confirms whether disabled external links exist in the product.
- [ ] Agent may proceed to Step 07 for `ExternalLinkButton`.
