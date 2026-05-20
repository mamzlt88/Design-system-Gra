import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { IconButton, type IconButtonProps } from '../../components/IconButton';

// Story-only state keeps IconButton controlled by props while demonstrating the transient pressed visual state.
function InteractiveIconButton(args: IconButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <IconButton
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
  title: 'Atoms/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    ariaLabel: 'Add item',
    icon: 'settings',
    variant: 'filled',
    state: 'enabled',
    darkMode: false,
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    ariaLabel: {
      description: 'Accessible name for the icon-only button.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    icon: {
      description: 'Icon shown inside the button.',
      control: { type: 'select' },
      options: ['settings', 'plus', 'minus', 'info', 'upload', 'externalLink', 'check', 'arrowRight', 'document'],
      table: { category: 'Content', defaultValue: { summary: 'settings' }, type: { summary: 'IconName' } },
    },
    state: {
      description: 'Figma visual state.',
      control: { type: 'radio' },
      options: ['enabled', 'pressed', 'disabled'],
      table: { category: 'State', defaultValue: { summary: 'enabled' }, type: { summary: "'enabled' | 'pressed' | 'disabled'" } },
    },
    darkMode: {
      description: 'Shows the Figma dark-mode variant.',
      control: { type: 'boolean' },
      table: { category: 'Appearance', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    variant: {
      description: 'Visual style of the icon button.',
      control: { type: 'select' },
      options: ['filled', 'tonal', 'outlined', 'outlinedAccent', 'filledRed', 'standard', 'standardInverse'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'filled' },
        type: { summary: "'filled' | 'tonal' | 'outlined' | 'outlinedAccent' | 'filledRed' | 'standard' | 'standardInverse'" },
      },
    },
    disabled: {
      description: 'Prevents the action.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onClick: {
      description: 'Runs when the icon button is clicked.',
      table: { category: 'Events', type: { summary: '(event: React.MouseEvent) => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=91-4104',
    },
    docs: {
      description: {
        component: 'IconButton is a compact action button for toolbar, close, edit, and repeated controls.',
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tonal: Story = {
  args: { variant: 'tonal' },
};

export const Outlined: Story = {
  args: { variant: 'outlined' },
};

export const OutlinedAccent: Story = {
  args: { variant: 'outlinedAccent' },
};

export const FilledRed: Story = {
  args: { ariaLabel: 'Delete item', variant: 'filledRed' },
};

export const Disabled: Story = {
  args: { disabled: true, state: 'disabled' },
};

export const Pressed: Story = {
  args: { state: 'pressed' },
};

export const DarkMode: Story = {
  args: { darkMode: true },
  decorators: [
    (Story) => (
      <div style={{ background: '#151515', borderRadius: 8, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export const InteractivePressed: Story = {
  render: (args) => <InteractiveIconButton {...args} />,
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <IconButton ariaLabel="Pressed icon button" state="pressed" />
      <IconButton ariaLabel="Disabled icon button" disabled state="disabled" />
    </div>
  ),
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /add item/i }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const DisabledDoesNotFire: Story = {
  args: { disabled: true },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /add item/i }));
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const AllVariants: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <IconButton ariaLabel="Filled" variant="filled" />
        <IconButton ariaLabel="Tonal" variant="tonal" />
        <IconButton ariaLabel="Outlined" variant="outlined" />
        <IconButton ariaLabel="Outlined accent" variant="outlinedAccent" />
        <IconButton ariaLabel="Filled red" variant="filledRed" />
        <IconButton ariaLabel="Standard" variant="standard" />
        <IconButton ariaLabel="Standard inverse" variant="standardInverse" />
      </div>
      <div style={{ background: '#151515', borderRadius: 8, padding: 18 }}>
        <IconButton ariaLabel="Dark mode icon button" darkMode />
      </div>
    </div>
  ),
};
