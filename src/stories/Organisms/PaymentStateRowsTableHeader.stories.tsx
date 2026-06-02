import type { Meta, StoryObj } from '@storybook/react';

import { PaymentStateRowsTableHeader } from '../../components/PaymentStateRowsTableHeader';

const meta = {
  title: 'Domain Components/Payments & Loans/PaymentStateRowsTableHeader',
  component: PaymentStateRowsTableHeader,
  tags: ['autodocs'],
  args: { firstColumn: 'Payment', secondColumn: 'Due date', thirdColumn: 'Status' },
  argTypes: {
    semantic: { control: 'boolean', table: { category: 'Accessibility' } },
    firstColumn: { control: 'text', table: { category: 'Content' } },
    secondColumn: { control: 'text', table: { category: 'Content' } },
    thirdColumn: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7483-6447' },
    docs: { description: { component: 'PaymentStateRowsTableHeader is the sourced table header component for payment state rows.' } },
  },
} satisfies Meta<typeof PaymentStateRowsTableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
