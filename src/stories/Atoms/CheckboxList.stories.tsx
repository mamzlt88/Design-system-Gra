import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxList } from '../../components/CheckboxList';

const itemCounts = [1, 2, 3, 4, 5, 6, 7] as const;

const meta = {
  title: 'Atoms/Lists/CheckboxList',
  component: CheckboxList,
  tags: ['autodocs'],
  args: {
    itemCount: 3,
    selectedCount: 1,
    itemLabelPrefix: 'Item',
    showTopScrollIndicator: true,
    showBottomScrollIndicator: true,
    showTextField: false,
    textFieldLabel: 'Other',
  },
  argTypes: {
    itemCount: { control: { type: 'select' }, options: itemCounts, table: { category: 'Structure' } },
    selectedCount: { control: { type: 'number', min: 0, max: 7 }, table: { category: 'State' } },
    itemLabelPrefix: { control: 'text', table: { category: 'Content' } },
    showTopScrollIndicator: { control: 'boolean', table: { category: 'Appearance' } },
    showBottomScrollIndicator: { control: 'boolean', table: { category: 'Appearance' } },
    showTextField: { control: 'boolean', table: { category: 'Content' } },
    textFieldLabel: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7673-5287' },
    docs: { description: { component: 'CheckboxList stacks sourced CheckboxRadioButton rows with optional scroll indicators and text field.' } },
  },
} satisfies Meta<typeof CheckboxList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeItems: Story = {};
export const SevenItems: Story = { args: { itemCount: 7, selectedCount: 2 } };
export const WithTextField: Story = { args: { itemCount: 1, showTextField: true } };
export const CountExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <CheckboxList itemCount={1} showTextField />
      <CheckboxList itemCount={3} selectedCount={1} />
      <CheckboxList itemCount={7} selectedCount={2} />
    </div>
  ),
};
