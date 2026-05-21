# StatusIndicator Planning

## Source

- Figma node: `7873:607`
- Family: Lists
- Atomic level: Atom
- Figma component set: `Status Indicator`

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
      <td><code>Status</code></td>
      <td><code>Completed</code>, <code>Neutral</code>, <code>Attention</code></td>
      <td><code>status</code> prop maps to the three Figma status colors</td>
    </tr>
    <tr>
      <td><code>Change_Icon</code></td>
      <td>Instance swap, default <code>error_outline</code></td>
      <td>Default icon is rendered; alternate preferred values are documented as a mapping gap</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: communicates a compact list or step status marker.
- [x] Props over state: status and accessible label are controlled by props.
- [x] Descriptive typed API: exported `StatusIndicatorProps` and `StatusIndicatorStatus`.
- [x] No business logic: no fetching, storage, auth, routing, or app-state ownership.
- [x] Accessibility basics: uses `role="img"` and a configurable accessible label.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the workspace central stories convention.
- [x] Simple props: props are primitive values only.
- [x] Defaults and variants: default status matches Figma's Completed default.
- [x] Storybook states, args, controls, and behavior docs: status and label controls are documented.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include grouped examples and HTML tables.
