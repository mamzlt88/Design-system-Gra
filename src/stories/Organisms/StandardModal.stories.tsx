import type { Meta, StoryObj } from '@storybook/react';

import { StandardModal } from '../../components/StandardModal';

const types = ['verticalActions', 'horizontalActions', 'bullets', 'illustration', 'mediaTop'] as const;

const meta = {
  title: 'Organisms/Modals & Bottom Sheets/StandardModal',
  component: StandardModal,
  tags: ['autodocs'],
  args: { type: 'verticalActions', title: 'Confirm action', description: 'Review the information before continuing.' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    title: { control: 'text', table: { category: 'Content' } },
    description: { control: 'text', table: { category: 'Content' } },
    primaryLabel: { control: 'text', table: { category: 'Content' } },
    secondaryLabel: { control: 'text', table: { category: 'Content' } },
    onPrimaryClick: { action: 'primary click', table: { category: 'Events' } },
    onSecondaryClick: { action: 'secondary click', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7478-9775' },
    docs: { description: { component: 'StandardModal represents the sourced modal type variants with controlled action events.' } },
  },
} satisfies Meta<typeof StandardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalActions: Story = {};
export const HorizontalActions: Story = { args: { type: 'horizontalActions' } };
export const Bullets: Story = { args: { type: 'bullets' } };
export const Illustration: Story = { args: { type: 'illustration' } };
export const MediaTop: Story = { args: { type: 'mediaTop' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      {types.map((type) => (
        <StandardModal key={type} type={type} title={type} />
      ))}
    </div>
  ),
};
