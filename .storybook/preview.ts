import type { Preview } from '@storybook/react';

import DocumentationTemplate from './DocumentationTemplate.mdx';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'requiredFirst',
    },
    docs: {
      page: DocumentationTemplate,
      toc: {
        headingSelector: 'h1, h2, h3',
        title: 'Contents',
      },
    },
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Tokens',
          [
            'Color',
            'Color References',
            'Elevations',
            'Spacing',
            'Layout Grid',
            'Radius Stroke',
            'Typography',
            'Icons',
            'Logo',
            'Illustrations',
          ],
          'Classic Components',
          [
            'Actions',
            ['Button', 'IconButton', 'PillButton', 'ExternalLinkButton', 'ValueAdjusterButton'],
            'Inputs',
            ['CheckboxButton', 'RadioButton', 'CheckboxList', 'Switch', 'DocumentUploadSlot', 'OTPInput', 'OTPInputBox'],
            'Navigation',
            [
              'NavigationBar',
              'ActionBar',
              'AppHeader',
              'WebHeader',
              'SideBar',
              'NavigationalList',
              'NavigationalListItem',
            ],
            'Feedback',
            [
              'StatusBadge',
              'NotificationBadge',
              'NotificationIcon',
              'ColorIndicator',
              'StatusIndicator',
              'CircularSpinner',
              'SegmentedSpinner',
            ],
            'Overlays',
            ['Tooltip', 'StandardModal', 'StandardBottomSheet'],
            'Media',
            ['IconContainer', 'LanguageImage', 'LanguageSelector'],
            'Identity',
            ['Logo', 'UserAvatar', 'GuidanceAvatar'],
          ],
          'Domain Components',
          [
            'Financial Inputs',
            ['AmountSelector', 'SubDetailsGroup', 'InformationButton'],
            'Payments & Loans',
            [
              'MambuWebviewTable',
              'AttendanceReportRows',
              'LastPaymentsRows',
              'PastLoansRows',
              'PaymentStatusRow',
              'PendingBalanceRows',
              'PaymentStateRowsTableHeader',
            ],
            'Cards & Info',
            ['InformationalCard', 'OptionSelectionBottomSheet'],
            'Brand',
            ['SavingsProgramLogo'],
            'Illustrations',
            ['SavingsGoal', 'LoanApprovalInProgress', 'Figma Canvases'],
          ],
          'Catalog',
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
