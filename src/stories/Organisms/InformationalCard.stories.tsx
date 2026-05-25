import type { Meta, StoryObj } from '@storybook/react';

import { InformationalCard } from '../../components/InformationalCard';

const bgColors = ['blue', 'yellow'] as const;

const meta = {
  title: 'Domain Components/Cards & Info/InformationalCard',
  component: InformationalCard,
  tags: ['autodocs'],
  args: {
    bgColor: 'blue',
    title: 'Helpful information',
    description: 'Use this card to show guidance that supports a user decision.',
    actionLabel: 'Learn more',
  },
  argTypes: {
    bgColor: { control: { type: 'select' }, options: bgColors, table: { category: 'Variant' } },
    title: { control: 'text', table: { category: 'Content' } },
    description: { control: 'text', table: { category: 'Content' } },
    actionLabel: { control: 'text', table: { category: 'Content' } },
    onAction: { action: 'action', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9243-9011' },
    docs: { description: { component: 'InformationalCard presents concise guidance with sourced blue and yellow background variants.' } },
  },
} satisfies Meta<typeof InformationalCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {};
export const Yellow: Story = { args: { bgColor: 'yellow' } };
export const BgColorExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {bgColors.map((bgColor) => (
        <InformationalCard bgColor={bgColor} key={bgColor} title={`${bgColor === 'blue' ? 'Blue' : 'Yellow'} informational card`} />
      ))}
    </div>
  ),
};
