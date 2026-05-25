import type { Meta, StoryObj } from '@storybook/react';

import { PendingBalanceRows } from '../../components/PendingBalanceRows';

const types = ['paymentContent', 'header', 'interestContent'] as const;

const meta = {
  title: 'Domain Components/Payments & Loans/PendingBalanceRows',
  component: PendingBalanceRows,
  tags: ['autodocs'],
  args: { type: 'paymentContent', label: 'Pending payment', dueDate: 'May 20', amount: '$125.00' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    label: { control: 'text', table: { category: 'Content' } },
    dueDate: { control: 'text', table: { category: 'Content' } },
    amount: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7489-926' },
    docs: { description: { component: 'PendingBalanceRows represents payment, header, and interest-content variants.' } },
  },
} satisfies Meta<typeof PendingBalanceRows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentContent: Story = {};
export const Header: Story = { args: { type: 'header' } };
export const InterestContent: Story = { args: { type: 'interestContent' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div role="table" style={{ border: '1px solid #E6E6E6', maxWidth: 560 }}>
      <PendingBalanceRows type="header" />
      <PendingBalanceRows />
      <PendingBalanceRows type="interestContent" />
    </div>
  ),
};
