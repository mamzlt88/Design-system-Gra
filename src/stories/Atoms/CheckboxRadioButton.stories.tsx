import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { CheckboxRadioButton, type CheckboxRadioButtonProps } from '../../components/CheckboxRadioButton';

// Story-only state keeps CheckboxRadioButton controlled by props while demonstrating selectable behavior.
function InteractiveCheckboxRadioButton(args: CheckboxRadioButtonProps) {
  const [selected, setSelected] = useState(args.state === 'selected');
  const type = args.type ?? 'radioText';
  const isRadio = type === 'radio' || type === 'radioText';
  const state = args.disabled ? 'disabled' : selected ? 'selected' : 'default';

  return (
    <CheckboxRadioButton
      {...args}
      state={state}
      onChange={(event) => {
        setSelected((current) => (isRadio ? true : !current));
        args.onChange?.(event);
      }}
    />
  );
}

const meta = {
  title: 'Atoms/Checkbox & Radio Buttons/CheckboxRadioButton',
  component: CheckboxRadioButton,
  tags: ['autodocs'],
  args: {
    type: 'radioText',
    state: 'default',
    itemText: 'Item',
    supportiveText: 'Supportive text',
    showSupportiveText: false,
    disabled: false,
    onChange: fn(),
  },
  argTypes: {
    type: {
      description: 'The control type from Figma.',
      control: { type: 'select' },
      options: ['radioText', 'radio', 'square', 'squareRed'],
      table: {
        category: 'Content',
        defaultValue: { summary: 'radioText' },
        type: { summary: "'radioText' | 'radio' | 'square' | 'squareRed'" },
      },
    },
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
    onChange: {
      description: 'Runs when the control changes.',
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
        component: 'CheckboxRadioButton covers the checkbox and radio states from the Figma control set.',
      },
    },
  },
} satisfies Meta<typeof CheckboxRadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioText: Story = {};

export const RadioOnly: Story = {
  args: { type: 'radio', itemText: 'Radio option' },
};

export const Square: Story = {
  args: { type: 'square' },
};

export const SquareRed: Story = {
  args: { type: 'squareRed', itemText: 'Required confirmation' },
};

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
  render: (args) => <InteractiveCheckboxRadioButton {...args} />,
};

export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 14 }}>
      <CheckboxRadioButton type="radioText" itemText="Radio with text" />
      <CheckboxRadioButton type="radio" itemText="Radio only" />
      <CheckboxRadioButton type="square" itemText="Square checkbox" />
      <CheckboxRadioButton type="squareRed" itemText="Square red checkbox" />
    </div>
  ),
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 14 }}>
      <CheckboxRadioButton type="radioText" itemText="Selected option" state="selected" />
      <CheckboxRadioButton type="radioText" itemText="Disabled option" state="disabled" disabled />
      <CheckboxRadioButton type="radioText" itemText="With supportive text" showSupportiveText supportiveText="Supportive text" />
    </div>
  ),
};

export const AllTypes: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 14 }}>
      <CheckboxRadioButton type="radioText" itemText="Radio with text" />
      <CheckboxRadioButton type="radio" itemText="Radio only" />
      <CheckboxRadioButton type="square" itemText="Square checkbox" />
      <CheckboxRadioButton type="squareRed" itemText="Square red checkbox" />
      <CheckboxRadioButton type="radioText" itemText="Selected option" state="selected" />
      <CheckboxRadioButton type="radioText" itemText="Disabled option" state="disabled" />
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
