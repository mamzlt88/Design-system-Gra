import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '../../components/Tooltip';

const placements = ['top', 'bottom'] as const;
const alignments = ['left', 'middle', 'right'] as const;

const meta = {
  title: 'Classic Components/Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: { text: 'Tooltip Text', arrowPlacement: 'top', arrowAlignment: 'left', showRightIcon: true },
  argTypes: {
    text: { control: 'text', table: { category: 'Content' } },
    arrowPlacement: { control: { type: 'select' }, options: placements, table: { category: 'Variant' } },
    arrowAlignment: { control: { type: 'select' }, options: alignments, table: { category: 'Variant' } },
    showRightIcon: { control: 'boolean', table: { category: 'Appearance' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7443-9977' },
    docs: { description: { component: 'Tooltip displays helper text with sourced top or bottom arrow placement and alignment variants.' } },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopLeft: Story = {};
export const BottomMiddle: Story = { args: { arrowPlacement: 'bottom', arrowAlignment: 'middle' } };
export const PlacementExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 28 }}>
      {placements.map((arrowPlacement) => (
        <div key={arrowPlacement} style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {alignments.map((arrowAlignment) => (
            <Tooltip arrowAlignment={arrowAlignment} arrowPlacement={arrowPlacement} key={`${arrowPlacement}-${arrowAlignment}`} />
          ))}
        </div>
      ))}
    </div>
  ),
};
