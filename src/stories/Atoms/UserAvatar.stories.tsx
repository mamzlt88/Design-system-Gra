import type { Meta, StoryObj } from '@storybook/react';

import { UserAvatar } from '../../components/UserAvatar';

const sizes = ['big', 'medium', 'small', 'xSmall'] as const;
const types = ['avatar', 'initials'] as const;
const avatars = ['1', '2', '3', '4', '5', '6', 'none'] as const;

const meta = {
  title: 'Atoms/User Representation/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
  args: { size: 'big', type: 'avatar', avatar: '1', initialsText: 'AS', showStar: true, label: 'User avatar' },
  argTypes: {
    size: { control: { type: 'select' }, options: sizes, table: { category: 'Variant' } },
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    avatar: { control: { type: 'select' }, options: avatars, table: { category: 'Variant' } },
    initialsText: { control: 'text', table: { category: 'Content' } },
    showStar: { control: 'boolean', table: { category: 'Appearance' } },
    label: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=1640-11011' },
    docs: { description: { component: 'UserAvatar covers sourced size, avatar, initials, and x-small star variants.' } },
  },
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {};
export const Initials: Story = { args: { type: 'initials' } };
export const SizeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {sizes.map((size) => <UserAvatar key={size} size={size} />)}
    </div>
  ),
};
export const AvatarExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {avatars.map((avatar) => <UserAvatar avatar={avatar} key={avatar} size="medium" type={avatar === 'none' ? 'initials' : 'avatar'} />)}
    </div>
  ),
};
