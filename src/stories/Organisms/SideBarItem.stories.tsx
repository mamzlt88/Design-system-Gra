import type { Meta, StoryObj } from '@storybook/react';

import { SideBarItem } from '../../components/SideBarItem';

const states = ['default', 'pressed'] as const;
const pressedStyles = ['nA', 'standard', 'emphasis'] as const;

const meta = {
  title: 'Organisms/List Items/SideBarItem',
  component: SideBarItem,
  tags: ['autodocs'],
  args: { state: 'default', pressedStyle: 'standard', label: 'Dashboard' },
  argTypes: {
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    pressedStyle: { control: { type: 'select' }, options: pressedStyles, table: { category: 'Variant' } },
    label: { control: 'text', table: { category: 'Content' } },
    icon: { control: 'text', table: { category: 'Content' } },
    onClick: { action: 'click', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7878-9372' },
    docs: { description: { component: 'SideBarItem is a sidebar navigation row with sourced state and pressed-style variants.' } },
  },
} satisfies Meta<typeof SideBarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const PressedStandard: Story = { args: { state: 'pressed', pressedStyle: 'standard' } };
export const PressedEmphasis: Story = { args: { state: 'pressed', pressedStyle: 'emphasis' } };
export const PressedStyleExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 8, maxWidth: 280 }}>
      {pressedStyles.map((pressedStyle) => (
        <SideBarItem key={pressedStyle} label={pressedStyle} pressedStyle={pressedStyle} state="pressed" />
      ))}
    </div>
  ),
};
