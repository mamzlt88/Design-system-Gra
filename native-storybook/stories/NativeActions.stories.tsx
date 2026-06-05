import type { Meta, StoryObj } from '@storybook/react-native';

import { NativeCatalogGroupStory, NativeComponentStory } from '../catalog/NativeCatalogScreen';

const meta = {
  title: 'Native/Actions',
  component: NativeComponentStory,
  args: {
    sectionId: 'actions',
    itemId: 'actionBar',
  },
  parameters: {
    notes: 'Action controls for native mobile workflows.',
  },
} satisfies Meta<typeof NativeComponentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllActions: Story = {
  render: () => <NativeCatalogGroupStory sectionId="actions" />,
};

export const ActionBar: Story = { args: { itemId: 'actionBar' } };
export const IconButton: Story = { args: { itemId: 'iconButton' } };
export const PillButton: Story = { args: { itemId: 'pillButton' } };
export const ExternalLinkButton: Story = { args: { itemId: 'externalLink' } };
export const ValueAdjusterButton: Story = { args: { itemId: 'valueAdjuster' } };
export const InformationButton: Story = { args: { itemId: 'informationButton' } };
