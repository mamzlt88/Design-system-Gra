# CircularSpinner Planning

## Source

- Figma node: `9476:242`
- Family: Loading & Progress Indicators
- Atomic level: Atom
- Figma component set: `Circular Spinner`

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
      <td><code>Size</code></td>
      <td><code>Small</code>, <code>Medium</code>, <code>Large</code></td>
      <td><code>size</code> prop maps to 24px, 28px, and 32px</td>
    </tr>
    <tr>
      <td><code>Rotation</code></td>
      <td><code>1</code>, <code>2</code>, <code>3</code>, <code>4</code></td>
      <td><code>rotation</code> prop maps to static frames</td>
    </tr>
    <tr>
      <td>Prototype</td>
      <td>Auto-advance with linear smart animation</td>
      <td><code>animated</code> defaults to true</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: communicates a compact indeterminate loading state.
- [x] Props over state: size, rotation, animation, and label are controlled by props.
- [x] Descriptive typed API: exported `CircularSpinnerProps`, `CircularSpinnerSize`, and `CircularSpinnerRotation`.
- [x] No business logic: no fetching, storage, auth, routing, or app-state ownership.
- [x] Accessibility basics: uses `role="status"` and a configurable accessible label.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the workspace central stories convention.
- [x] Simple props: props are primitive values only.
- [x] Defaults and variants: defaults match Figma's Small / Rotation 1 starting point.
- [x] Storybook states, args, controls, and behavior docs: size, rotation, animated, and label controls are documented.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include grouped examples and HTML tables.
