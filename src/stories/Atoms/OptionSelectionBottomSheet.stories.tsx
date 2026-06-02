import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { OptionSelectionBottomSheet } from '../../components/OptionSelectionBottomSheet';

const optionCounts = [1, 2, 3, 4] as const;
const defaultOptions = [
  { id: 'pay-now', label: 'Pay now' },
  { id: 'schedule-payment', label: 'Schedule payment' },
  { id: 'call-support', label: 'Call support', disabled: true },
];

const meta = {
  title: 'Domain Components/Cards & Info/OptionSelectionBottomSheet',
  component: OptionSelectionBottomSheet,
  tags: ['autodocs'],
  args: {
    options: defaultOptions,
    titleText: 'Modal Title - Instructional message about user decision',
    subtitleText: 'Modal SubTitle:',
  },
  argTypes: {
    options: { control: 'object', table: { category: 'Content' } },
    onOptionSelect: { table: { category: 'Events' } },
    optionCount: { control: { type: 'select' }, options: optionCounts, table: { category: 'Structure' } },
    titleText: { control: 'text', table: { category: 'Content' } },
    subtitleText: { control: 'text', table: { category: 'Content' } },
    optionLabelPrefix: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7622-5376' },
    docs: { description: { component: 'OptionSelectionBottomSheet presents selectable options from data, with deprecated count props kept for Figma snapshot compatibility.' } },
  },
} satisfies Meta<typeof OptionSelectionBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveOptionSelectionBottomSheet() {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <OptionSelectionBottomSheet options={defaultOptions} onOptionSelect={setSelectedId} />
      <p style={{ fontFamily: 'Open Sans, Arial, sans-serif', fontSize: 14, margin: 0 }}>
        Selected: {selectedId ?? 'None'}
      </p>
    </div>
  );
}

export const DataDriven: Story = {};
export const Interactive: Story = { render: () => <InteractiveOptionSelectionBottomSheet /> };
export const LegacyOptionExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 32 }}>
      {optionCounts.map((optionCount) => <OptionSelectionBottomSheet key={optionCount} optionCount={optionCount} />)}
    </div>
  ),
};
