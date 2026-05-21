import { useEffect, useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from '../../components/SideBar';

const meta = {
  title: 'Organisms/Side Bar/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  args: { selectedIndex: 0 },
  argTypes: {
    selectedIndex: { control: { type: 'number', min: 0, max: 3 }, table: { category: 'State' } },
    firstLabel: { control: 'text', table: { category: 'Content' } },
    secondLabel: { control: 'text', table: { category: 'Content' } },
    thirdLabel: { control: 'text', table: { category: 'Content' } },
    fourthLabel: { control: 'text', table: { category: 'Content' } },
    onItemSelect: { action: 'item select', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9275-1994' },
    docs: { description: { component: 'SideBar composes sidebar navigation items and keeps selection controlled by props.' } },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveSideBar(args: ComponentProps<typeof SideBar>) {
  const [selectedIndex, setSelectedIndex] = useState(args.selectedIndex ?? 0);

  useEffect(() => {
    setSelectedIndex(args.selectedIndex ?? 0);
  }, [args.selectedIndex]);

  return (
    <SideBar
      {...args}
      selectedIndex={selectedIndex}
      onItemSelect={(index) => {
        setSelectedIndex(index);
        args.onItemSelect?.(index);
      }}
    />
  );
}

export const Default: Story = { render: (args) => <InteractiveSideBar {...args} /> };
