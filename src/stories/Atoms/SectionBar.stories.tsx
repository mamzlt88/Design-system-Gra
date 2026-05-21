import type { Meta, StoryObj } from '@storybook/react';

import { SectionBar } from '../../components/SectionBar';

const states = ['default', 'selected'] as const;
const interactions = ['default', 'pressed'] as const;
const icons = ['loan', 'payments', 'newLoan', 'approvals', 'resources', 'document'] as const;

const meta = {
  title: 'Atoms/Navigation Bars/SectionBar',
  component: SectionBar,
  tags: ['autodocs'],
  args: { label: 'Section', icon: 'document', state: 'default', interaction: 'default', showBadge: false },
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    icon: { control: { type: 'select' }, options: icons, table: { category: 'Content' } },
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    interaction: { control: { type: 'select' }, options: interactions, table: { category: 'Interaction' } },
    showBadge: { control: 'boolean', table: { category: 'State' } },
    badgeLabel: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7752-2780' },
    docs: { description: { component: 'SectionBar is the atomic navigation item used inside NavigationBar.' } },
  },
} satisfies Meta<typeof SectionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { state: 'selected' },
};

export const WithBadge: Story = {
  args: { showBadge: true },
};

export const PressedInteraction: Story = {
  args: { interaction: 'pressed' },
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 390 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <SectionBar label="Default" icon="loan" />
        <SectionBar label="Selected" icon="payments" state="selected" />
        <SectionBar label="Badge" icon="resources" showBadge />
      </div>
    </div>
  ),
};

export const InteractionExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 390 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
        <SectionBar label="Default" icon="loan" />
        <SectionBar label="Pressed" icon="loan" interaction="pressed" />
      </div>
    </div>
  ),
};
