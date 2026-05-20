import type { Meta, StoryObj } from '@storybook/react';

import { IconContainer } from '../../components/IconContainer';

const colors = ['red', 'yellow', 'green', 'brand', 'blue', 'purple', 'pink'] as const;
const icons = ['check', 'info', 'settings', 'plus', 'minus', 'document', 'externalLink', 'upload', 'arrowRight'] as const;

const meta = {
  title: 'Atoms/Icon Containers/IconContainer',
  component: IconContainer,
  tags: ['autodocs'],
  args: {
    color: 'red',
    styleVariant: 'default',
    icon: 'check',
    label: 'Red icon container',
    size: 37,
  },
  argTypes: {
    color: {
      description: 'Color variant from the Figma Icon Containers component set.',
      control: { type: 'select' },
      options: colors,
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'red' },
        type: { summary: "'red' | 'yellow' | 'green' | 'brand' | 'blue' | 'purple' | 'pink'" },
      },
    },
    styleVariant: {
      description: 'Visual emphasis from Figma: default soft surface or emphasized stronger tinted surface.',
      control: { type: 'radio' },
      options: ['default', 'emphasized'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'emphasized'" },
      },
    },
    icon: {
      description: 'Icon shown inside the container.',
      control: { type: 'select' },
      options: icons,
      table: {
        category: 'Content',
        defaultValue: { summary: 'check' },
        type: { summary: 'IconName' },
      },
    },
    label: {
      description: 'Accessible label for the icon container.',
      control: { type: 'text' },
      table: { category: 'Accessibility', type: { summary: 'string' } },
    },
    size: {
      description: 'Container size in pixels.',
      control: { type: 'number', min: 24, max: 72, step: 1 },
      table: { category: 'Layout', defaultValue: { summary: '37' }, type: { summary: 'number' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9084-6053',
    },
    docs: {
      description: {
        component:
          'IconContainer frames a small icon inside one of the approved Figma color containers. Use it as a visual marker beside text, not as a button.',
      },
    },
  },
} satisfies Meta<typeof IconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Emphasized: Story = {
  args: {
    styleVariant: 'emphasized',
    label: 'Red emphasized icon container',
  },
};

export const Red: Story = {
  args: { color: 'red', label: 'Red icon container' },
};

export const Yellow: Story = {
  args: { color: 'yellow', label: 'Yellow icon container' },
};

export const Green: Story = {
  args: { color: 'green', label: 'Green icon container' },
};

export const Brand: Story = {
  args: { color: 'brand', label: 'Brand icon container' },
};

export const Blue: Story = {
  args: { color: 'blue', label: 'Blue icon container' },
};

export const Purple: Story = {
  args: { color: 'purple', label: 'Purple icon container' },
};

export const Pink: Story = {
  args: { color: 'pink', label: 'Pink icon container' },
};

export const IconSwap: Story = {
  args: {
    color: 'brand',
    icon: 'settings',
    label: 'Settings icon container',
  },
};

export const StyleExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <IconContainer color="red" label="Default icon container" />
      <IconContainer color="red" styleVariant="emphasized" label="Emphasized icon container" />
    </div>
  ),
};

export const AllColors: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {colors.map((color) => (
          <IconContainer key={color} color={color} label={`${color} icon container`} />
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {colors.map((color) => (
          <IconContainer key={color} color={color} styleVariant="emphasized" label={`${color} emphasized icon container`} />
        ))}
      </div>
    </div>
  ),
};

export const IconOptions: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {icons.map((icon) => (
        <IconContainer key={icon} color="brand" icon={icon} label={`${icon} icon container`} />
      ))}
    </div>
  ),
};
