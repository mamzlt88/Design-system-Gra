import type { Meta, StoryObj } from '@storybook/react';

import { ColorIndicator } from '../../components/ColorIndicator';

const colorOptions = ['red', 'yellow', 'green', 'aquamarine', 'blue', 'brand'] as const;

const meta = {
  title: 'Classic Components/Feedback/ColorIndicator',
  component: ColorIndicator,
  tags: ['autodocs'],
  args: {
    color: 'red',
    label: 'Red color indicator',
    height: 24,
  },
  argTypes: {
    color: {
      description: 'Color variant from Figma.',
      control: { type: 'select' },
      options: colorOptions,
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'red' },
        type: { summary: "'red' | 'yellow' | 'green' | 'aquamarine' | 'blue' | 'brand'" },
      },
    },
    label: {
      description: 'Accessible label when the indicator carries meaning.',
      control: { type: 'text' },
      table: { category: 'Accessibility', type: { summary: 'string' } },
    },
    height: {
      description: 'Indicator height in pixels.',
      control: { type: 'number', min: 16, max: 48, step: 1 },
      table: { category: 'Layout', defaultValue: { summary: '24' }, type: { summary: 'number' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9097-6463',
    },
    docs: {
      description: {
        component: 'ColorIndicator is a small vertical color marker for list rows, cards, and status-adjacent content.',
      },
    },
  },
} satisfies Meta<typeof ColorIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {};

export const Yellow: Story = {
  args: { color: 'yellow', label: 'Yellow color indicator' },
};

export const Green: Story = {
  args: { color: 'green', label: 'Green color indicator' },
};

export const Aquamarine: Story = {
  args: { color: 'aquamarine', label: 'Aquamarine color indicator' },
};

export const Blue: Story = {
  args: { color: 'blue', label: 'Blue color indicator' },
};

export const Brand: Story = {
  args: { color: 'brand', label: 'Brand color indicator' },
};

export const AllColors: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {colorOptions.map((color) => (
        <div key={color} style={{ alignItems: 'center', display: 'inline-flex', gap: 8 }}>
          <ColorIndicator color={color} label={`${color} color indicator`} />
          <span style={{ color: '#434343', fontFamily: 'Open Sans, Arial, sans-serif', fontSize: 14 }}>
            {color}
          </span>
        </div>
      ))}
    </div>
  ),
};
