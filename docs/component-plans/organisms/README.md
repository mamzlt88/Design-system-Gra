# Organism Component Plans

Organism plans track composed UI components sourced from the Figma catalog. These components may compose atoms and molecules, but they must remain presentational, prop-controlled, and documented with explicit Figma mapping.

## Coverage

Figma MCP access was rate-limited during this pass. The implementation uses local catalog metadata for variant axes and records final visual matching as a follow-up review gate.

<table>
  <thead>
    <tr>
      <th>Family</th>
      <th>Components</th>
      <th>Status</th>
      <th>Review note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Buttons</td>
      <td><code>InformationButton</code></td>
      <td>Implemented</td>
      <td>Detailed plan available in <code>buttons/InformationButton.planning.md</code></td>
    </tr>
    <tr>
      <td>Cards</td>
      <td><code>InformationalCard</code></td>
      <td>Implemented</td>
      <td>Uses sourced <code>Bg_Color</code> axis</td>
    </tr>
    <tr>
      <td>Headers Variations</td>
      <td><code>AppHeader</code>, <code>WebHeader</code></td>
      <td>Implemented</td>
      <td>Uses sourced size, type, and loading axes</td>
    </tr>
    <tr>
      <td>Illustrations</td>
      <td><code>LoanApprovalInProgress</code></td>
      <td>Implemented</td>
      <td>Uses sourced approval type axis with placeholder illustration treatment pending Figma review</td>
    </tr>
    <tr>
      <td>List Items</td>
      <td><code>NavigationalListItem</code>, <code>SideBarItem</code></td>
      <td>Implemented</td>
      <td>Uses sourced state, leading, and pressed-style axes</td>
    </tr>
    <tr>
      <td>Lists</td>
      <td><code>NavigationalList</code></td>
      <td>Implemented</td>
      <td>Uses sourced item-count axis and story-only selection state</td>
    </tr>
    <tr>
      <td>Modals &amp; Bottom Sheets</td>
      <td><code>StandardBottomSheet</code>, <code>StandardModal</code></td>
      <td>Implemented</td>
      <td>Uses sourced modal type axis; bottom sheet has no variant axis</td>
    </tr>
    <tr>
      <td>Navigation Bars</td>
      <td><code>NavigationBar</code>, <code>SectionBar</code></td>
      <td>Implemented</td>
      <td>Kept in the existing <code>Atoms/Navigation Bars</code> Storybook group per workspace convention</td>
    </tr>
    <tr>
      <td>Side Bar</td>
      <td><code>SideBar</code></td>
      <td>Implemented</td>
      <td>Composes <code>SideBarItem</code> with story-only selection state</td>
    </tr>
    <tr>
      <td>Tables</td>
      <td><code>AttendanceReportRows</code>, <code>LastPaymentsRows</code>, <code>MambuWebviewTable</code>, <code>PastLoansRows</code>, <code>PaymentStateRowsTableHeader</code>, <code>PaymentStatusRow</code>, <code>PendingBalanceRows</code></td>
      <td>Implemented</td>
      <td>Implemented as focused row/header components rather than data-owning tables</td>
    </tr>
  </tbody>
</table>

## Best Practices Review

- [x] One responsibility: each organism renders one sourced UI pattern.
- [x] Props over state: component state is controlled by props; interactive Storybook examples keep state in story files only.
- [x] Descriptive typed API: exported props and variant types are available from `src/index.ts`.
- [x] No business logic: no fetching, storage, auth, routing, analytics, or app-state ownership.
- [x] Accessibility basics: native buttons, links, navigation landmarks, dialog roles, row roles, visible labels, and controlled event callbacks are used where relevant.
- [x] Naming and co-location expectations: source files are in `src/components`; Storybook files follow the central stories convention.
- [x] Simple props: public APIs use primitive values and explicit callbacks; list data is represented with simple labels for this first pass.
- [x] Defaults and variants: defaults map to local catalog metadata where available.
- [x] Storybook states, args, controls, and behavior docs: all organism stories include args/argTypes and variant example canvases where relevant.

## Review Gate

- [x] Organism coverage is represented in Storybook.
- [x] Catalog and backlog status are synced to `implemented`.
- [x] Figma MCP rate-limit gap is recorded.
- [ ] Final pixel matching against Figma screenshots after MCP access is restored.
