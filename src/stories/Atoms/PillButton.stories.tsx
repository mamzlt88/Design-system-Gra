import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { PillButton, type PillButtonProps } from '../../components/PillButton';

// Story-only state keeps PillButton controlled by props while demonstrating selected and pressed states.
function InteractivePillButton(args: PillButtonProps) {
  const [selected, setSelected] = useState(args.state === 'selected');
  const [pressed, setPressed] = useState(false);

  return (
    <PillButton
      {...args}
      state={args.disabled ? 'enabled' : pressed ? 'pressed' : selected ? 'selected' : 'enabled'}
      onClick={(event) => {
        setSelected((current) => !current);
        args.onClick?.(event);
      }}
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
  title: 'Atoms/Buttons/PillButton',
  component: PillButton,
  tags: ['autodocs'],
  args: {
    label: 'Tab X',
    state: 'enabled',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    label: {
      description: 'Visible pill text.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    state: {
      description: 'Figma visual state.',
      control: { type: 'radio' },
      options: ['enabled', 'selected', 'pressed'],
      table: {
        category: 'State',
        defaultValue: { summary: 'enabled' },
        type: { summary: "'enabled' | 'selected' | 'pressed'" },
      },
    },
    disabled: {
      description: 'Prevents the action.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onClick: {
      description: 'Runs when the pill is clicked.',
      table: { category: 'Events', type: { summary: '(event: React.MouseEvent) => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=8363-4304',
    },
    docs: {
      description: {
        component: 'PillButton is a compact selectable action used for filters, tabs, or small choices.',
      },
    },
  },
} satisfies Meta<typeof PillButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { state: 'selected' },
};

export const Pressed: Story = {
  args: { state: 'pressed' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const InteractiveToggle: Story = {
  render: (args) => <InteractivePillButton {...args} />,
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /tab x/i }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const AllStates: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <PillButton label="Enabled" />
      <PillButton label="Selected" state="selected" />
      <PillButton label="Pressed" state="pressed" />
      <PillButton label="Disabled" disabled />
    </div>
  ),
};
