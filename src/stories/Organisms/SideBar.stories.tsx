import { useEffect, useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from '../../components/SideBar';
import { SideBarItem } from '../../components/SideBarItem';

const meta = {
  title: 'Classic Components/Navigation/SideBar',
  component: SideBar,
  subcomponents: { SideBarItem },
  tags: ['autodocs'],
  args: {
    name: 'Full Name',
    detailLabel: 'Label 1',
    detailValue: 'Value 1',
    firstGroupLabel: 'Label 1',
    secondGroupLabel: 'Label 2',
  },
  argTypes: {
    selectedIndex: { control: { type: 'number', min: 0, max: 6 }, table: { category: 'State' } },
    name: { control: 'text', table: { category: 'Content' } },
    detailLabel: { control: 'text', table: { category: 'Content' } },
    detailValue: { control: 'text', table: { category: 'Content' } },
    firstGroupLabel: { control: 'text', table: { category: 'Content' } },
    secondGroupLabel: { control: 'text', table: { category: 'Content' } },
    firstLabel: { control: 'text', table: { category: 'Content' } },
    secondLabel: { control: 'text', table: { category: 'Content' } },
    thirdLabel: { control: 'text', table: { category: 'Content' } },
    fourthLabel: { control: 'text', table: { category: 'Content' } },
    fifthLabel: { control: 'text', table: { category: 'Content' } },
    accordionLabel: { control: 'text', table: { category: 'Content' } },
    footerLabel: { control: 'text', table: { category: 'Content' } },
    onBack: { action: 'back', table: { category: 'Events' } },
    onItemSelect: { action: 'item select', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9229-6716' },
    docs: { description: { component: 'SideBar is the mobile drawer navigation pattern with a profile header, grouped rows, an accordion row, and overlay area. SideBarItem is the row primitive used to build the navigation groups inside this component.' } },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveSideBar(args: ComponentProps<typeof SideBar>) {
  const [selectedIndex, setSelectedIndex] = useState(args.selectedIndex);

  useEffect(() => {
    setSelectedIndex(args.selectedIndex);
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
