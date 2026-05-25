import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../../components/Switch';

const stateOptions = ['off', 'on', 'disabledOn', 'disabledOff'] as const;

const meta = {
  title: 'Classic Components/Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    state: 'off',
    showIcon: true,
    ariaLabel: 'Toggle setting',
  },
  argTypes: {
    state: {
      description: 'Figma state variant.',
      control: { type: 'select' },
      options: stateOptions,
      table: {
        category: 'State',
        defaultValue: { summary: 'off' },
        type: { summary: "'off' | 'on' | 'disabledOn' | 'disabledOff'" },
      },
    },
    showIcon: {
      description: 'Shows the Figma check icon on the On state.',
      control: 'boolean',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    ariaLabel: {
      description: 'Accessible switch label.',
      control: { type: 'text' },
      table: {
        category: 'Accessibility',
        defaultValue: { summary: 'Toggle setting' },
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7521-6965',
    },
    docs: {
      description: {
        component: 'Switch controls a binary setting with Figma-sourced on, off, and disabled states.',
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};

export const On: Story = {
  args: { state: 'on' },
};

export const DisabledOn: Story = {
  args: { state: 'disabledOn' },
};

export const DisabledOff: Story = {
  args: { state: 'disabledOff' },
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {stateOptions.map((state) => (
        <Switch ariaLabel={`${state} switch`} key={state} state={state} />
      ))}
    </div>
  ),
};
