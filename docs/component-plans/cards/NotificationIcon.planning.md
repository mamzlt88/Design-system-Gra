# NotificationIcon - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Cards Batch 01
**Atomic Level**: Atom
**Figma Node**: `2870:5575`
**Figma Name**: `Notification Icon`
**Matched to existing code**: No

## Purpose

NotificationIcon gives cards and notification rows a quick visual category, such as loan renewal, weekly payment, or center meeting.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `type` | `requestedLoan`, `loanRenewal`, `loanApprovalPending`, `weeklyPayment`, `centerMeeting` | No | `requestedLoan` | Figma `Type` | Visual meaning |
| `label` | Text | No | Type label | Accessibility need | Screen reader label |
| `size` | Number | No | `56` | Figma size | Container size |

## Visual States

- [ ] Requested loan
- [ ] Loan renewal
- [ ] Loan approval pending
- [ ] Weekly payment
- [ ] Center meeting

## Behaviors

- This component is not interactive.
- It should sit beside text that explains the notification.
- It should keep the same size across all types.

## Accessibility Requirements

- Use `role="img"` with a useful label.
- Do not rely on the icon alone to explain the card.
- Pair it with visible text in full card layouts.

## Best Practices Review

- [ ] One responsibility: `NotificationIcon` only communicates notification category and does not own card layout or notification data.
- [ ] Props over state: type, label, and size are controlled by props with no internal state.
- [ ] Descriptive typed props: `type`, `label`, and `size` remain typed and documented.
- [ ] No business logic: source stays free of notification fetching, routing, auth, storage, and data processing side effects.
- [ ] Simple props: public API remains primitive values and category unions.
- [ ] Accessibility: role/label behavior is confirmed, and full cards do not rely on the icon alone.
- [ ] Defaults and variants: all notification types and sizing examples are represented in stories.
- [ ] Central stories: `src/stories` remains the workspace convention; co-location is a future migration option, not required in this batch.

## Review Gate

- [ ] Designer confirms the icon shapes are close enough to Figma for this first pass.
- [ ] Designer confirms whether this should be decorative or announced by screen readers in product cards.
- [ ] Best Practices Review checklist approved.
- [ ] Agent may proceed to Step 07 for `NotificationIcon`.
