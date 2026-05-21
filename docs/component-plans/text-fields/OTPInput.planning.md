# OTPInput Planning

## Source

- Figma node: `7878:736`
- Family: Text Fields
- Atomic level: Atom
- Figma component: `OTP Input`

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
      <td>OTP input boxes</td>
      <td>Six `OTP Input Box` instances</td>
      <td><code>length={6}</code> by default</td>
    </tr>
    <tr>
      <td><code>Show_Supp.Text</code></td>
      <td>Boolean</td>
      <td><code>showSupportingText</code> controls supporting text visibility</td>
    </tr>
    <tr>
      <td><code>Supp_Text</code></td>
      <td>Text</td>
      <td><code>supportingText</code> controls supporting text content</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: composes OTP digit slots and supporting text.
- [x] Props over state: value, active index, error state, and supporting text are supplied by props.
- [x] Descriptive typed API: exported `OTPInputProps`.
- [x] No business logic: no fetching, verification, submission, storage, auth, routing, or app-state ownership.
- [x] Accessibility basics: uses a labelled group and labelled digit inputs.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the workspace central stories convention.
- [x] Simple props: value is a string rather than a complex array of digit objects.
- [x] Defaults and variants: default length and supporting text visibility match the source component.
- [x] Storybook states, args, controls, and behavior docs: empty, active, filled, and error examples are documented.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include grouped examples and HTML tables.
