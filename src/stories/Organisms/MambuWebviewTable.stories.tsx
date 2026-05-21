import type { Meta, StoryObj } from '@storybook/react';

import { MambuWebviewTable } from '../../components/MambuWebviewTable';

const types = ['content', 'header', 'total'] as const;
const sizes = ['small', 'medium'] as const;

const meta = {
  title: 'Organisms/Tables/MambuWebviewTable',
  component: MambuWebviewTable,
  tags: ['autodocs'],
  args: { type: 'content', size: 'medium', label: 'Principal', value: '$200.00', balance: '$1,250.00' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    size: { control: { type: 'select' }, options: sizes, table: { category: 'Variant' } },
    label: { control: 'text', table: { category: 'Content' } },
    value: { control: 'text', table: { category: 'Content' } },
    balance: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=8066-5933' },
    docs: { description: { component: 'MambuWebviewTable represents sourced row type and size variants for webview table rows.' } },
  },
} satisfies Meta<typeof MambuWebviewTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {};
export const Header: Story = { args: { type: 'header' } };
export const Total: Story = { args: { type: 'total' } };
export const Small: Story = { args: { size: 'small' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div role="table" style={{ border: '1px solid #E6E6E6', maxWidth: 620 }}>
      <MambuWebviewTable type="header" />
      <MambuWebviewTable />
      <MambuWebviewTable type="total" />
    </div>
  ),
};
