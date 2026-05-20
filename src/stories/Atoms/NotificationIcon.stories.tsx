import type { Meta, StoryObj } from '@storybook/react';

import { NotificationIcon } from '../../components/NotificationIcon';

const meta = {
  title: 'Atoms/Cards/NotificationIcon',
  component: NotificationIcon,
  tags: ['autodocs'],
  args: {
    type: 'requestedLoan',
    label: 'Requested loan',
    size: 56,
  },
  argTypes: {
    type: {
      description: 'The notification meaning from Figma.',
      control: { type: 'select' },
      options: ['requestedLoan', 'loanRenewal', 'loanApprovalPending', 'weeklyPayment', 'centerMeeting'],
      table: {
        category: 'Content',
        defaultValue: { summary: 'requestedLoan' },
        type: {
          summary: "'requestedLoan' | 'loanRenewal' | 'loanApprovalPending' | 'weeklyPayment' | 'centerMeeting'",
        },
      },
    },
    label: {
      description: 'Accessible label for screen readers.',
      control: { type: 'text' },
      table: { category: 'Accessibility', type: { summary: 'string' } },
    },
    size: {
      description: 'Icon container size in pixels.',
      control: { type: 'number', min: 40, max: 80, step: 4 },
      table: { category: 'Layout', defaultValue: { summary: '56' }, type: { summary: 'number' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=2870-5575',
    },
    docs: {
      description: {
        component: 'NotificationIcon represents the type of activity shown in a card or notification item.',
      },
    },
  },
} satisfies Meta<typeof NotificationIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RequestedLoan: Story = {};

export const LoanRenewal: Story = {
  args: { type: 'loanRenewal', label: 'Loan renewal' },
};

export const LoanApprovalPending: Story = {
  args: { type: 'loanApprovalPending', label: 'Loan approval pending' },
};

export const WeeklyPayment: Story = {
  args: { type: 'weeklyPayment', label: 'Weekly payment' },
};

export const CenterMeeting: Story = {
  args: { type: 'centerMeeting', label: 'Center meeting' },
};

export const AllTypes: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <NotificationIcon type="requestedLoan" label="Requested loan" />
      <NotificationIcon type="loanRenewal" label="Loan renewal" />
      <NotificationIcon type="loanApprovalPending" label="Loan approval pending" />
      <NotificationIcon type="weeklyPayment" label="Weekly payment" />
      <NotificationIcon type="centerMeeting" label="Center meeting" />
    </div>
  ),
};
