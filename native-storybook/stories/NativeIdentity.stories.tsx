import type { Meta, StoryObj } from '@storybook/react-native';

import { NativeCatalogGroupStory, NativeComponentStory } from '../catalog/NativeCatalogScreen';

const meta = {
  title: 'Native/Identity And Brand',
  component: NativeComponentStory,
  args: {
    sectionId: 'identity',
    itemId: 'logo',
  },
  parameters: {
    notes: 'Native brand, avatar, language, and illustration placeholder components.',
  },
} satisfies Meta<typeof NativeComponentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllIdentityAndBrand: Story = {
  render: () => <NativeCatalogGroupStory sectionId="identity" />,
};

export const Logo: Story = { args: { itemId: 'logo' } };
export const SavingsProgramLogo: Story = { args: { itemId: 'savingsProgramLogo' } };
export const UserAvatar: Story = { args: { itemId: 'userAvatar' } };
export const GuidanceAvatar: Story = { args: { itemId: 'guidanceAvatar' } };
export const LanguageImage: Story = { args: { itemId: 'languageImage' } };
export const LanguageSelector: Story = { args: { itemId: 'languageSelector' } };
export const SavingsGoal: Story = { args: { itemId: 'savingsGoal' } };
export const LoanApprovalInProgress: Story = { args: { itemId: 'loanApproval' } };
