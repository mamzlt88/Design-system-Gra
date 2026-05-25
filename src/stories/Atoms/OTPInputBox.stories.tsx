import type { Meta, StoryObj } from '@storybook/react';

import { OTPInputBox } from '../../components/OTPInputBox';

const stateOptions = ['enabled', 'active', 'filled', 'filledError', 'activeError'] as const;

const meta = {
  title: 'Classic Components/Inputs/OTPInputBox',
  component: OTPInputBox,
  tags: ['autodocs'],
  args: {
    state: 'enabled',
    value: '2',
    showValue: true,
    ariaLabel: 'One-time passcode digit',
  },
  argTypes: {
    state: {
      description: 'Figma visual state.',
      control: { type: 'select' },
      options: stateOptions,
      table: {
        category: 'State',
        defaultValue: { summary: 'enabled' },
        type: { summary: "'enabled' | 'active' | 'filled' | 'filledError' | 'activeError'" },
      },
    },
    value: {
      description: 'Single visible digit.',
      control: { type: 'text' },
      table: {
        category: 'Content',
        defaultValue: { summary: '2' },
        type: { summary: 'string' },
      },
    },
    showValue: {
      description: 'Maps the Figma Show_No property.',
      control: 'boolean',
      table: {
        category: 'Content',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    ariaLabel: {
      description: 'Accessible input label.',
      control: { type: 'text' },
      table: {
        category: 'Accessibility',
        defaultValue: { summary: 'One-time passcode digit' },
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7878-668',
    },
    docs: {
      description: {
        component: 'OTPInputBox renders one one-time-passcode digit slot with Figma-sourced enabled, active, filled, and error states.',
      },
    },
  },
} satisfies Meta<typeof OTPInputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: { showValue: false, value: '' },
};

export const Active: Story = {
  args: { state: 'active' },
};

export const Filled: Story = {
  args: { state: 'filled' },
};

export const FilledError: Story = {
  args: { state: 'filledError' },
};

export const ActiveError: Story = {
  args: { state: 'activeError' },
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {stateOptions.map((state) => (
        <OTPInputBox
          ariaLabel={`${state} OTP digit`}
          key={state}
          showValue={state !== 'enabled'}
          state={state}
          value="2"
        />
      ))}
    </div>
  ),
};
