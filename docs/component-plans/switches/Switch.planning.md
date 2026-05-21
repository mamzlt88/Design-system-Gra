# Switch Planning

## Source

- Figma node: `7521:6965`
- Family: Switches
- Atomic level: Atom
- Figma component set: `Switch`

## Figma Evidence

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Values</th>
      <th>Implementation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>State</code></td>
      <td><code>Off</code>, <code>On</code>, <code>Disabled On</code>, <code>Disabled Off</code></td>
      <td><code>state</code> prop maps to the sourced switch states</td>
    </tr>
    <tr>
      <td><code>Show_Icon</code></td>
      <td>Boolean</td>
      <td><code>showIcon</code> controls the on-state check icon</td>
    </tr>
    <tr>
      <td><code>Dark_Mode</code></td>
      <td><code>No</code></td>
      <td>Not exposed because the source component only includes one value</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: controls a binary setting.
- [x] Props over state: state, icon visibility, accessible label, and click behavior are supplied by props.
- [x] Descriptive typed API: exported `SwitchProps` and `SwitchState`.
- [x] No business logic: no fetching, storage, auth, routing, or app-state ownership.
- [x] Accessibility basics: uses native button behavior with `role="switch"` and `aria-checked`.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the workspace central stories convention.
- [x] Simple props: props are primitive values only.
- [x] Defaults and variants: default state maps to Figma's Off state.
- [x] Storybook states, args, controls, and behavior docs: all sourced switch states are documented.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include grouped examples and HTML tables.
