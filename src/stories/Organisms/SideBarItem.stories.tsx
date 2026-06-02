import type { Meta, StoryObj } from '@storybook/react';

import { SideBarItem } from '../../components/SideBarItem';

const states = ['default', 'pressed'] as const;
const pressedStyles = ['nA', 'standard', 'emphasis'] as const;

const meta = {
  title: 'Classic Components/Navigation/SideBarItem',
  component: SideBarItem,
  tags: ['autodocs'],
  args: {
    label: 'Section',
    icon: 'person',
    state: 'default',
    pressedStyle: 'standard',
    showBadge: true,
    badgeText: 'NEW',
  },
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    icon: { control: 'text', table: { category: 'Content' } },
    trailingIcon: { control: 'text', table: { category: 'Content' } },
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    pressedStyle: { control: { type: 'select' }, options: pressedStyles, table: { category: 'State' } },
    showBadge: { control: 'boolean', table: { category: 'Content' } },
    badgeText: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'SideBarItem is the row primitive used by SideBar for drawer navigation groups and accordion rows.',
      },
    },
  },
} satisfies Meta<typeof SideBarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Pressed: Story = { args: { state: 'pressed' } };
export const Accordion: Story = { args: { icon: 'globe', label: 'Accordion Title', trailingIcon: 'chevronDown' } };

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: (args) => (
    <div style={{ display: 'grid', gap: 8, maxWidth: 240 }}>
      <SideBarItem {...args} state="default" />
      <SideBarItem {...args} state="pressed" pressedStyle="standard" />
      <SideBarItem {...args} state="pressed" pressedStyle="emphasis" />
    </div>
  ),
};
