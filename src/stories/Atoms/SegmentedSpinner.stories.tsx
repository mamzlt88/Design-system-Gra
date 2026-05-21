import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedSpinner } from '../../components/SegmentedSpinner';

const rotationOptions = ['1', '2', '3', '4'] as const;

const meta = {
  title: 'Atoms/Loading & Progress Indicators/SegmentedSpinner',
  component: SegmentedSpinner,
  tags: ['autodocs'],
  args: {
    rotation: '1',
    label: 'Loading',
  },
  argTypes: {
    rotation: {
      description: 'Static opacity frame from Figma.',
      control: { type: 'radio' },
      options: rotationOptions,
      table: {
        category: 'State',
        defaultValue: { summary: '1' },
        type: { summary: "'1' | '2' | '3' | '4'" },
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
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9761-597',
    },
    docs: {
      description: {
        component: 'SegmentedSpinner communicates an indeterminate loading state with four Figma-sourced opacity frames.',
      },
    },
  },
} satisfies Meta<typeof SegmentedSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RotationOne: Story = {};

export const RotationTwo: Story = {
  args: { rotation: '2' },
};

export const RotationThree: Story = {
  args: { rotation: '3' },
};

export const RotationFour: Story = {
  args: { rotation: '4' },
};

export const RotationExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {rotationOptions.map((rotation) => (
        <SegmentedSpinner key={rotation} rotation={rotation} />
      ))}
    </div>
  ),
};
