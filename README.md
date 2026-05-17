# Design System Workspace

This is a fresh Step 00 workspace for the Design System Agent.

## What Is Ready

- React component source folder: `src/components`
- Storybook stories folder: `src/stories`
- Storybook config: `.storybook/main.ts` and `.storybook/preview.ts`
- Starter component: `Button`
- Agent state file: `.figma-storybook-agent-state.json`
- Agent integration config placeholder: `.figma-storybook-agent.json`
- Figma style tokens: `src/tokens/figma-tokens.json` and `src/tokens/figmaTokens.ts`
- Figma component backlog: `docs/component-backlog/figma-components.md`
- Figma icon library: `docs/icon-library/figma-icons.md`
- Saved Figma API snapshot: `design/figma-file.snapshot.json`

## Useful Commands

```bash
npm install
npm run storybook
npm run build-storybook
npm run build
```

## Current Agent Step

The agent is in Step 08 Validation.

In plain words: the first Buttons batch has been built and is ready to review in Storybook.

Current review plan:

- `docs/component-plans/buttons/README.md`
- `docs/component-plans/buttons/Button.planning.md`
- `docs/component-plans/buttons/IconButton.planning.md`
- `docs/component-plans/buttons/AmountSelector.planning.md`
- `docs/component-plans/buttons/DocumentUploadSlot.planning.md`
- `docs/component-plans/buttons/ExternalLinkButton.planning.md`

Built in this batch:

- `Button`
- `IconButton`
- `AmountSelector`
- `DocumentUploadSlot`
- `ExternalLinkButton`

Validation completed:

- `npm run build`
- `npm run build-storybook`

Local review:

- `http://127.0.0.1:6010`

Next plain-language step: review the Storybook pages. If something looks wrong, Step 09 is refinement: give the agent the specific change, and it will update the component, story, and docs together.

Current counts:

- Figma styles captured as tokens: 240
- Resolved token values: 237
- Icon assets split into Icon Library: 1,524
- Component assets cataloged: 159
- Review frames kept separate: 1,188
- Needs-review items: 207
- Components planned in current batch: 5
- Components implemented in current batch: 5
