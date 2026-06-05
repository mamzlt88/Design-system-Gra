import type { Meta, StoryObj } from '@storybook/react-native';

import { NativeCatalogScreen } from '../catalog/NativeCatalogScreen';

const meta = {
  title: 'Native/Catalog/All Components',
  component: NativeCatalogScreen,
  parameters: {
    notes: 'Expo/on-device catalog for every component exported from src/native.',
  },
} satisfies Meta<typeof NativeCatalogScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {};
