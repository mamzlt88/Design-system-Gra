import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxRadioButton } from '../../components/CheckboxRadioButton';

const types = ['radioText', 'radio', 'square', 'squareRed'] as const;
const states = ['default', 'selected', 'disabled'] as const;

const meta = {
  title: 'Classic Components/Inputs/CheckboxRadioButton',
  component: CheckboxRadioButton,
  tags: ['autodocs'],
  args: {
    type: 'radioText',
    state: 'default',
    itemText: 'Item label',
    supportiveText: 'Supportive text',
    showSupportiveText: false,
  },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    itemText: { control: 'text', table: { category: 'Content' } },
    supportiveText: { control: 'text', table: { category: 'Content' } },
    showSupportiveText: { control: 'boolean', table: { category: 'Content' } },
    onChange: { action: 'change', table: { category: 'Events' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'CheckboxRadioButton is the shared selection-control primitive used by radio and square checkbox variants.',
      },
    },
  },
} satisfies Meta<typeof CheckboxRadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Square: Story = { args: { type: 'square' } };
export const SquareRed: Story = { args: { type: 'squareRed', state: 'selected' } };

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      {states.map((state) => (
        <CheckboxRadioButton key={state} {...args} state={state} />
      ))}
    </div>
  ),
};

export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      {types.map((type) => (
        <CheckboxRadioButton key={type} {...args} type={type} />
      ))}
    </div>
  ),
};
