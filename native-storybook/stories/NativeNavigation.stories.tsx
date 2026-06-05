import type { Meta, StoryObj } from '@storybook/react-native';

import { NativeCatalogGroupStory, NativeComponentStory } from '../catalog/NativeCatalogScreen';

const meta = {
  title: 'Native/Navigation',
  component: NativeComponentStory,
  args: {
    sectionId: 'navigation',
    itemId: 'appHeader',
  },
  parameters: {
    notes: 'Native headers, bottom navigation, side navigation, and list-entry components.',
  },
} satisfies Meta<typeof NativeComponentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllNavigation: Story = {
  render: () => <NativeCatalogGroupStory sectionId="navigation" />,
};

export const AppHeader: Story = { args: { itemId: 'appHeader' } };
export const WebHeader: Story = { args: { itemId: 'webHeader' } };
export const NavigationBar: Story = { args: { itemId: 'navigationBar' } };
export const SectionBar: Story = { args: { itemId: 'sectionBar' } };
export const SideBarItem: Story = { args: { itemId: 'sideBarItem' } };
export const SideBar: Story = { args: { itemId: 'sideBar' } };
export const NavigationalList: Story = { args: { itemId: 'navigationalList' } };
export const NavigationalListItem: Story = { args: { itemId: 'navigationalListItem' } };
