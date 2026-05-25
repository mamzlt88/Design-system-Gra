import type { Meta, StoryObj } from '@storybook/react';

import { PastLoansRows } from '../../components/PastLoansRows';

const types = ['content', 'header'] as const;

const meta = {
  title: 'Domain Components/Payments & Loans/PastLoansRows',
  component: PastLoansRows,
  tags: ['autodocs'],
  args: { type: 'content', loanLabel: 'Loan 2048', amount: '$500.00', statusLabel: 'CLOSED' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    loanLabel: { control: 'text', table: { category: 'Content' } },
    amount: { control: 'text', table: { category: 'Content' } },
    statusLabel: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7484-1084' },
    docs: { description: { component: 'PastLoansRows represents header and content variants for past loan rows.' } },
  },
} satisfies Meta<typeof PastLoansRows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {};
export const Header: Story = { args: { type: 'header' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div role="table" style={{ border: '1px solid #E6E6E6', maxWidth: 560 }}>
      <PastLoansRows type="header" />
      <PastLoansRows />
    </div>
  ),
};
