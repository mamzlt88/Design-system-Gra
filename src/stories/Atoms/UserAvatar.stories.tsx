import type { Meta, StoryObj } from '@storybook/react';

import { UserAvatar } from '../../components/UserAvatar';

const sizes = ['big', 'medium', 'small', 'xSmall'] as const;
const types = ['avatar', 'initials'] as const;
const avatars = ['1', '2', '3', '4', '5', '6', 'none'] as const;
const sampleImageSrc = new URL('../../assets/avatars/avatar-3-medium.png', import.meta.url).href;

const meta = {
  title: 'Classic Components/Identity/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
  args: { size: 'big', type: 'avatar', avatar: '1', name: 'Ana Silva', showStar: true, label: 'Ana Silva' },
  argTypes: {
    size: { control: { type: 'select' }, options: sizes, table: { category: 'Variant' } },
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    avatar: { control: { type: 'select' }, options: avatars, table: { category: 'Variant' } },
    src: { control: 'text', table: { category: 'Content' } },
    imageSrc: { control: 'text', table: { category: 'Content' } },
    alt: { control: 'text', table: { category: 'Accessibility' } },
    name: { control: 'text', table: { category: 'Content' } },
    firstName: { control: 'text', table: { category: 'Content' } },
    lastName: { control: 'text', table: { category: 'Content' } },
    initialsText: { control: 'text', table: { category: 'Content' } },
    showStar: { control: 'boolean', table: { category: 'Appearance' } },
    label: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=1640-11011' },
    docs: { description: { component: 'UserAvatar renders a circular user image when a source is available, then falls back to initials from the user name.' } },
  },
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {};
export const Initials: Story = { args: { avatar: 'none', label: 'Ana Silva', name: 'Ana Silva', type: 'initials' } };
export const CustomImage: Story = { args: { imageSrc: sampleImageSrc, label: 'Custom image avatar', name: 'Camila Reyes' } };
export const SizeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {sizes.map((size) => <UserAvatar avatar="1" key={size} label={`Ana Silva ${size}`} name="Ana Silva" size={size} />)}
    </div>
  ),
};
export const InitialsSizeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {sizes.map((size) => <UserAvatar avatar="none" key={size} name="Ana Silva" size={size} type="initials" />)}
    </div>
  ),
};
export const AvatarExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {avatars.map((avatar) => (
        <UserAvatar avatar={avatar} key={avatar} name="Ana Silva" size="medium" type={avatar === 'none' ? 'initials' : 'avatar'} />
      ))}
    </div>
  ),
};
