import type { Meta, StoryObj } from '@storybook/react-native';

import { NativeCatalogGroupStory, NativeComponentStory } from '../catalog/NativeCatalogScreen';

const meta = {
  title: 'Native/Inputs',
  component: NativeComponentStory,
  args: {
    sectionId: 'inputs',
    itemId: 'checkboxButton',
  },
  parameters: {
    notes: 'Native selection, upload, OTP, switch, and amount-entry components.',
  },
} satisfies Meta<typeof NativeComponentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllInputs: Story = {
  render: () => <NativeCatalogGroupStory sectionId="inputs" />,
};

export const CheckboxButton: Story = { args: { itemId: 'checkboxButton' } };
export const RadioButton: Story = { args: { itemId: 'radioButton' } };
export const CheckboxRadioButton: Story = { args: { itemId: 'checkboxRadioButton' } };
export const CheckboxList: Story = { args: { itemId: 'checkboxList' } };
export const Switch: Story = { args: { itemId: 'switch' } };
export const AmountSelector: Story = { args: { itemId: 'amountSelector' } };
export const OTPInput: Story = { args: { itemId: 'otpInput' } };
export const OTPInputBox: Story = { args: { itemId: 'otpInputBox' } };
export const DocumentUploadSlot: Story = { args: { itemId: 'documentUploadSlot' } };
