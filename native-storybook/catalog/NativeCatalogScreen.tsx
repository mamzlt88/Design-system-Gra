import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View, type ViewStyle } from 'react-native';

import {
  NativeActionBar,
  NativeAmountSelector,
  NativeAppHeader,
  NativeAttendanceReportRows,
  NativeButton,
  NativeCheckboxButton,
  NativeCheckboxList,
  NativeCheckboxRadioButton,
  NativeCircularSpinner,
  NativeColorIndicator,
  NativeDocumentUploadSlot,
  NativeExternalLinkButton,
  NativeGuidanceAvatar,
  NativeIcon,
  NativeIconButton,
  NativeIconContainer,
  NativeInformationButton,
  NativeInformationalCard,
  NativeLanguageImage,
  NativeLanguageSelector,
  NativeLastPaymentsRows,
  NativeLoanApprovalInProgress,
  NativeLogo,
  NativeMambuWebviewTable,
  NativeNavigationBar,
  NativeNavigationalList,
  NativeNavigationalListItem,
  NativeNotificationBadge,
  NativeNotificationIcon,
  NativeOTPInput,
  NativeOTPInputBox,
  NativeOptionSelectionBottomSheet,
  NativePastLoansRows,
  NativePaymentStateRowsTableHeader,
  NativePaymentStatusRow,
  NativePendingBalanceRows,
  NativePillButton,
  NativeRadioButton,
  NativeSavingsGoal,
  NativeSavingsProgramLogo,
  NativeSectionBar,
  NativeSegmentedSpinner,
  NativeSideBar,
  NativeSideBarItem,
  NativeStandardBottomSheet,
  NativeStandardModal,
  NativeStatusBadge,
  NativeStatusIndicator,
  NativeSubDetailsGroup,
  NativeSwitch,
  NativeTooltip,
  NativeUserAvatar,
  NativeValueAdjusterButton,
  NativeWebHeader,
  nativeTokens,
} from '../../src/native';

export type NativeCatalogItem = {
  id: string;
  name: string;
  node: ReactNode;
  wide?: boolean;
};

export type NativeCatalogSection = {
  id: string;
  title: string;
  description: string;
  items: NativeCatalogItem[];
};

const palette = nativeTokens.color;

function DemoCard({ children, name, wide }: { children: ReactNode; name: string; wide?: boolean }) {
  return (
    <View style={[styles.card, wide ? styles.wideCard : null]}>
      <Text style={styles.cardTitle}>{name}</Text>
      <View style={styles.cardBody}>{children}</View>
    </View>
  );
}

function Section({ section }: { section: NativeCatalogSection }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <Text style={styles.sectionDescription}>{section.description}</Text>
      <View style={styles.grid}>
        {section.items.map((item) => (
          <DemoCard key={item.id} name={item.name} wide={item.wide}>
            {item.node}
          </DemoCard>
        ))}
      </View>
    </View>
  );
}

const rowStyle: ViewStyle = {
  minWidth: 300,
};

