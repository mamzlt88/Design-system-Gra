# SegmentedSpinner Planning

## Source

- Figma node: `9761:597`
- Family: Loading & Progress Indicators
- Atomic level: Atom
- Figma component set: `Segmented Spinner`

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
      <td><code>Rotation</code></td>
      <td><code>1</code>, <code>2</code>, <code>3</code>, <code>4</code></td>
      <td><code>rotation</code> prop maps to four opacity frames</td>
    </tr>
    <tr>
      <td>Segments</td>
      <td>Eight teal segments at 45-degree increments</td>
      <td>SVG segments preserve the source opacity pattern</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: communicates a compact segmented loading frame.
- [x] Props over state: the rotation frame and accessible label are controlled by props.
- [x] Descriptive typed API: exported `SegmentedSpinnerProps` and `SegmentedSpinnerRotation`.
- [x] No business logic: no fetching, storage, auth, routing, timers, or app-state ownership.
- [x] Accessibility basics: uses `role="status"` and a configurable accessible label.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the workspace central stories convention.
- [x] Simple props: props are primitive values only.
- [x] Defaults and variants: default frame matches Figma's Rotation 1.
- [x] Storybook states, args, controls, and behavior docs: rotation and label controls are documented.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include grouped examples and HTML tables.
