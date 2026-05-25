import type { Meta, StoryObj } from '@storybook/react';

import { StatusIndicator } from '../../components/StatusIndicator';

const statusOptions = ['completed', 'neutral', 'attention'] as const;

const meta = {
  title: 'Classic Components/Feedback/StatusIndicator',
  component: StatusIndicator,
  tags: ['autodocs'],
  args: {
    status: 'completed',
    label: 'Completed status',
  },
  argTypes: {
    status: {
      description: 'Figma status variant.',
      control: { type: 'select' },
      options: statusOptions,
      table: {
        category: 'State',
        defaultValue: { summary: 'completed' },
        type: { summary: "'completed' | 'neutral' | 'attention'" },
      },
    },
    label: {
      description: 'Accessible status label.',
      control: { type: 'text' },
      table: {
        category: 'Accessibility',
        defaultValue: { summary: 'Completed status' },
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7873-607',
    },
    docs: {
      description: {
        component: 'StatusIndicator communicates a compact list or step status using the Figma status colors and default icon.',
      },
    },
  },
} satisfies Meta<typeof StatusIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Completed: Story = {};

export const Neutral: Story = {
  args: { status: 'neutral', label: 'Neutral status' },
};

export const Attention: Story = {
  args: { status: 'attention', label: 'Attention status' },
};

export const StatusExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {statusOptions.map((status) => (
        <StatusIndicator key={status} label={`${status} status`} status={status} />
      ))}
    </div>
  ),
};
