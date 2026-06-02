import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CheckboxList, type CheckboxListItem } from '../../components/CheckboxList';

const itemCounts = [1, 2, 3, 4, 5, 6, 7] as const;
const defaultItems: CheckboxListItem[] = [
  { id: 'loan-purpose', label: 'Loan purpose', checked: true },
  { id: 'business-plan', label: 'Business plan', supportiveText: 'Recommended before submission' },
  { id: 'proof-address', label: 'Proof of address' },
];

const meta = {
  title: 'Classic Components/Inputs/CheckboxList',
  component: CheckboxList,
  tags: ['autodocs'],
  args: {
    items: defaultItems,
    showTopScrollIndicator: true,
    showBottomScrollIndicator: true,
    showTextField: false,
    textFieldLabel: 'Other',
  },
  argTypes: {
    items: { control: 'object', table: { category: 'Content' } },
    onItemChange: { table: { category: 'Events' } },
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
    docs: { description: { component: 'CheckboxList stacks CheckboxButton rows from data, with deprecated count props kept for Figma snapshot compatibility.' } },
  },
} satisfies Meta<typeof CheckboxList>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveCheckboxList() {
  const [items, setItems] = useState(defaultItems);

  return (
    <CheckboxList
      items={items}
      onItemChange={(id, checked) => setItems((currentItems) => currentItems.map((item) => (item.id === id ? { ...item, checked } : item)))}
    />
  );
}

export const DataDriven: Story = {};
export const Interactive: Story = { render: () => <InteractiveCheckboxList /> };
export const WithTextField: Story = { args: { items: [{ id: 'other', label: 'Other' }], showTextField: true } };
export const LegacyCountExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <CheckboxList itemCount={1} showTextField />
      <CheckboxList itemCount={3} selectedCount={1} />
      <CheckboxList itemCount={7} selectedCount={2} />
    </div>
  ),
};
