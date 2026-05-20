# Design System Workspace

This is a fresh Step 00 workspace for the Design System Agent.

## What Is Ready

- React component source folder: `src/components`
- Storybook stories folder: `src/stories`
- Storybook config: `.storybook/main.ts` and `.storybook/preview.ts`
- Implemented atom components: `AmountSelector`, `Button`, `CheckboxRadioButton`, `DocumentUploadSlot`, `ExternalLinkButton`, `IconButton`, `IconContainer`, `LanguageImage`, `NotificationIcon`, `PillButton`, and `ValueAdjusterButton`
- Agent state file: `.figma-storybook-agent-state.json`
- Agent integration config placeholder: `.figma-storybook-agent.json`
- Figma style tokens: `src/tokens/figma-tokens.json` and `src/tokens/figmaTokens.ts`
- Figma component backlog: `docs/component-backlog/figma-components.md`
- Figma icon library: `docs/icon-library/figma-icons.md`
- Saved Figma API snapshot: `design/figma-file.snapshot.json`

## Component Best Practices

- Keep each component focused on one responsibility and keep product flow, fetching, auth, storage, and routing logic outside presentational components.
- Prefer controlled props over internal component state. Storybook may use local helper state only to demonstrate interactive demos, and those helpers should stay in `src/stories`.
- Use descriptive typed props, simple primitive values where possible, sensible defaults, and explicit variants/states in Storybook `args` and `argTypes`.
- Build accessibility in from the component source: semantic elements, labels or `aria-label`, keyboard behavior, disabled behavior, focus visibility, and contrast.
- This workspace intentionally uses central stories in `src/stories` for now. Co-located stories can be treated as a future migration, but the current Storybook config and generated docs expect central output.

## Storybook Documentation Conventions

- Keep component docs in `src/stories/Atoms/*.mdx` and stories in `src/stories/Atoms/*.stories.tsx`.
- Group related examples into one section canvas. For example, a Variants section should show all variants inside one grouped story instead of stacking one canvas per variant.
- Keep individual CSF stories available for direct review and interaction tests, but use grouped stories for docs sections when several examples belong together.
- Render docs data as real MDX/HTML `<table>` markup in Storybook pages. Do not use Markdown pipe tables inside `.mdx` files because Storybook can render them as unreadable plain text.
- Use **Variants** for appearance, layout, theme, and size choices. Use **States** for runtime states such as pressed, selected, disabled, uploaded, and loading.
- Keep story-only state inside story files and label it with a short comment. Component source should stay controlled by props.

## Useful Commands

```bash
npm install
npm run storybook
npm run build-storybook
npm run build
```

## Storybook Review

Local review:

```bash
npm install
npm run storybook
```

Shared review:

- GitLab CI builds Storybook on every branch update.
- The `pages` job publishes `storybook-static` as a GitLab Pages review site.
- After the pipeline finishes, open the GitLab job or project Pages section to copy the live review URL.

## Current Agent Step

The agent is in Step 09 refinement.

In plain words: the current atom batch has been built, validated, and is being refined from Storybook review feedback.

Current review plan:

- `docs/component-plans/buttons/README.md`
- `docs/component-plans/buttons/Button.planning.md`
- `docs/component-plans/buttons/IconButton.planning.md`
- `docs/component-plans/buttons/DocumentUploadSlot.planning.md`
- `docs/component-plans/buttons/ExternalLinkButton.planning.md`
- `docs/component-plans/buttons/PillButton.planning.md`
- `docs/component-plans/buttons/ValueAdjusterButton.planning.md`
- `docs/component-plans/input-components/AmountSelector.planning.md`
- `docs/component-plans/checkbox-radio-buttons/CheckboxRadioButton.planning.md`
- `docs/component-plans/dropdowns/LanguageImage.planning.md`
- `docs/component-plans/icon-containers/IconContainer.planning.md`
- `docs/component-plans/cards/NotificationIcon.planning.md`

Built and documented in Storybook:

- `AmountSelector` under Input Components
- `Button`
- `CheckboxRadioButton`
- `DocumentUploadSlot`
- `ExternalLinkButton`
- `IconButton`
- `IconContainer`
- `LanguageImage`
- `NotificationIcon`
- `PillButton`
- `ValueAdjusterButton`

Validation completed:

- `npm run build`
- `npm run build-storybook`
- Agent regression check: `PYTHONPATH=src python3 -m unittest discover -s tests`

Local review:

- `http://127.0.0.1:6010`

Next plain-language step: continue Storybook review. If something looks wrong, give the agent the specific change, and it will update the component, story, and docs together.

Current counts:

- Figma styles captured as tokens: 240
- Resolved token values: 237
- Icon assets split into Icon Library: 1,524
- Component assets cataloged: 159
- Review frames kept separate: 1,188
- Needs-review items: 207
- Components planned in current batch: 11
- Components implemented in current batch: 11
