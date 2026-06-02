import type { Meta, StoryObj } from '@storybook/react';

import { SectionBar } from '../../components/SectionBar';

const icons = ['loan', 'payments', 'newLoan', 'approvals', 'resources', 'document'] as const;
const states = ['default', 'selected'] as const;
const interactions = ['default', 'pressed'] as const;

const meta = {
  title: 'Classic Components/Navigation/SectionBar',
  component: SectionBar,
  tags: ['autodocs'],
  args: { label: 'Payments', icon: 'payments', state: 'default', interaction: 'default', showBadge: false },
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    icon: { control: { type: 'select' }, options: icons, table: { category: 'Variant' } },
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    interaction: { control: { type: 'select' }, options: interactions, table: { category: 'State' } },
    showBadge: { control: 'boolean', table: { category: 'Content' } },
    badgeLabel: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'SectionBar is the mobile navigation item primitive used by NavigationBar.',
      },
    },
  },
} satisfies Meta<typeof SectionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { state: 'selected' } };
export const WithBadge: Story = { args: { showBadge: true } };

export const IconExamples: Story = {
  tags: ['!test', '!dev'],
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {icons.map((icon) => (
        <SectionBar key={icon} {...args} icon={icon} label={icon} />
      ))}
    </div>
  ),
};
