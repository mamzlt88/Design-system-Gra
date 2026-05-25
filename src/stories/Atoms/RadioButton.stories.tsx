import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { RadioButton, type RadioButtonProps } from '../../components/RadioButton';

function InteractiveRadioButton(args: RadioButtonProps) {
  const [selected, setSelected] = useState(args.state === 'selected');
  const state = args.disabled ? 'disabled' : selected ? 'selected' : 'default';

  return (
    <RadioButton
      {...args}
      state={state}
      onChange={(event) => {
        setSelected(true);
        args.onChange?.(event);
      }}
    />
  );
}

const meta = {
  title: 'Classic Components/Inputs/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  args: {
    state: 'default',
    itemText: 'Item',
    supportiveText: 'Supportive text',
    showSupportiveText: false,
    disabled: false,
    name: 'storybook-radio-button',
    onChange: fn(),
  },
  argTypes: {
    state: {
      description: 'Figma visual state.',
      control: { type: 'radio' },
      options: ['default', 'selected', 'disabled'],
      table: {
        category: 'State',
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'selected' | 'disabled'" },
      },
    },
    itemText: {
      description: 'Visible item label.',
      control: { type: 'text' },
      table: { category: 'Content', defaultValue: { summary: 'Item' }, type: { summary: 'string' } },
    },
    supportiveText: {
      description: 'Optional helper text below the item label.',
      control: { type: 'text' },
      table: { category: 'Content', defaultValue: { summary: 'Supportive text' }, type: { summary: 'string' } },
    },
    showSupportiveText: {
      description: 'Shows supportive text.',
      control: { type: 'boolean' },
      table: { category: 'Content', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    disabled: {
      description: 'Prevents selection.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    name: {
      description: 'Native radio group name.',
      control: { type: 'text' },
      table: { category: 'Accessibility', type: { summary: 'string' } },
    },
    onChange: {
      description: 'Runs when the radio changes.',
      table: { category: 'Events', type: { summary: '(event: React.ChangeEvent<HTMLInputElement>) => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7521-6940',
    },
    docs: {
      description: {
        component: 'RadioButton is the radio control for choosing one option from a named group.',
      },
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { state: 'selected' },
};

export const Disabled: Story = {
  args: { state: 'disabled', disabled: true },
};

export const WithSupportiveText: Story = {
  args: { showSupportiveText: true },
};

export const InteractiveDemo: Story = {
  render: (args) => <InteractiveRadioButton {...args} />,
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <fieldset style={{ border: 0, display: 'grid', gap: 14, margin: 0, padding: 0 }}>
      <RadioButton itemText="Default radio" name="state-examples" />
      <RadioButton itemText="Selected radio" name="state-examples" state="selected" />
      <RadioButton disabled itemText="Disabled radio" name="state-examples" state="disabled" />
      <RadioButton itemText="With supportive text" name="state-examples" showSupportiveText supportiveText="Supportive text" />
    </fieldset>
  ),
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText(/item/i));
    await expect(args.onChange).toHaveBeenCalledTimes(1);
  },
};
