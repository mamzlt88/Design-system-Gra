# Buttons Family - Step 06 Plan

**Status**: Implemented in Storybook, ready for designer review and refinement
**Step**: 06 Component Development Planning
**Source**: Figma `UI_Kit_(In progress)` -> Buttons family

In plain words: these plans record the decisions behind the Button-family Storybook pages. They show what each component should do, what controls it exposes, and what still needs designer confirmation.

## Batch 01

This first batch keeps the work small enough to review:

| Planned component | Figma source | Planning file |
|-------------------|--------------|---------------|
| `Button` | `Buttons` (`50:6188`) | `Button.planning.md` |
| `IconButton` | `03 Icon Button` (`91:4104`) | `IconButton.planning.md` |
| `DocumentUploadSlot` | `Document Upload Slot` (`9304:2207`) | `DocumentUploadSlot.planning.md` |
| `ExternalLinkButton` | `External Link Button` (`9182:7501`) | `ExternalLinkButton.planning.md` |

Moved to Input Components:

- `AmountSelector` is an input stepper, so its plan now lives in `docs/component-plans/input-components/AmountSelector.planning.md`.

## Batch 02

This batch completes the remaining atom-level Button family components from the current backlog:

| Planned component | Figma source | Planning file |
|-------------------|--------------|---------------|
| `PillButton` | `Pill Buttons` (`8363:4304`) | `PillButton.planning.md` |
| `ValueAdjusterButton` | `Value Adjuster Button` (`8510:11062`) | `ValueAdjusterButton.planning.md` |

## Not In This Batch Yet

These stay in the Buttons family backlog for the next pass:

- `Information Button`

## Storybook Documentation Notes

- Docs pages use grouped section canvases so related variants or states appear together in one container.
- Storybook MDX tables use real HTML table markup in the generated docs pages; Markdown pipe tables remain acceptable in these planning files.
- Test-only stories stay available in CSF but do not need to appear as visible docs examples unless they teach a real user-facing behavior.

## What Triggers The Next Step

When this batch is approved, the agent can keep refining the Storybook docs or use these atoms inside larger button, form, and flow patterns.
