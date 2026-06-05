import type { Meta, StoryObj } from '@storybook/react-native';

import { NativeCatalogGroupStory, NativeComponentStory } from '../catalog/NativeCatalogScreen';

const meta = {
  title: 'Native/Feedback',
  component: NativeComponentStory,
  args: {
    sectionId: 'feedback',
    itemId: 'circularSpinner',
  },
  parameters: {
    notes: 'Native loading, notification, tooltip, modal, and sheet surfaces.',
  },
} satisfies Meta<typeof NativeComponentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllFeedback: Story = {
  render: () => <NativeCatalogGroupStory sectionId="feedback" />,
};

export const CircularSpinner: Story = { args: { itemId: 'circularSpinner' } };
export const SegmentedSpinner: Story = { args: { itemId: 'segmentedSpinner' } };
export const NotificationBadge: Story = { args: { itemId: 'notificationBadge' } };
export const NotificationIcon: Story = { args: { itemId: 'notificationIcon' } };
export const StatusIndicator: Story = { args: { itemId: 'statusIndicator' } };
export const Tooltip: Story = { args: { itemId: 'tooltip' } };
export const StandardModal: Story = { args: { itemId: 'standardModal' } };
export const StandardBottomSheet: Story = { args: { itemId: 'standardBottomSheet' } };
