import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Button, type ButtonProps } from '../../components/Button';

// Story-only state keeps Button controlled by props while demonstrating the transient pressed visual state.
function InteractiveButton(args: ButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Button
      {...args}
      state={args.disabled ? 'disabled' : pressed ? 'pressed' : args.state ?? 'enabled'}
      onMouseDown={(event) => {
        setPressed(true);
        args.onMouseDown?.(event);
      }}
      onMouseUp={(event) => {
        setPressed(false);
        args.onMouseUp?.(event);
      }}
      onMouseLeave={(event) => {
        setPressed(false);
        args.onMouseLeave?.(event);
      }}
    />
  );
}

const meta = {
  title: 'Classic Components/Actions/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Continue',
    variant: 'filled',
    tone: 'primary',
    state: 'enabled',
    darkMode: false,
    leftIcon: true,
    rightIcon: true,
    fullWidth: false,
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    label: {
      description: 'The visible button text.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    variant: {
      description: 'How strong the button looks.',
      control: { type: 'radio' },
      options: ['filled', 'outlined', 'text'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'filled' },
        type: { summary: "'filled' | 'outlined' | 'text'" },
      },
    },
    tone: {
      description: 'The meaning or emphasis of the action.',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'red', 'warning', 'green', 'standard'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'primary' },
        type: { summary: "'primary' | 'secondary' | 'red' | 'warning' | 'green' | 'standard'" },
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
    darkMode: {
      description: 'Shows the Figma dark-mode variant.',
      control: { type: 'boolean' },
      table: { category: 'Appearance', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    leftIcon: {
      description: 'Shows an icon before the label.',
      control: { type: 'boolean' },
      table: { category: 'Content', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    rightIcon: {
      description: 'Shows an icon after the label.',
      control: { type: 'boolean' },
      table: { category: 'Content', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    fullWidth: {
      description: 'Stretches the button to fill its container.',
      control: { type: 'boolean' },
      table: { category: 'Layout', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    disabled: {
      description: 'Prevents the action.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onClick: {
      description: 'Runs when the button is clicked.',
      table: { category: 'Events', type: { summary: '(event: React.MouseEvent) => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=50-6188',
    },
    docs: {
      description: {
        component: 'Button is the main action control for submit, confirm, continue, cancel, or trigger actions.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: { variant: 'filled' },
};

export const Outlined: Story = {
  args: { variant: 'outlined' },
};

export const Text: Story = {
  args: { variant: 'text' },
};

export const Pressed: Story = {
  args: { state: 'pressed' },
};

export const Danger: Story = {
  args: { label: 'Delete', tone: 'red' },
};

export const WithIcons: Story = {
  args: { leftIcon: true, rightIcon: true },
};

export const Disabled: Story = {
  args: { disabled: true, state: 'disabled' },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', minWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export const DarkModePreview: Story = {
  args: { label: 'Continue', darkMode: true },
  decorators: [
    (Story) => (
      <div style={{ background: '#151515', borderRadius: 8, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export const InteractivePressed: Story = {
  render: (args) => <InteractiveButton {...args} />,
};

export const VariantExamples: Story = {
  tags: ['!test', '!dev'],
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'grid', gap: 18, width: '100%', minWidth: 320 }}>
      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <Button label="Filled" variant="filled" />
        <Button label="Outlined" variant="outlined" />
        <Button label="Text" variant="text" />
        <Button label="Danger" tone="red" />
      </div>
      <Button label="Full width" fullWidth />
      <div style={{ background: '#151515', borderRadius: 8, padding: 18 }}>
        <Button label="Dark mode" darkMode />
      </div>
    </div>
  ),
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Button label="Pressed" state="pressed" />
      <Button label="Disabled" disabled state="disabled" />
    </div>
  ),
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /continue/i }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const DisabledDoesNotFire: Story = {
  args: { disabled: true },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /continue/i }));
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const AllVariants: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Button label="Primary" tone="primary" />
      <Button label="Secondary" tone="secondary" />
      <Button label="Warning" tone="warning" />
      <Button label="Green" tone="green" />
      <Button label="Danger" tone="red" />
      <Button label="Outlined" variant="outlined" />
      <Button label="Text" variant="text" />
    </div>
  ),
};
