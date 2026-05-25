import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { CheckboxButton, type CheckboxButtonProps } from '../../components/CheckboxButton';

function InteractiveCheckboxButton(args: CheckboxButtonProps) {
  const [selected, setSelected] = useState(args.state === 'selected');
  const state = args.disabled ? 'disabled' : selected ? 'selected' : 'default';

  return (
    <CheckboxButton
      {...args}
      state={state}
      onChange={(event) => {
        setSelected((current) => !current);
        args.onChange?.(event);
      }}
    />
  );
}

const meta = {
  title: 'Classic Components/Inputs/CheckboxButton',
  component: CheckboxButton,
  tags: ['autodocs'],
  args: {
    state: 'default',
    itemText: 'Item',
    supportiveText: 'Supportive text',
    showSupportiveText: false,
    tone: 'default',
    disabled: false,
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
    tone: {
      description: 'Sets the selected checkbox color.',
      control: { type: 'radio' },
      options: ['default', 'danger'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'danger'" },
      },
    },
    disabled: {
      description: 'Prevents selection.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onChange: {
      description: 'Runs when the checkbox changes.',
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
        component: 'CheckboxButton is the checkbox control for single confirmations and multi-select lists.',
      },
    },
  },
} satisfies Meta<typeof CheckboxButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { state: 'selected' },
};

export const Disabled: Story = {
  args: { state: 'disabled', disabled: true },
};

export const Danger: Story = {
  args: { itemText: 'Required confirmation', state: 'selected', tone: 'danger' },
};

export const WithSupportiveText: Story = {
  args: { showSupportiveText: true },
};

export const InteractiveDemo: Story = {
  render: (args) => <InteractiveCheckboxButton {...args} />,
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 14 }}>
      <CheckboxButton itemText="Default checkbox" />
      <CheckboxButton itemText="Selected checkbox" state="selected" />
      <CheckboxButton disabled itemText="Disabled checkbox" state="disabled" />
      <CheckboxButton itemText="Danger checkbox" state="selected" tone="danger" />
      <CheckboxButton itemText="With supportive text" showSupportiveText supportiveText="Supportive text" />
    </div>
  ),
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText(/item/i));
    await expect(args.onChange).toHaveBeenCalledTimes(1);
  },
};
