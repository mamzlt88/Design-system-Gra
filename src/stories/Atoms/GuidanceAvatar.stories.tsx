import type { Meta, StoryObj } from '@storybook/react';

import { GuidanceAvatar } from '../../components/GuidanceAvatar';

const typeOptions = ['1', '2'] as const;

const meta = {
  title: 'Atoms/User Guidance/GuidanceAvatar',
  component: GuidanceAvatar,
  tags: ['autodocs'],
  args: { typeAvatar: '1', showBackground: true, label: 'Guidance avatar' },
  argTypes: {
    typeAvatar: { control: { type: 'select' }, options: typeOptions, table: { category: 'Variant' } },
    showBackground: { control: 'boolean', table: { category: 'Appearance' } },
    label: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7475-443' },
    docs: { description: { component: 'GuidanceAvatar renders the two source user-guidance avatar variants.' } },
  },
} satisfies Meta<typeof GuidanceAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOne: Story = {};
export const TypeTwo: Story = { args: { typeAvatar: '2' } };
export const AvatarExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: 24 }}>
      {typeOptions.map((typeAvatar) => <GuidanceAvatar key={typeAvatar} typeAvatar={typeAvatar} />)}
      <GuidanceAvatar showBackground={false} />
    </div>
  ),
};
