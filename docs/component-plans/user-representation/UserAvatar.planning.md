# UserAvatar Planning

## Source

- Figma node: `1640:11011`
- Figma name: `Avatar`
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
      <td>Size, Type, Avatar, Initials_Text, and Show_Star map to controlled props.</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: component has a focused presentational purpose.
- [x] Props over state: visual state and content are controlled by props.
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
