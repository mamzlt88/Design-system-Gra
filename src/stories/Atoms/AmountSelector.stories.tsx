import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { AmountSelector, type AmountSelectorProps } from '../../components/AmountSelector';

// Story-only state keeps AmountSelector controlled by props while demonstrating value changes and transient pressed controls.
function InteractiveAmountSelector(args: AmountSelectorProps) {
  const [amount, setAmount] = useState(50);
  const [pressedControl, setPressedControl] = useState<AmountSelectorProps['pressedControl']>(null);

  function showPressed(control: NonNullable<AmountSelectorProps['pressedControl']>) {
    setPressedControl(control);
    window.setTimeout(() => setPressedControl(null), 160);
  }

  return (
    <AmountSelector
      {...args}
      value={`$${amount}`}
      state="default"
      pressedControl={pressedControl}
      onDecrease={() => {
        showPressed('decrease');
        setAmount((current) => Math.max(0, current - 5));
        args.onDecrease?.();
      }}
      onIncrease={() => {
        showPressed('increase');
        setAmount((current) => current + 5);
        args.onIncrease?.();
      }}
    />
  );
}

const meta = {
  title: 'Domain Components/Financial Inputs/AmountSelector',
  component: AmountSelector,
  tags: ['autodocs'],
  args: {
    value: 'Value',
    state: 'initial',
    pressedControl: null,
    disabled: false,
    onDecrease: fn(),
    onIncrease: fn(),
  },
  argTypes: {
    value: {
      description: 'Visible amount or placeholder.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    state: {
      description: 'Whether the amount is empty or selected.',
      control: { type: 'radio' },
      options: ['initial', 'default'],
      table: { category: 'State', defaultValue: { summary: 'initial' }, type: { summary: "'initial' | 'default'" } },
    },
    pressedControl: {
      description: 'Shows which stepper control is currently pressed.',
      control: { type: 'radio' },
      options: [null, 'decrease', 'increase'],
      table: {
        category: 'State',
        defaultValue: { summary: 'null' },
        type: { summary: "'decrease' | 'increase' | null" },
      },
    },
    disabled: {
      description: 'Prevents both stepper controls.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    decreaseDisabled: {
      description: 'Prevents decreasing the amount.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    increaseDisabled: {
      description: 'Prevents increasing the amount.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onDecrease: {
      description: 'Runs when the minus button is clicked.',
      table: { category: 'Events', type: { summary: '() => void' } },
    },
    onIncrease: {
      description: 'Runs when the plus button is clicked.',
      table: { category: 'Events', type: { summary: '() => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=8273-7829',
    },
    docs: {
      description: {
        component: 'AmountSelector is an input stepper for increasing or decreasing an amount.',
      },
    },
  },
} satisfies Meta<typeof AmountSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {};

export const Selected: Story = {
  args: { value: 'Value', state: 'default' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const PressedDecrease: Story = {
  args: { value: '$45', state: 'default', pressedControl: 'decrease' },
};

export const PressedIncrease: Story = {
  args: { value: '$55', state: 'default', pressedControl: 'increase' },
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <AmountSelector value="Value" state="initial" />
      <AmountSelector value="$50" state="default" />
      <AmountSelector value="$45" state="default" pressedControl="decrease" />
      <AmountSelector value="$55" state="default" pressedControl="increase" />
      <AmountSelector value="Value" disabled />
    </div>
  ),
};

export const InteractiveStepper: Story = {
  render: (args) => <InteractiveAmountSelector {...args} />,
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /increase amount/i }));
    await expect(args.onIncrease).toHaveBeenCalledTimes(1);
    await userEvent.click(canvas.getByRole('button', { name: /decrease amount/i }));
    await expect(args.onDecrease).toHaveBeenCalledTimes(1);
  },
};
