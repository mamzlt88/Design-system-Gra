# DocumentUploadSlot - Component Planning Document

**Status**: [ ] Draft | [ ] Reviewed | [ ] Approved
**Agent Batch**: Buttons Batch 01
**Atomic Level**: Atom
**Figma Node**: `9304:2207`
**Figma Name**: `Document Upload Slot`
**Matched to existing code**: No

## Purpose

DocumentUploadSlot is the place where a person can add or review a document. Use it when a form asks for a file, proof, or supporting document.

## Storybook Controls To Show

| Control | Options | Required | Default | Source | Notes |
|---------|---------|----------|---------|--------|-------|
| `instructionText` | Text | Yes | `Instruction Text` | Figma `Instruction_Text` | Main guidance text |
| `requirement` | `none`, `optional`, `required` | No | `required` | Figma `Type` | Shows if the document is required |
| `typeLabel` | Text | No | `(Type)` | Figma `Type_Text` | Visible helper label |
| `showType` | On or off | No | On | Figma `Show_Type` | Shows or hides the type label |
| `state` | `default`, `pressed`, `uploaded` | No | `default` | Figma `State` | Current upload state |
| `fileName` | Text | No | None | Uploaded state need | Shows the uploaded file name |
| `onClick` | Action | No | None | Interaction need | Opens upload or review flow |

## Visual States

- [ ] Default
- [ ] Pressed
- [ ] Uploaded
- [ ] Optional
- [ ] Required
- [ ] No type label

## Behaviors

- Default state opens the upload flow.
- Uploaded state should show that the file exists and can be reviewed or replaced.
- Pressed should only be a temporary visual state.

## Accessibility Requirements

- If it opens upload, use a native `<button>` or a labelled file input pattern.
- The requirement text must be readable by screen readers.
- The uploaded file name must be announced as part of the component label or description.
- Touch target should be at least 44px tall and wide.

## Best Practices Review

- [ ] One responsibility: `DocumentUploadSlot` only presents upload-slot state and delegates real upload handling to the app.
- [ ] Props over state: `state`, `fileName`, and `onClick` control behavior; uploaded/pressed toggling in Storybook remains demo-only state.
- [ ] Descriptive typed props: instruction, requirement, type label, visibility, file name, state, and event props stay typed and documented.
- [ ] No business logic: source stays free of file-system, network upload, auth, storage, routing, or validation side effects.
- [ ] Simple props: public props remain text, booleans, state unions, and callbacks.
- [ ] Accessibility: button or labelled file-input pattern, requirement text, file-name announcement, and touch target stay covered.
- [ ] Defaults and variants: default, pressed, uploaded, optional, required, and hidden-type examples are covered in stories.
- [ ] Central stories: `src/stories` remains the workspace convention; co-location is a future migration option, not required in this batch.

## Reuse Decisions

- May reuse icon assets from the icon library.
- Used by forms, onboarding, and verification flows.
- Do not use this for image galleries or generic attachments until those needs are confirmed.

## Review Gate

- [ ] Designer confirms whether uploaded files can be replaced, removed, or only viewed.
- [ ] Designer confirms the exact words for optional, required, and no type label.
- [ ] Best Practices Review checklist approved.
- [ ] Agent may proceed to Step 07 for `DocumentUploadSlot`.
