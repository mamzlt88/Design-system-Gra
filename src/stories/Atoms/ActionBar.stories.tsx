import { useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ActionBar, type ActionBarButtonState } from '../../components/ActionBar';

const types = ['dualActions', 'singleAction'] as const;
const buttonStates = ['enabled', 'pressed', 'disabled'] as const;

const meta = {
  title: 'Atoms/Navigation Bars/ActionBar',
  component: ActionBar,
  tags: ['autodocs'],
  args: { type: 'dualActions', primaryLabel: 'Continue', secondaryLabel: 'Back', primaryState: 'enabled', secondaryState: 'enabled' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    primaryLabel: { control: 'text', table: { category: 'Content' } },
    secondaryLabel: { control: 'text', table: { category: 'Content' } },
    primaryState: { control: { type: 'select' }, options: buttonStates, table: { category: 'Interaction' } },
    secondaryState: { control: { type: 'select' }, options: buttonStates, table: { category: 'Interaction' } },
    onPrimaryClick: { action: 'primary click', table: { category: 'Events' } },
    onSecondaryClick: { action: 'secondary click', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=8387-10564' },
    docs: { description: { component: 'ActionBar combines one or two footer actions.' } },
  },
} satisfies Meta<typeof ActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

type PressedAction = 'primary' | 'secondary' | null;

function getStoryState(
  action: Exclude<PressedAction, null>,
  pressedAction: PressedAction,
  configuredState: ActionBarButtonState | undefined,
): ActionBarButtonState {
  if (configuredState === 'disabled') {
    return 'disabled';
  }

  return pressedAction === action ? 'pressed' : configuredState ?? 'enabled';
}

function InteractiveActionBar(args: ComponentProps<typeof ActionBar>) {
  // Story-only state: demonstrates pressed feedback while ActionBar remains prop-controlled.
  const [pressedAction, setPressedAction] = useState<PressedAction>(null);

  return (
    <ActionBar
      {...args}
      primaryState={getStoryState('primary', pressedAction, args.primaryState)}
      secondaryState={getStoryState('secondary', pressedAction, args.secondaryState)}
      onPrimaryClick={() => {
        setPressedAction((current) => (current === 'primary' ? null : 'primary'));
        args.onPrimaryClick?.();
      }}
      onSecondaryClick={() => {
        setPressedAction((current) => (current === 'secondary' ? null : 'secondary'));
        args.onSecondaryClick?.();
      }}
    />
  );
}

export const DualActions: Story = {
  render: (args) => <InteractiveActionBar {...args} />,
};

export const SingleAction: Story = {
  args: { type: 'singleAction' },
  render: (args) => <InteractiveActionBar {...args} />,
};
export const PressedInteraction: Story = { args: { primaryState: 'pressed' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <ActionBar />
      <ActionBar type="singleAction" />
    </div>
  ),
};

export const InteractionExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <ActionBar />
      <ActionBar primaryState="pressed" />
    </div>
  ),
};
