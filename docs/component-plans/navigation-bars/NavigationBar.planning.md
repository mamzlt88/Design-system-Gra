# NavigationBar Planning

## Source

- Figma node: `7407:2558`
- Figma name: `Navigation Bar`
- Figma atomic level: organisms
- Storybook group: `Atoms/Navigation Bars` to keep the navigation family merged together for review

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
      <td>Figma component set exposes <code>Language</code> with <code>English</code> and <code>Spanish</code></td>
      <td><code>language</code> prop controls label text.</td>
    </tr>
    <tr>
      <td>Figma component set exposes <code>Section</code> with <code>My Loan</code>, <code>Payments</code>, <code>New Loan</code>, <code>Approvals</code>, <code>Resources</code>, and <code>None</code></td>
      <td><code>section</code> prop controls the current item and <code>aria-current</code>.</td>
    </tr>
    <tr>
      <td>User-approved interaction review</td>
      <td><code>pressedSection</code> shows transient pressed feedback while <code>section</code> remains the selected item.</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: component only renders persistent bottom navigation and composes `SectionBar`.
- [x] Props over state: active section, language, and pressed feedback are controlled by props.
- [x] Descriptive typed API: exported props and variant types are available from `src/index.ts`.
- [x] No business logic: no fetching, storage, auth, routing, or app-state ownership.
- [x] Accessibility basics: native `nav`, visible labels, keyboard-friendly buttons, and `aria-current` for the active item.
- [x] Naming and co-location expectations: component source is in `src/components`; Storybook files follow the central stories convention.
- [x] Simple props: public props use primitive values and one callback event.
- [x] Defaults and variants: defaults map to sourced Figma defaults where available.
- [x] Storybook states, args, controls, and behavior docs: generated stories include controls and story-only click state for the interaction canvas.

## Review Gate

- [x] Best Practices Review checklist approved.
- [x] Figma mapping is documented.
- [x] Storybook docs include interactive examples and HTML tables.
