import type { Meta, StoryObj } from '@storybook/react';

import { PaymentStatusRow } from '../../components/PaymentStatusRow';

const states = ['open', 'closed'] as const;

const meta = {
  title: 'Domain Components/Payments & Loans/PaymentStatusRow',
  component: PaymentStatusRow,
  tags: ['autodocs'],
  args: { state: 'open', paymentLabel: 'Payment 1', dueDate: 'May 20', amount: '$125.00' },
  argTypes: {
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    semantic: { control: 'boolean', table: { category: 'Accessibility' } },
    paymentLabel: { control: 'text', table: { category: 'Content' } },
    dueDate: { control: 'text', table: { category: 'Content' } },
    amount: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7484-1012' },
    docs: { description: { component: 'PaymentStatusRow represents sourced open and closed payment row states.' } },
  },
} satisfies Meta<typeof PaymentStatusRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};
export const Closed: Story = { args: { state: 'closed' } };
export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div role="table" style={{ border: '1px solid #E6E6E6', maxWidth: 620 }}>
      <PaymentStatusRow semantic state="open" />
      <PaymentStatusRow semantic state="closed" paymentLabel="Payment 2" />
    </div>
  ),
};
