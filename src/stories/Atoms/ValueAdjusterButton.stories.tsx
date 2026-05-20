import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { ValueAdjusterButton } from '../../components/ValueAdjusterButton';

const meta = {
  title: 'Atoms/Buttons/ValueAdjusterButton',
  component: ValueAdjusterButton,
  tags: ['autodocs'],
  args: {
    adjustment: 'decrease',
    state: 'enabled',
    ariaLabel: 'Decrease value',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    adjustment: {
      description: 'Whether the button decreases or increases the value.',
      control: { type: 'radio' },
      options: ['decrease', 'increase'],
      table: {
        category: 'Behavior',
        defaultValue: { summary: 'decrease' },
        type: { summary: "'decrease' | 'increase'" },
      },
    },
    state: {
      description: 'Figma visual state.',
      control: { type: 'radio' },
      options: ['enabled', 'pressed', 'disabled'],
      table: {
        category: 'State',
        defaultValue: { summary: 'enabled' },
        type: { summary: "'enabled' | 'pressed' | 'disabled'" },
      },
    },
    ariaLabel: {
      description: 'Accessible name for the icon-only control.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    disabled: {
      description: 'Prevents the action.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onClick: {
      description: 'Runs when the value adjuster is clicked.',
      table: { category: 'Events', type: { summary: '(event: React.MouseEvent) => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=8510-11062',
    },
    docs: {
      description: {
        component: 'ValueAdjusterButton increases or decreases a numeric value in a compact control.',
      },
    },
  },
} satisfies Meta<typeof ValueAdjusterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Decrease: Story = {};

export const Increase: Story = {
  args: { adjustment: 'increase', ariaLabel: 'Increase value' },
};

export const Pressed: Story = {
  args: { state: 'pressed' },
};

export const Disabled: Story = {
  args: { state: 'disabled', disabled: true },
};

export const VariantExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <ValueAdjusterButton adjustment="decrease" ariaLabel="Decrease value" />
      <ValueAdjusterButton adjustment="increase" ariaLabel="Increase value" />
    </div>
  ),
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <ValueAdjusterButton adjustment="decrease" ariaLabel="Pressed decrease value" state="pressed" />
      <ValueAdjusterButton adjustment="increase" ariaLabel="Disabled increase value" state="disabled" disabled />
    </div>
  ),
};

export const Pair: Story = {
  tags: ['!test'],
  render: () => (
    <div style={{ display: 'inline-flex' }}>
      <ValueAdjusterButton adjustment="decrease" ariaLabel="Decrease value" />
      <div
        aria-hidden="true"
        style={{
          alignItems: 'center',
          borderBottom: '1px solid #E6E6E6',
          borderTop: '1px solid #E6E6E6',
          color: '#5C5C5C',
          display: 'inline-flex',
          fontFamily: 'Open Sans, Arial, sans-serif',
          fontSize: 34,
          fontWeight: 600,
          justifyContent: 'center',
          minWidth: 180,
        }}
      >
        Value
      </div>
      <ValueAdjusterButton adjustment="increase" ariaLabel="Increase value" />
    </div>
  ),
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /decrease value/i }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
