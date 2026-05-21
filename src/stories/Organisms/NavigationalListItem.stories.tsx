import type { Meta, StoryObj } from '@storybook/react';

import { NavigationalListItem } from '../../components/NavigationalListItem';

const states = ['default', 'pressed'] as const;
const leadings = ['iconContainer', 'iconPlain', 'none'] as const;

const meta = {
  title: 'Organisms/List Items/NavigationalListItem',
  component: NavigationalListItem,
  tags: ['autodocs'],
  args: { state: 'default', leading: 'iconContainer', label: 'Payments', supportingText: 'View payment information' },
  argTypes: {
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    leading: { control: { type: 'select' }, options: leadings, table: { category: 'Variant' } },
    label: { control: 'text', table: { category: 'Content' } },
    supportingText: { control: 'text', table: { category: 'Content' } },
    onClick: { action: 'click', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7428-8728' },
    docs: { description: { component: 'NavigationalListItem is a list-row navigation action with sourced state and leading variants.' } },
  },
} satisfies Meta<typeof NavigationalListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Pressed: Story = { args: { state: 'pressed' } };
export const IconPlain: Story = { args: { leading: 'iconPlain' } };
export const NoLeading: Story = { args: { leading: 'none' } };
export const VariantExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 390 }}>
      {leadings.map((leading) => (
        <NavigationalListItem key={leading} leading={leading} label={leading} />
      ))}
      <NavigationalListItem state="pressed" label="Pressed" />
    </div>
  ),
};
