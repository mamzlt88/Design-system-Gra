import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '../../components/Logo';

const types = ['iconOnly', 'full'] as const;

const meta = {
  title: 'Atoms/Logo/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: { type: 'iconOnly', label: 'Grameen logo' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    label: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=2760-487' },
    docs: { description: { component: 'Logo represents the source icon-only and full logo variants. Artwork is a code approximation until approved exported assets are available.' } },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconOnly: Story = {};
export const Full: Story = { args: { type: 'full' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: 32 }}>
      {types.map((type) => <Logo key={type} type={type} />)}
    </div>
  ),
};
