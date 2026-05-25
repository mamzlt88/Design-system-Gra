import type { Meta, StoryObj } from '@storybook/react';

import { SavingsGoal } from '../../components/SavingsGoal';

const types = ['inProgress', 'completed'] as const;

const meta = {
  title: 'Domain Components/Illustrations/SavingsGoal',
  component: SavingsGoal,
  tags: ['autodocs'],
  args: { type: 'inProgress', label: 'Savings goal in progress' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    label: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=1908-4646' },
    docs: { description: { component: 'SavingsGoal represents in-progress and completed savings-goal illustration states.' } },
  },
} satisfies Meta<typeof SavingsGoal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {};
export const Completed: Story = { args: { type: 'completed', label: 'Savings goal completed' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: 24 }}>
      {types.map((type) => <SavingsGoal key={type} type={type} />)}
    </div>
  ),
};
