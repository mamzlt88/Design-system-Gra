import { useEffect, useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NavigationalList } from '../../components/NavigationalList';

const itemCounts = [2, 3, 4, 5, 6, 7] as const;

const meta = {
  title: 'Organisms/Lists/NavigationalList',
  component: NavigationalList,
  tags: ['autodocs'],
  args: { numberOfItems: 4, activeIndex: 0 },
  argTypes: {
    numberOfItems: { control: { type: 'select' }, options: itemCounts, table: { category: 'Variant' } },
    activeIndex: { control: { type: 'number', min: 0, max: 6 }, table: { category: 'State' } },
    onItemSelect: { action: 'item select', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9229-6313' },
    docs: { description: { component: 'NavigationalList composes sourced navigational list items and supports 2 to 7 item variants.' } },
  },
} satisfies Meta<typeof NavigationalList>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveList(args: ComponentProps<typeof NavigationalList>) {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex ?? 0);

  useEffect(() => {
    setActiveIndex(args.activeIndex ?? 0);
  }, [args.activeIndex]);

  return (
    <NavigationalList
      {...args}
      activeIndex={activeIndex}
      onItemSelect={(index) => {
        setActiveIndex(index);
        args.onItemSelect?.(index);
      }}
    />
  );
}

export const FourItems: Story = { render: (args) => <InteractiveList {...args} /> };
export const TwoItems: Story = { args: { numberOfItems: 2 }, render: (args) => <InteractiveList {...args} /> };
export const SevenItems: Story = { args: { numberOfItems: 7 }, render: (args) => <InteractiveList {...args} /> };
export const ItemCountExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {itemCounts.map((numberOfItems) => (
        <NavigationalList key={numberOfItems} numberOfItems={numberOfItems} />
      ))}
    </div>
  ),
};
