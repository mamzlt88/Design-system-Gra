import type { Meta, StoryObj } from '@storybook/react-native';

import { NativeCatalogGroupStory, NativeComponentStory } from '../catalog/NativeCatalogScreen';

const meta = {
  title: 'Native/Financial And Domain',
  component: NativeComponentStory,
  args: {
    sectionId: 'financial',
    itemId: 'lastPaymentsRows',
  },
  parameters: {
    notes: 'Native payment, loan, balance, card, and domain-specific surfaces.',
  },
} satisfies Meta<typeof NativeComponentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllFinancialAndDomain: Story = {
  render: () => <NativeCatalogGroupStory sectionId="financial" />,
};

export const LastPaymentsRows: Story = { args: { itemId: 'lastPaymentsRows' } };
export const AttendanceReportRows: Story = { args: { itemId: 'attendanceReportRows' } };
export const PaymentStatusRow: Story = { args: { itemId: 'paymentStatusRow' } };
export const PendingBalanceRows: Story = { args: { itemId: 'pendingBalanceRows' } };
export const PastLoansRows: Story = { args: { itemId: 'pastLoansRows' } };
export const PaymentStateRowsTableHeader: Story = { args: { itemId: 'paymentHeader' } };
export const MambuWebviewTable: Story = { args: { itemId: 'mambuTable' } };
export const SubDetailsGroup: Story = { args: { itemId: 'subDetailsGroup' } };
export const InformationalCard: Story = { args: { itemId: 'informationalCard' } };
export const OptionSelectionBottomSheet: Story = { args: { itemId: 'optionSelection' } };
