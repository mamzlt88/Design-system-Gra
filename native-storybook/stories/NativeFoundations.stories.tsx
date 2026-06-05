import type { Meta, StoryObj } from '@storybook/react-native';

import { NativeCatalogGroupStory, NativeComponentStory } from '../catalog/NativeCatalogScreen';

const meta = {
  title: 'Native/Foundations',
  component: NativeComponentStory,
  args: {
    sectionId: 'foundations',
    itemId: 'button',
  },
  parameters: {
    notes: 'Foundational React Native primitives and token-backed surfaces.',
  },
} satisfies Meta<typeof NativeComponentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllFoundations: Story = {
  render: () => <NativeCatalogGroupStory sectionId="foundations" />,
};

export const Button: Story = { args: { itemId: 'button' } };
export const Icon: Story = { args: { itemId: 'icon' } };
export const StatusBadge: Story = { args: { itemId: 'statusBadge' } };
export const ColorIndicator: Story = { args: { itemId: 'colorIndicator' } };
export const IconContainer: Story = { args: { itemId: 'iconContainer' } };
