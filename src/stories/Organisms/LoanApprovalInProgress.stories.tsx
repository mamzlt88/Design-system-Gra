import type { Meta, StoryObj } from '@storybook/react';

import { LoanApprovalInProgress } from '../../components/LoanApprovalInProgress';

const types = ['centerApprovalInProgress', 'centerApprovalOnHold', 'amountNeedsApproval', 'resubmitDocuments'] as const;

const meta = {
  title: 'Organisms/Illustrations/LoanApprovalInProgress',
  component: LoanApprovalInProgress,
  tags: ['autodocs'],
  args: { type: 'centerApprovalInProgress' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    title: { control: 'text', table: { category: 'Content' } },
    description: { control: 'text', table: { category: 'Content' } },
    actionLabel: { control: 'text', table: { category: 'Content' } },
    onAction: { action: 'action', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7575-11565' },
    docs: { description: { component: 'LoanApprovalInProgress displays sourced approval-state illustration variants.' } },
  },
} satisfies Meta<typeof LoanApprovalInProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CenterApprovalInProgress: Story = {};
export const CenterApprovalOnHold: Story = { args: { type: 'centerApprovalOnHold' } };
export const AmountNeedsApproval: Story = { args: { type: 'amountNeedsApproval' } };
export const ResubmitDocuments: Story = { args: { type: 'resubmitDocuments' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      {types.map((type) => (
        <LoanApprovalInProgress key={type} type={type} />
      ))}
    </div>
  ),
};
