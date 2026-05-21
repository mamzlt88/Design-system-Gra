# InformationButton Planning

## Source

- Figma node: `7521:7432`
- Figma name: `Information Button`
- Figma atomic level: organisms
- Storybook group: `Organisms/Buttons`
- Current source limitation: Figma MCP returned a plan/tool-call limit error, so this first pass uses local catalog variant metadata and existing component patterns. Final visual matching needs a later screenshot review when Figma access is available.

## Figma Evidence

<table>
  <thead>
    <tr>
      <th>Evidence</th>
      <th>Implementation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Catalog component set exposes <code>State</code> values <code>Enabled</code>, <code>Pressed</code>, and <code>Tooltip Open</code></td>
      <td><code>state</code> prop controls default, pressed, and tooltip-open presentation.</td>
    </tr>
    <tr>
      <td>Catalog component set exposes <code>Text_Size</code> values <code>Medium</code> and <code>Small</code></td>
      <td><code>textSize</code> prop controls label and icon sizing.</td>
    </tr>
    <tr>
      <td>Component is an information action</td>
      <td>Composes existing <code>Icon</code> and <code>Tooltip</code> primitives instead of embedding unrelated behavior.</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: component renders a compact information action and optional tooltip presentation.
- [x] Props over state: tooltip open, pressed, text size, and content are controlled by props.
- [x] Descriptive typed API: exported props and variant types are available from `src/index.ts`.
- [x] No business logic: no fetching, storage, auth, routing, analytics, or app-state ownership.
- [x] Accessibility basics: native `button`, visible text, keyboard activation, and `aria-describedby` when tooltip is open.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the central stories convention.
- [x] Simple props: public props use primitive values and one click event inherited from the native button API.
- [x] Defaults and variants: defaults map to sourced catalog variants where available.
- [x] Storybook states, args, controls, and behavior docs: stories include state examples, text-size examples, controls, and story-only toggle state.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented from available catalog evidence.
- [x] Missing fresh Figma screenshot/design-context access is recorded.
- [x] Storybook docs include grouped examples and HTML tables.
