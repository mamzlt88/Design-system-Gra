import type { Meta, StoryObj } from '@storybook/react';

import { SubDetailsGroup } from '../../components/SubDetailsGroup';

const rowOptions = [1, 2, 3] as const;

const meta = {
  title: 'Atoms/Accordions/SubDetailsGroup',
  component: SubDetailsGroup,
  tags: ['autodocs'],
  args: { rows: 1, labelPrefix: 'Label', valuePrefix: 'Value' },
  argTypes: {
    rows: { control: { type: 'select' }, options: rowOptions, table: { category: 'Structure' } },
    labelPrefix: { control: 'text', table: { category: 'Content' } },
    valuePrefix: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7538-3968' },
    docs: { description: { component: 'SubDetailsGroup stacks one to three compact detail rows.' } },
  },
} satisfies Meta<typeof SubDetailsGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneRow: Story = {};
export const TwoRows: Story = { args: { rows: 2 } };
export const ThreeRows: Story = { args: { rows: 3 } };
export const RowExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 20 }}>
      {rowOptions.map((rows) => <SubDetailsGroup key={rows} rows={rows} />)}
    </div>
  ),
};
