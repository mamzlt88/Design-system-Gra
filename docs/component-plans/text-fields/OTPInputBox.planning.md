# OTPInputBox Planning

## Source

- Figma node: `7878:668`
- Family: Text Fields
- Atomic level: Atom
- Figma component set: `OTP Input Box`

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
      <td><code>Enabled</code>, <code>Active</code>, <code>Filled</code>, <code>Filled Error</code>, <code>Active Error</code></td>
      <td><code>state</code> prop maps to the sourced visual states</td>
    </tr>
    <tr>
      <td><code>No_Text</code></td>
      <td>Text</td>
      <td><code>value</code> controls the visible digit</td>
    </tr>
    <tr>
      <td><code>Show_No</code></td>
      <td>Boolean</td>
      <td><code>showValue</code> controls digit visibility</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: renders one OTP digit slot.
- [x] Props over state: value and visual state are supplied by props.
- [x] Descriptive typed API: exported `OTPInputBoxProps` and `OTPInputBoxState`.
- [x] No business logic: no fetching, verification, storage, auth, routing, or app-state ownership.
- [x] Accessibility basics: uses a native input, numeric input hints, labels, and `aria-invalid` for errors.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the workspace central stories convention.
- [x] Simple props: props are primitive values only.
- [x] Defaults and variants: default state maps to Figma's Enabled state.
- [x] Storybook states, args, controls, and behavior docs: all sourced OTP box states are documented.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include grouped examples and HTML tables.
