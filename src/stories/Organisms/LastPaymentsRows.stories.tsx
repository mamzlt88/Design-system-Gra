import type { Meta, StoryObj } from '@storybook/react';

import { LastPaymentsRows } from '../../components/LastPaymentsRows';

const types = ['title', 'header', 'content'] as const;

const meta = {
  title: 'Domain Components/Payments & Loans/LastPaymentsRows',
  component: LastPaymentsRows,
  tags: ['autodocs'],
  args: { type: 'content', dueDate: 'May 20', amount: '$125.00', statusLabel: 'PAID' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    title: { control: 'text', table: { category: 'Content' } },
    dueDate: { control: 'text', table: { category: 'Content' } },
    amount: { control: 'text', table: { category: 'Content' } },
    statusLabel: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=8745-10511' },
    docs: { description: { component: 'LastPaymentsRows represents title, header, and content variants for the last payments table.' } },
  },
} satisfies Meta<typeof LastPaymentsRows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {};
export const Header: Story = { args: { type: 'header' } };
export const Title: Story = { args: { type: 'title' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div role="table" style={{ border: '1px solid #E6E6E6', maxWidth: 560 }}>
      <LastPaymentsRows type="title" />
      <LastPaymentsRows type="header" />
      <LastPaymentsRows />
    </div>
  ),
};
