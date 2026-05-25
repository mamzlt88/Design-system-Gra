import type { Meta, StoryObj } from '@storybook/react';

import { OptionSelectionBottomSheet } from '../../components/OptionSelectionBottomSheet';

const optionCounts = [1, 2, 3, 4] as const;

const meta = {
  title: 'Domain Components/Cards & Info/OptionSelectionBottomSheet',
  component: OptionSelectionBottomSheet,
  tags: ['autodocs'],
  args: {
    optionCount: 2,
    titleText: 'Modal Title - Instructional message about user decision',
    subtitleText: 'Modal SubTitle:',
    optionLabelPrefix: 'Option',
  },
  argTypes: {
    optionCount: { control: { type: 'select' }, options: optionCounts, table: { category: 'Structure' } },
    titleText: { control: 'text', table: { category: 'Content' } },
    subtitleText: { control: 'text', table: { category: 'Content' } },
    optionLabelPrefix: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7622-5376' },
    docs: { description: { component: 'OptionSelectionBottomSheet presents one to four selectable options in a mobile bottom sheet.' } },
  },
} satisfies Meta<typeof OptionSelectionBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoOptions: Story = {};
export const FourOptions: Story = { args: { optionCount: 4 } };
export const OptionExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 32 }}>
      {optionCounts.map((optionCount) => <OptionSelectionBottomSheet key={optionCount} optionCount={optionCount} />)}
    </div>
  ),
};
