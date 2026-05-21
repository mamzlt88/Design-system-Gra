import type { Meta, StoryObj } from '@storybook/react';

import { CircularSpinner } from '../../components/CircularSpinner';

const sizeOptions = ['small', 'medium', 'large'] as const;
const rotationOptions = ['1', '2', '3', '4'] as const;

const meta = {
  title: 'Atoms/Loading & Progress Indicators/CircularSpinner',
  component: CircularSpinner,
  tags: ['autodocs'],
  args: {
    size: 'small',
    rotation: '1',
    animated: true,
    label: 'Loading',
  },
  argTypes: {
    size: {
      description: 'Figma size variant.',
      control: { type: 'select' },
      options: sizeOptions,
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'small' },
        type: { summary: "'small' | 'medium' | 'large'" },
      },
    },
    rotation: {
      description: 'Static rotation frame from Figma.',
      control: { type: 'radio' },
      options: rotationOptions,
      table: {
        category: 'State',
        defaultValue: { summary: '1' },
        type: { summary: "'1' | '2' | '3' | '4'" },
      },
    },
    animated: {
      description: 'Uses the Figma prototype auto-advance behavior.',
      control: 'boolean',
      table: {
        category: 'Behavior',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    label: {
      description: 'Accessible loading label.',
      control: { type: 'text' },
      table: {
        category: 'Accessibility',
        defaultValue: { summary: 'Loading' },
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9476-242',
    },
    docs: {
      description: {
        component: 'CircularSpinner communicates an indeterminate loading state with Figma-sourced size and rotation frames.',
      },
    },
  },
} satisfies Meta<typeof CircularSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};

export const Medium: Story = {
  args: { size: 'medium' },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const StaticRotationOne: Story = {
  args: { animated: false, rotation: '1' },
};

export const StaticRotationTwo: Story = {
  args: { animated: false, rotation: '2' },
};

export const StaticRotationThree: Story = {
  args: { animated: false, rotation: '3' },
};

export const StaticRotationFour: Story = {
  args: { animated: false, rotation: '4' },
};

export const SizeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {sizeOptions.map((size) => (
        <CircularSpinner key={size} size={size} />
      ))}
    </div>
  ),
};

export const RotationExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {rotationOptions.map((rotation) => (
        <CircularSpinner animated={false} key={rotation} rotation={rotation} />
      ))}
    </div>
  ),
};
