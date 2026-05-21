# SectionBar Planning

## Source

- Figma node: `7752:2780`
- Figma name: `Section Nav Bar`
- Storybook group: `Atoms/Navigation Bars`

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
      <td>Figma component set exposes <code>State=Default</code> and <code>State=Selected</code></td>
      <td><code>state</code> controls inactive and current item treatment.</td>
    </tr>
    <tr>
      <td>Figma component property <code>Show_Badge</code></td>
      <td><code>showBadge</code> controls the activity indicator.</td>
    </tr>
    <tr>
      <td>Figma component property <code>Section_Text</code></td>
      <td><code>label</code> controls the visible accessible text.</td>
    </tr>
    <tr>
      <td>Figma component property <code>Change_Icon</code></td>
      <td><code>icon</code> controls the icon variant.</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: component renders one navigation item.
- [x] Props over state: selected, badge, and pressed interaction visuals are controlled by props.
- [x] Descriptive typed API: exported props and variant types are available from `src/index.ts`.
- [x] No business logic: no fetching, storage, auth, routing, or app-state ownership.
- [x] Accessibility basics: native button, visible label, badge label, and `aria-current` for selected state.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the central stories convention.
- [x] Simple props: public props use primitive values and one native button event surface.
- [x] Defaults and variants: defaults map to sourced Figma defaults where available.
- [x] Storybook states, args, controls, and behavior docs: stories include controls, grouped states, and pressed interaction examples.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include grouped examples and HTML tables.
