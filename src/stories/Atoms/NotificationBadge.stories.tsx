import type { Meta, StoryObj } from '@storybook/react';

import { NotificationBadge } from '../../components/NotificationBadge';

const meta = {
  title: 'Classic Components/Feedback/NotificationBadge',
  component: NotificationBadge,
  tags: ['autodocs'],
  args: {
    size: 'small',
    value: 3,
    label: 'Unread notification',
  },
  argTypes: {
    size: {
      description: 'Badge size from Figma.',
      control: { type: 'radio' },
      options: ['small', 'singleDigit', 'multipleDigits'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'small' },
        type: { summary: "'small' | 'singleDigit' | 'multipleDigits'" },
      },
    },
    value: {
      description: 'Visible count for digit badge sizes.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'number | string' } },
    },
    label: {
      description: 'Accessible label for the badge.',
      control: { type: 'text' },
      table: { category: 'Accessibility', type: { summary: 'string' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7509-2356',
    },
    docs: {
      description: {
        component: 'NotificationBadge marks unread or pending notification counts.',
      },
    },
  },
} satisfies Meta<typeof NotificationBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};

export const SingleDigit: Story = {
  args: { size: 'singleDigit', value: 3, label: '3 notifications' },
};

export const MultipleDigits: Story = {
  args: { size: 'multipleDigits', value: 32, label: '32 notifications' },
};

export const SizeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 28 }}>
      <NotificationBadge size="small" label="Unread notification" />
      <NotificationBadge size="singleDigit" value={3} label="3 notifications" />
      <NotificationBadge size="multipleDigits" value={32} label="32 notifications" />
    </div>
  ),
};