export const nativeCatalogSections: NativeCatalogSection[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    description: 'Base tokens and small primitives used by native screens.',
    items: [
      { id: 'button', name: 'NativeButton', node: <NativeButton label="Continue" /> },
      { id: 'icon', name: 'NativeIcon', node: <NativeIcon name="bell" size={28} title="Bell" /> },
      { id: 'statusBadge', name: 'NativeStatusBadge', node: <NativeStatusBadge label="ACTIVE" status="success" /> },
      { id: 'colorIndicator', name: 'NativeColorIndicator', node: <NativeColorIndicator colorName="brand" size={24} /> },
      { id: 'iconContainer', name: 'NativeIconContainer', node: <NativeIconContainer icon="info" /> },
    ],
  },
  {
    id: 'actions',
    title: 'Actions',
    description: 'Buttons, action bars, and utility controls for repeated mobile workflows.',
    items: [
      { id: 'actionBar', name: 'NativeActionBar', node: <NativeActionBar primaryLabel="Pay now" secondaryLabel="Later" />, wide: true },
      { id: 'iconButton', name: 'NativeIconButton', node: <NativeIconButton icon="settings" /> },
      { id: 'pillButton', name: 'NativePillButton', node: <NativePillButton label="Selected" state="selected" /> },
      { id: 'externalLink', name: 'NativeExternalLinkButton', node: <NativeExternalLinkButton label="Open resource" /> },
      { id: 'valueAdjuster', name: 'NativeValueAdjusterButton', node: <NativeValueAdjusterButton adjustment="increase" /> },
      { id: 'informationButton', name: 'NativeInformationButton', node: <NativeInformationButton label="APR details" state="tooltipOpen" />, wide: true },
    ],
  },
  {
    id: 'inputs',
    title: 'Inputs',
    description: 'Selection, upload, OTP, and amount-entry surfaces.',
    items: [
      { id: 'checkboxButton', name: 'NativeCheckboxButton', node: <NativeCheckboxButton itemText="Use my saved bank account" state="selected" />, wide: true },
      { id: 'radioButton', name: 'NativeRadioButton', node: <NativeRadioButton itemText="Weekly" state="selected" />, wide: true },
      { id: 'checkboxRadioButton', name: 'NativeCheckboxRadioButton', node: <NativeCheckboxRadioButton itemText="Accept terms" state="selected" type="square" />, wide: true },
      {
        id: 'checkboxList',
        name: 'NativeCheckboxList',
        node: (
          <NativeCheckboxList
            items={[
              { id: 'id', label: 'Photo ID', checked: true },
              { id: 'address', label: 'Proof of address', supportiveText: 'Uploaded yesterday' },
            ]}
          />
        ),
        wide: true,
      },
      { id: 'switch', name: 'NativeSwitch', node: <NativeSwitch state="on" /> },
      { id: 'amountSelector', name: 'NativeAmountSelector', node: <NativeAmountSelector amount="$250.00" state="selected" />, wide: true },
      { id: 'otpInput', name: 'NativeOTPInput', node: <NativeOTPInput value="42" /> },
      { id: 'otpInputBox', name: 'NativeOTPInputBox', node: <NativeOTPInputBox state="active" value="7" /> },
      { id: 'documentUploadSlot', name: 'NativeDocumentUploadSlot', node: <NativeDocumentUploadSlot fileName="statement.pdf" state="uploaded" />, wide: true },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: 'Headers, tab bars, side navigation, and list-entry patterns.',
    items: [
      { id: 'appHeader', name: 'NativeAppHeader', node: <NativeAppHeader name="Good morning" title2="Mariana" />, wide: true },
      { id: 'webHeader', name: 'NativeWebHeader', node: <NativeWebHeader />, wide: true },
      { id: 'navigationBar', name: 'NativeNavigationBar', node: <NativeNavigationBar />, wide: true },
      { id: 'sectionBar', name: 'NativeSectionBar', node: <NativeSectionBar icon="payments" label="Payments" state="selected" /> },
      { id: 'sideBarItem', name: 'NativeSideBarItem', node: <NativeSideBarItem icon="person" label="Profile" />, wide: true },
      { id: 'sideBar', name: 'NativeSideBar', node: <NativeSideBar />, wide: true },
      { id: 'navigationalList', name: 'NativeNavigationalList', node: <NativeNavigationalList />, wide: true },
      { id: 'navigationalListItem', name: 'NativeNavigationalListItem', node: <NativeNavigationalListItem label="Payment history" leading="iconContainer" />, wide: true },
    ],
  },
  {
    id: 'feedback',
    title: 'Feedback',
    description: 'Loading, status, notification, tooltip, modal, and sheet surfaces.',
    items: [
      { id: 'circularSpinner', name: 'NativeCircularSpinner', node: <NativeCircularSpinner rotation="2" /> },
      { id: 'segmentedSpinner', name: 'NativeSegmentedSpinner', node: <NativeSegmentedSpinner rotation="3" /> },
      { id: 'notificationBadge', name: 'NativeNotificationBadge', node: <NativeNotificationBadge label="3" /> },
      { id: 'notificationIcon', name: 'NativeNotificationIcon', node: <NativeNotificationIcon type="weeklyPayment" /> },
      { id: 'statusIndicator', name: 'NativeStatusIndicator', node: <NativeStatusIndicator label="Completed" status="completed" /> },
      { id: 'tooltip', name: 'NativeTooltip', node: <NativeTooltip text="This is a native tooltip surface." />, wide: true },
      { id: 'standardModal', name: 'NativeStandardModal', node: <NativeStandardModal title="Confirm payment" />, wide: true },
      { id: 'standardBottomSheet', name: 'NativeStandardBottomSheet', node: <NativeStandardBottomSheet title="Choose option" />, wide: true },
    ],
  },
  {
    id: 'identity',
    title: 'Identity And Brand',
    description: 'Brand marks, avatars, language, and illustration placeholders.',
    items: [
      { id: 'logo', name: 'NativeLogo', node: <NativeLogo type="full" /> },
      { id: 'savingsProgramLogo', name: 'NativeSavingsProgramLogo', node: <NativeSavingsProgramLogo type="medium" /> },
      { id: 'userAvatar', name: 'NativeUserAvatar', node: <NativeUserAvatar name="Maria Santos" /> },
      { id: 'guidanceAvatar', name: 'NativeGuidanceAvatar', node: <NativeGuidanceAvatar typeAvatar="2" /> },
      { id: 'languageImage', name: 'NativeLanguageImage', node: <NativeLanguageImage language="english" /> },
      { id: 'languageSelector', name: 'NativeLanguageSelector', node: <NativeLanguageSelector language="english" state="selected" />, wide: true },
      { id: 'savingsGoal', name: 'NativeSavingsGoal', node: <NativeSavingsGoal type="completed" /> },
      { id: 'loanApproval', name: 'NativeLoanApprovalInProgress', node: <NativeLoanApprovalInProgress type="centerApprovalInProgress" />, wide: true },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Rows And Domain Surfaces',
    description: 'Payment, loan, balance, card, and bottom-sheet patterns.',
    items: [
      { id: 'lastPaymentsRows', name: 'NativeLastPaymentsRows', node: <NativeLastPaymentsRows style={rowStyle} />, wide: true },
      { id: 'attendanceReportRows', name: 'NativeAttendanceReportRows', node: <NativeAttendanceReportRows style={rowStyle} />, wide: true },
      { id: 'paymentStatusRow', name: 'NativePaymentStatusRow', node: <NativePaymentStatusRow style={rowStyle} />, wide: true },
      { id: 'pendingBalanceRows', name: 'NativePendingBalanceRows', node: <NativePendingBalanceRows style={rowStyle} />, wide: true },
      { id: 'pastLoansRows', name: 'NativePastLoansRows', node: <NativePastLoansRows style={rowStyle} />, wide: true },
      { id: 'paymentHeader', name: 'NativePaymentStateRowsTableHeader', node: <NativePaymentStateRowsTableHeader style={rowStyle} />, wide: true },
      { id: 'mambuTable', name: 'NativeMambuWebviewTable', node: <NativeMambuWebviewTable style={rowStyle} />, wide: true },
      { id: 'subDetailsGroup', name: 'NativeSubDetailsGroup', node: <NativeSubDetailsGroup rows={2} />, wide: true },
      { id: 'informationalCard', name: 'NativeInformationalCard', node: <NativeInformationalCard description="Payments post by the next business day." />, wide: true },
      {
        id: 'optionSelection',
        name: 'NativeOptionSelectionBottomSheet',
        node: (
          <NativeOptionSelectionBottomSheet
            options={[
              { id: 'bank', label: 'Bank account' },
              { id: 'card', label: 'Debit card' },
            ]}
          />
        ),
        wide: true,
      },
    ],
  },
];

function getNativeCatalogSection(sectionId: string) {
  return nativeCatalogSections.find((section) => section.id === sectionId);
}

function getNativeCatalogItem(sectionId: string, itemId: string) {
  const section = getNativeCatalogSection(sectionId);
  const item = section?.items.find((sectionItem) => sectionItem.id === itemId);

  return section && item ? { section, item } : undefined;
}

export type NativeCatalogGroupStoryProps = {
  sectionId: string;
};

export function NativeCatalogGroupStory({ sectionId }: NativeCatalogGroupStoryProps) {
  const section = getNativeCatalogSection(sectionId);

  if (!section) {
    return (
      <View style={styles.storyFallback}>
        <Text style={styles.cardTitle}>Native catalog group not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Section section={section} />
    </ScrollView>
  );
}

export type NativeComponentStoryProps = {
  itemId: string;
  sectionId: string;
};

export function NativeComponentStory({ itemId, sectionId }: NativeComponentStoryProps) {
  const result = getNativeCatalogItem(sectionId, itemId);

  if (!result) {
    return (
      <View style={styles.storyFallback}>
        <Text style={styles.cardTitle}>Native component story not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.singleStoryScreen}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>{result.section.title}</Text>
        <Text style={styles.title}>{result.item.name}</Text>
        <Text style={styles.description}>{result.section.description}</Text>
      </View>
      <DemoCard name={result.item.name} wide={result.item.wide ?? true}>
        {result.item.node}
      </DemoCard>
    </ScrollView>
  );
}

export function NativeCatalogScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>React Native Catalog</Text>
        <Text style={styles.title}>Grameen America Design System</Text>
        <Text style={styles.description}>
          Native Storybook coverage for every public native adapter exported from src/native.
        </Text>
      </View>
      {nativeCatalogSections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.grey00,
    borderColor: palette.grey10,
    borderRadius: nativeTokens.radius.md,
    borderWidth: 1,
    flexGrow: 1,
    gap: nativeTokens.spacing.lg,
    minWidth: 150,
    padding: nativeTokens.spacing.xl,
  },
  cardBody: {
    alignItems: 'flex-start',
    gap: nativeTokens.spacing.md,
  },
  cardTitle: {
    color: palette.grey70,
    fontFamily: nativeTokens.typography.bodySemiBold.fontFamily,
    fontSize: 13,
    fontWeight: 700,
  },
  description: {
    color: palette.grey50,
    fontFamily: nativeTokens.typography.bodyRegular.fontFamily,
    fontSize: 15,
    lineHeight: 22,
  },
  eyebrow: {
    color: palette.primary90,
    fontFamily: nativeTokens.typography.bodySemiBold.fontFamily,
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: nativeTokens.spacing.lg,
  },
  header: {
    gap: nativeTokens.spacing.md,
    paddingBottom: nativeTokens.spacing['3xl'],
  },
  screen: {
    backgroundColor: '#F8F7F3',
    gap: nativeTokens.spacing['3xl'],
    padding: nativeTokens.spacing['3xl'],
  },
  section: {
    gap: nativeTokens.spacing.lg,
  },
  sectionDescription: {
    color: palette.grey50,
    fontFamily: nativeTokens.typography.bodyRegular.fontFamily,
    fontSize: 14,
    lineHeight: 20,
  },
  sectionTitle: {
    color: palette.grey80,
    fontFamily: nativeTokens.typography.subHeadingSemiBold.fontFamily,
    fontSize: 22,
    fontWeight: 700,
  },
  singleStoryScreen: {
    backgroundColor: '#F8F7F3',
    gap: nativeTokens.spacing['3xl'],
    minHeight: '100%',
    padding: nativeTokens.spacing['3xl'],
  },
  storyFallback: {
    backgroundColor: palette.grey00,
    borderRadius: nativeTokens.radius.md,
    margin: nativeTokens.spacing['3xl'],
    padding: nativeTokens.spacing['3xl'],
  },
  title: {
    color: palette.grey80,
    fontFamily: nativeTokens.typography.subHeadingSemiBold.fontFamily,
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 36,
  },
  wideCard: {
    minWidth: 300,
  },
});
