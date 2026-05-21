# ActionBar Planning

## Source

- Figma node: `8387:10564`
- Figma name: `Action Bar`
- Atomic level: atoms

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
      <td>Component metadata and variant axes from `docs/component-backlog/figma-components.json`</td>
      <td>Type maps to single and dual action layouts.</td>
    </tr>
    <tr>
      <td>User-approved interaction review</td>
      <td><code>primaryState</code> and <code>secondaryState</code> show pressed feedback without adding internal state.</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: component has a focused presentational purpose.
- [x] Props over state: visual state, pressed feedback, and content are controlled by props.
- [x] Descriptive typed API: exported props and variant types are available from `src/index.ts`.
- [x] No business logic: no fetching, storage, auth, routing, or app-state ownership.
- [x] Accessibility basics: labels, roles, or native semantics are provided where needed.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the central stories convention.
- [x] Simple props: public props use primitive values instead of complex objects.
- [x] Defaults and variants: defaults map to sourced Figma defaults where available.
- [x] Storybook states, args, controls, and behavior docs: generated stories include controls and grouped examples.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include grouped examples and HTML tables.
