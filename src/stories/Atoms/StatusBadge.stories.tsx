import type { Meta, StoryObj } from '@storybook/react';

import { StatusBadge } from '../../components/StatusBadge';

const statusOptions = ['informative', 'success', 'warning', 'attention', 'critical', 'progress', 'loading'] as const;

const meta = {
  title: 'Classic Components/Feedback/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  args: {
    status: 'informative',
    styleVariant: 'default',
    label: 'STATUS',
  },
  argTypes: {
    status: {
      description: 'Status meaning from Figma.',
      control: { type: 'select' },
      options: statusOptions,
      table: {
        category: 'Content',
        defaultValue: { summary: 'informative' },
        type: {
          summary: "'informative' | 'success' | 'warning' | 'attention' | 'critical' | 'progress' | 'loading'",
        },
      },
    },
    styleVariant: {
      description: 'Visual weight from Figma.',
      control: { type: 'radio' },
      options: ['default', 'emphasized'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'emphasized'" },
      },
    },
    label: {
      description: 'Visible badge text.',
      control: { type: 'text' },
      table: { category: 'Content', defaultValue: { summary: 'STATUS' }, type: { summary: 'string' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7483-6154',
    },
    docs: {
      description: {
        component: 'StatusBadge communicates a compact status label with approved Figma status colors.',
      },
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Informative: Story = {};

export const Success: Story = {
  args: { status: 'success' },
};

export const Warning: Story = {
  args: { status: 'warning' },
};

export const Attention: Story = {
  args: { status: 'attention' },
};

export const Critical: Story = {
  args: { status: 'critical' },
};

export const Progress: Story = {
  args: { status: 'progress' },
};

export const Loading: Story = {
  args: { status: 'loading' },
};

export const Emphasized: Story = {
  args: { styleVariant: 'emphasized' },
};

export const StatusExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {statusOptions.map((status) => (
        <StatusBadge key={status} status={status} />
      ))}
    </div>
  ),
};

export const StyleExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 14 }}>
      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {statusOptions.map((status) => (
          <StatusBadge key={status} status={status} />
        ))}
      </div>
      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {statusOptions.map((status) => (
          <StatusBadge key={status} status={status} styleVariant="emphasized" />
        ))}
      </div>
    </div>
  ),
};
