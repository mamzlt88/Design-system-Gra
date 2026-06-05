import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

import type { AppHeaderSize, AppHeaderType } from '../../components/AppHeader';
import type { AttendanceReportRowsType } from '../../components/AttendanceReportRows';
import type { CheckboxListItem } from '../../components/CheckboxList';
import type { CheckboxButtonTone } from '../../components/CheckboxButton';
import type { CheckboxRadioButtonType } from '../../components/CheckboxRadioButton';
import type { CircularSpinnerRotation, CircularSpinnerSize } from '../../components/CircularSpinner';
import type { ColorIndicatorColor } from '../../components/ColorIndicator';
import type { GuidanceAvatarType } from '../../components/GuidanceAvatar';
import type { IconContainerColor, IconContainerStyle } from '../../components/IconContainer';
import type { IconName } from '../../components/Icon';
import type { InformationButtonState, InformationButtonTextSize } from '../../components/InformationButton';
import type { InformationalCardBgColor } from '../../components/InformationalCard';
import type { LanguageImageLanguage } from '../../components/LanguageImage';
import type { LanguageSelectorState } from '../../components/LanguageSelector';
import type { LastPaymentsRowsType } from '../../components/LastPaymentsRows';
import type { LoanApprovalInProgressType } from '../../components/LoanApprovalInProgress';
import type { LogoType } from '../../components/Logo';
import type { MambuWebviewTableSize, MambuWebviewTableType } from '../../components/MambuWebviewTable';
import type { NavigationalListItemLeading, NavigationalListItemState } from '../../components/NavigationalListItem';
import type { NotificationBadgeSize } from '../../components/NotificationBadge';
import type { NotificationIconType } from '../../components/NotificationIcon';
import type { OptionSelectionOption } from '../../components/OptionSelectionBottomSheet';
import type { PastLoansRowsType } from '../../components/PastLoansRows';
import type { PaymentStatusRowState } from '../../components/PaymentStatusRow';
import type { PendingBalanceRowsType } from '../../components/PendingBalanceRows';
import type { SavingsGoalType } from '../../components/SavingsGoal';
import type { SavingsProgramLogoType } from '../../components/SavingsProgramLogo';
import type { SectionBarIcon, SectionBarInteraction, SectionBarState } from '../../components/SectionBar';
import type { SideBarItemPressedStyle, SideBarItemState } from '../../components/SideBarItem';
import type { StandardModalType } from '../../components/StandardModal';
import type { StatusIndicatorStatus } from '../../components/StatusIndicator';
import type { SwitchState } from '../../components/Switch';
import type { TooltipArrowAlignment, TooltipArrowPlacement } from '../../components/Tooltip';
import type { UserAvatarSize, UserAvatarType, UserAvatarVariant } from '../../components/UserAvatar';
import type { WebHeaderSize, WebHeaderState } from '../../components/WebHeader';
import { NativeButton, type NativeButtonState } from './Button.native';
import { NativeIcon } from './Icon.native';
import { NativeStatusBadge } from './StatusBadge.native';
import { nativeTokens } from '../tokens';

type NativeBaseProps = {
  accessibilityLabel?: string;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

type NativePressProps = NativeBaseProps & {
  disabled?: boolean;
  onPress?: () => void;
};

const color = nativeTokens.color;

function titleize(value: string) {
  return value.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase());
}

function NativeSurface({
  children,
  label,
  style,
  subtitle,
}: {
  children?: ReactNode;
  label: string;
  style?: StyleProp<ViewStyle>;
  subtitle?: string;
}) {
  return (
    <View style={[styles.surface, style]}>
      <Text style={styles.surfaceTitle}>{label}</Text>
      {subtitle ? <Text style={styles.surfaceSubtitle}>{subtitle}</Text> : null}
      {children ? <View style={styles.surfaceContent}>{children}</View> : null}
    </View>
  );
}

function NativeRow({
  leading,
  meta,
  style,
  title,
  trailing,
}: {
  leading?: ReactNode;
  meta?: string;
  style?: StyleProp<ViewStyle>;
  title: string;
  trailing?: ReactNode;
}) {
  return (
    <View style={[styles.row, style]}>
      {leading ? <View style={styles.rowLeading}>{leading}</View> : null}
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{title}</Text>
        {meta ? <Text style={styles.rowMeta}>{meta}</Text> : null}
      </View>
      {trailing ? <View style={styles.rowTrailing}>{trailing}</View> : null}
    </View>
  );
}

function SelectionMark({
  selected,
  shape = 'square',
  tone = 'primary',
}: {
  selected?: boolean;
  shape?: 'circle' | 'square';
  tone?: 'primary' | 'danger';
}) {
  const activeColor = tone === 'danger' ? color.red80 : color.primary90;

  return (
    <View
      style={[
        styles.selectionMark,
        {
          backgroundColor: selected ? activeColor : color.grey00,
          borderColor: selected ? activeColor : color.grey30,
          borderRadius: shape === 'circle' ? nativeTokens.radius.circle : nativeTokens.radius.xs,
        },
      ]}
    >
      {selected ? <Text style={styles.selectionText}>{shape === 'circle' ? '' : '✓'}</Text> : null}
    </View>
  );
}

function NativeDataRow({
  cells,
  header = false,
  style,
}: {
  cells: string[];
  header?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.dataRow, header ? styles.dataHeaderRow : null, style]}>
      {cells.map((cell) => (
        <Text key={cell} style={[styles.dataCell, header ? styles.dataHeaderCell : null]}>
          {cell}
        </Text>
      ))}
    </View>
  );
}

export type NativeActionBarProps = NativeBaseProps & {
  primaryLabel?: string;
  primaryState?: NativeButtonState;
  secondaryLabel?: string;
  secondaryState?: NativeButtonState;
  type?: 'dualActions' | 'singleAction';
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
};

export function NativeActionBar({
  primaryLabel = 'Continue',
  primaryState = 'enabled',
  secondaryLabel = 'Cancel',
  secondaryState = 'enabled',
  style,
  type = 'dualActions',
  onPrimaryPress,
  onSecondaryPress,
}: NativeActionBarProps) {
  return (
    <View style={[styles.actionBar, style]}>
      {type === 'dualActions' ? (
        <NativeButton label={secondaryLabel} onPress={onSecondaryPress} state={secondaryState} variant="outlined" />
      ) : null}
      <NativeButton label={primaryLabel} onPress={onPrimaryPress} state={primaryState} />
    </View>
  );
}

export type NativeAmountSelectorProps = NativePressProps & {
  amount?: string;
  helperText?: string;
  state?: 'initial' | 'selected' | 'disabled' | 'pressedDecrease' | 'pressedIncrease';
};

export function NativeAmountSelector({
  amount = '$0.00',
  disabled = false,
  helperText = 'Amount',
  onPress,
  state = 'initial',
  style,
}: NativeAmountSelectorProps) {
  const isDisabled = disabled || state === 'disabled';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, selected: state === 'selected' }}
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.amountSelector, state === 'selected' ? styles.selectedSurface : null, isDisabled ? styles.disabledSurface : null, style]}
    >
      <Text style={styles.caption}>{helperText}</Text>
      <Text style={styles.amountText}>{amount}</Text>
    </Pressable>
  );
}

export type NativeAppHeaderProps = NativeBaseProps & {
  business?: string;
  counter?: string;
  name?: string;
  size?: AppHeaderSize;
  title1?: string;
  title2?: string;
  type?: AppHeaderType;
};

export function NativeAppHeader({
  business,
  counter,
  name,
  size = 'large',
  style,
  title1 = 'Header Title',
  title2,
  type = 'standard',
}: NativeAppHeaderProps) {
  return (
    <View style={[styles.appHeader, size === 'small' ? styles.appHeaderSmall : null, style]}>
      <Text style={styles.appHeaderEyebrow}>{titleize(type)}</Text>
      <Text style={styles.appHeaderTitle}>{name ?? title1}</Text>
      {title2 || business || counter ? <Text style={styles.appHeaderSubtitle}>{title2 ?? business ?? counter}</Text> : null}
    </View>
  );
}

export type NativeAttendanceReportRowsProps = NativeBaseProps & {
  attended?: string;
  missed?: string;
  member?: string;
  type?: AttendanceReportRowsType;
};

export function NativeAttendanceReportRows({
  attended = '8',
  member = 'Member name',
  missed = '1',
  style,
  type = 'content',
}: NativeAttendanceReportRowsProps) {
  return <NativeDataRow cells={type === 'header' ? ['MEMBER', 'ATTENDED', 'MISSED'] : [member, attended, missed]} header={type === 'header'} style={style} />;
}

export type NativeCheckboxButtonProps = NativePressProps & {
  checked?: boolean;
  itemText?: string;
  state?: 'default' | 'selected' | 'disabled';
  supportiveText?: string;
  tone?: CheckboxButtonTone;
};

export function NativeCheckboxButton({
  checked,
  disabled = false,
  itemText = 'Item',
  onPress,
  state = 'default',
  style,
  supportiveText,
  tone = 'default',
}: NativeCheckboxButtonProps) {
  const selected = checked ?? state === 'selected';
  const isDisabled = disabled || state === 'disabled';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ checked: selected, disabled: isDisabled }}
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.selectionRow, isDisabled ? styles.disabledSurface : null, style]}
    >
      <SelectionMark selected={selected} tone={tone === 'danger' ? 'danger' : 'primary'} />
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{itemText}</Text>
        {supportiveText ? <Text style={styles.rowMeta}>{supportiveText}</Text> : null}
      </View>
    </Pressable>
  );
}

export type NativeCheckboxListProps = NativeBaseProps & {
  items?: CheckboxListItem[];
  onItemPress?: (id: string) => void;
};

export function NativeCheckboxList({
  items = [{ id: 'item-1', label: 'Item 1' }],
  onItemPress,
  style,
}: NativeCheckboxListProps) {
  return (
    <View style={[styles.stack, style]}>
      {items.map((item) => (
        <NativeCheckboxButton
          itemText={item.label}
          key={item.id}
          onPress={() => onItemPress?.(item.id)}
          state={item.disabled ? 'disabled' : item.checked ? 'selected' : 'default'}
          supportiveText={item.supportiveText}
        />
      ))}
    </View>
  );
}

export type NativeCheckboxRadioButtonProps = NativeCheckboxButtonProps & {
  type?: CheckboxRadioButtonType;
};

export function NativeCheckboxRadioButton({ type = 'radioText', ...props }: NativeCheckboxRadioButtonProps) {
  const selected = props.checked ?? props.state === 'selected';
  const isRadio = type === 'radio' || type === 'radioText';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ checked: selected, disabled: props.disabled || props.state === 'disabled' }}
      disabled={props.disabled || props.state === 'disabled'}
      onPress={props.onPress}
      style={[styles.selectionRow, props.style]}
    >
      <SelectionMark selected={selected} shape={isRadio ? 'circle' : 'square'} tone={type === 'squareRed' ? 'danger' : 'primary'} />
      {type !== 'radio' ? (
        <View style={styles.rowText}>
          <Text style={styles.rowTitle}>{props.itemText ?? 'Item'}</Text>
          {props.supportiveText ? <Text style={styles.rowMeta}>{props.supportiveText}</Text> : null}
        </View>
      ) : null}
    </Pressable>
  );
}

export function NativeRadioButton(props: Omit<NativeCheckboxRadioButtonProps, 'type'>) {
  return <NativeCheckboxRadioButton {...props} type="radioText" />;
}

export type NativeCircularSpinnerProps = NativeBaseProps & {
  rotation?: CircularSpinnerRotation;
  size?: CircularSpinnerSize;
};

export function NativeCircularSpinner({ rotation = '1', size = 'medium', style }: NativeCircularSpinnerProps) {
  const dimension = size === 'large' ? 48 : size === 'small' ? 24 : 36;

  return (
    <View accessibilityLabel="Loading" accessibilityRole="progressbar" style={[styles.spinner, { height: dimension, width: dimension }, style]}>
      <Text style={[styles.spinnerText, { fontSize: dimension / 2 }]}>{rotation}</Text>
    </View>
  );
}

export type NativeColorIndicatorProps = NativeBaseProps & {
  colorName?: ColorIndicatorColor;
  label?: string;
  size?: number;
};

const indicatorColors: Record<ColorIndicatorColor, string> = {
  aquamarine: color.primary30,
  blue: color.secondary80,
  brand: color.primary90,
  green: color.colorIndicatorGreen,
  red: color.red80,
  yellow: color.yellow40,
};

export function NativeColorIndicator({
  colorName = 'brand',
  label,
  size = 12,
  style,
}: NativeColorIndicatorProps) {
  return (
    <View accessibilityLabel={label} style={[styles.colorIndicator, { backgroundColor: indicatorColors[colorName], height: size, width: size }, style]} />
  );
}

export type NativeDocumentUploadSlotProps = NativePressProps & {
  description?: string;
  fileName?: string;
  label?: string;
  state?: 'empty' | 'uploaded' | 'error';
};

export function NativeDocumentUploadSlot({
  description = 'Upload document',
  fileName,
  label = 'Document',
  onPress,
  state = 'empty',
  style,
}: NativeDocumentUploadSlotProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={[styles.uploadSlot, state === 'error' ? styles.errorSurface : null, style]}>
      <NativeIcon name={state === 'uploaded' ? 'check' : 'upload'} size={22} />
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{fileName ?? label}</Text>
        <Text style={styles.rowMeta}>{description}</Text>
      </View>
    </Pressable>
  );
}

export type NativeExternalLinkButtonProps = NativePressProps & {
  label?: string;
  size?: 'medium' | 'large';
};

export function NativeExternalLinkButton({ label = 'External link', onPress, size = 'medium', style }: NativeExternalLinkButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={[styles.inlineButton, size === 'large' ? styles.inlineButtonLarge : null, style]}>
      <Text style={styles.inlineButtonText}>{label}</Text>
      <NativeIcon color={color.primary80} name="externalLink" size={18} />
    </Pressable>
  );
}

export type NativeGuidanceAvatarProps = NativeBaseProps & {
  label?: string;
  typeAvatar?: GuidanceAvatarType;
};

export function NativeGuidanceAvatar({ label = 'Guidance avatar', style, typeAvatar = '1' }: NativeGuidanceAvatarProps) {
  return (
    <View accessibilityLabel={label} style={[styles.guidanceAvatar, style]}>
      <Text style={styles.avatarText}>{typeAvatar}</Text>
    </View>
  );
}

export type NativeIconButtonProps = NativePressProps & {
  icon?: IconName;
  state?: 'enabled' | 'pressed' | 'disabled';
  variant?: 'filled' | 'tonal' | 'outlined' | 'outlinedAccent' | 'filledRed' | 'standard' | 'standardInverse';
};

export function NativeIconButton({
  disabled = false,
  icon = 'settings',
  onPress,
  state = 'enabled',
  style,
  variant = 'standard',
}: NativeIconButtonProps) {
  const isDisabled = disabled || state === 'disabled';
  const filled = variant === 'filled' || variant === 'filledRed';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.iconButton,
        filled ? { backgroundColor: variant === 'filledRed' ? color.red80 : color.primary90 } : null,
        state === 'pressed' ? styles.selectedSurface : null,
        isDisabled ? styles.disabledSurface : null,
        style,
      ]}
    >
      <NativeIcon color={filled ? color.grey00 : color.primary90} name={icon} size={22} />
    </Pressable>
  );
}

export type NativeIconContainerProps = NativeBaseProps & {
  colorName?: IconContainerColor;
  icon?: IconName;
  size?: number;
  styleVariant?: IconContainerStyle;
};

const iconContainerColors: Record<IconContainerColor, string> = {
  blue: color.secondary60,
  brand: color.primary00,
  green: color.green10,
  pink: color.illustrativePinkSoft,
  purple: color.illustrativePurpleSoft,
  red: color.red50,
  yellow: color.yellow05,
};

export function NativeIconContainer({
  colorName = 'brand',
  icon = 'info',
  size = 40,
  style,
  styleVariant = 'default',
}: NativeIconContainerProps) {
  return (
    <View
      style={[
        styles.iconContainer,
        {
          backgroundColor: iconContainerColors[colorName],
          height: size,
          width: size,
        },
        styleVariant === 'emphasized' ? styles.selectedSurface : null,
        style,
      ]}
    >
      <NativeIcon color={color.primary90} name={icon} size={Math.max(14, size - 18)} />
    </View>
  );
}

export type NativeInformationButtonProps = NativePressProps & {
  label?: string;
  state?: InformationButtonState;
  textSize?: InformationButtonTextSize;
  tooltipText?: string;
};

export function NativeInformationButton({
  label = 'Information',
  onPress,
  state = 'enabled',
  style,
  textSize = 'medium',
  tooltipText = 'Additional information',
}: NativeInformationButtonProps) {
  return (
    <View style={[styles.stack, style]}>
      <Pressable accessibilityRole="button" onPress={onPress} style={[styles.inlineButton, state === 'pressed' || state === 'tooltipOpen' ? styles.selectedSurface : null]}>
        <NativeIcon name="info" size={textSize === 'medium' ? 18 : 16} />
        <Text style={[styles.inlineButtonText, textSize === 'small' ? styles.smallText : null]}>{label}</Text>
      </Pressable>
      {state === 'tooltipOpen' ? <NativeTooltip text={tooltipText} /> : null}
    </View>
  );
}

export type NativeInformationalCardProps = NativeBaseProps & {
  bgColor?: InformationalCardBgColor;
  description?: string;
  title?: string;
};

const cardColors: Record<InformationalCardBgColor, string> = {
  blue: color.cardBrand,
  yellow: color.cardYellow,
};

export function NativeInformationalCard({
  bgColor = 'blue',
  description = 'Supporting information',
  style,
  title = 'Information',
}: NativeInformationalCardProps) {
  return (
    <NativeSurface label={title} style={[{ backgroundColor: cardColors[bgColor] }, style]} subtitle={description}>
      <NativeIconContainer colorName="brand" icon="info" />
    </NativeSurface>
  );
}

export type NativeLanguageImageProps = NativeBaseProps & {
  language?: LanguageImageLanguage;
  label?: string;
  size?: number;
};

export function NativeLanguageImage({ label, language = 'english', size = 40, style }: NativeLanguageImageProps) {
  return (
    <View accessibilityLabel={label ?? language} style={[styles.languageImage, { height: size, width: size }, style]}>
      <Text style={styles.avatarText}>{language === 'english' ? 'EN' : 'ES'}</Text>
    </View>
  );
}

export type NativeLanguageSelectorProps = NativePressProps & {
  language?: LanguageImageLanguage;
  label?: string;
  state?: LanguageSelectorState;
};

export function NativeLanguageSelector({
  language = 'english',
  label = language === 'english' ? 'English' : 'Spanish',
  onPress,
  state = 'default',
  style,
}: NativeLanguageSelectorProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={[styles.inlineButton, state === 'selected' ? styles.selectedSurface : null, style]}>
      <NativeLanguageImage language={language} size={28} />
      <Text style={styles.rowTitle}>{label}</Text>
    </Pressable>
  );
}

export type NativeLastPaymentsRowsProps = NativeBaseProps & {
  amount?: string;
  date?: string;
  status?: string;
  title?: string;
  type?: LastPaymentsRowsType;
};

export function NativeLastPaymentsRows({
  amount = '$125.00',
  date = 'May 20',
  status = 'PAID',
  style,
  title = 'Last payments',
  type = 'content',
}: NativeLastPaymentsRowsProps) {
  if (type === 'title') {
    return <Text style={[styles.sectionTitle, style as StyleProp<TextStyle>]}>{title}</Text>;
  }

  return <NativeDataRow cells={type === 'header' ? ['DATE', 'AMOUNT', 'STATUS'] : [date, amount, status]} header={type === 'header'} style={style} />;
}

export type NativeLoanApprovalInProgressProps = NativeBaseProps & {
  description?: string;
  title?: string;
  type?: LoanApprovalInProgressType;
};

export function NativeLoanApprovalInProgress({
  description = 'We are reviewing the request.',
  style,
  title,
  type = 'centerApprovalInProgress',
}: NativeLoanApprovalInProgressProps) {
  return (
    <NativeSurface label={title ?? titleize(type)} style={style} subtitle={description}>
      <NativeIconContainer colorName={type === 'resubmitDocuments' ? 'red' : 'brand'} icon={type === 'resubmitDocuments' ? 'upload' : 'check'} size={64} />
    </NativeSurface>
  );
}

export type NativeLogoProps = NativeBaseProps & {
  label?: string;
  type?: LogoType;
};

export function NativeLogo({ label = 'Grameen', style, type = 'iconOnly' }: NativeLogoProps) {
  return (
    <View accessibilityLabel={label} style={[styles.logo, type === 'full' ? styles.logoFull : null, style]}>
      <Text style={styles.logoText}>{type === 'full' ? 'Grameen America' : 'G'}</Text>
    </View>
  );
}

export type NativeMambuWebviewTableProps = NativeBaseProps & {
  amount?: string;
  label?: string;
  size?: MambuWebviewTableSize;
  type?: MambuWebviewTableType;
  value?: string;
};

export function NativeMambuWebviewTable({
  amount = '$125.00',
  label = 'Label',
  size = 'medium',
  style,
  type = 'content',
  value = 'Value',
}: NativeMambuWebviewTableProps) {
  return (
    <NativeDataRow
      cells={type === 'header' ? ['ITEM', 'VALUE', 'AMOUNT'] : type === 'total' ? ['Total', '', amount] : [label, value, amount]}
      header={type === 'header'}
      style={[size === 'small' ? styles.compactRow : null, style]}
    />
  );
}

export type NativeNavigationBarProps = NativeBaseProps & {
  activeSection?: string;
  sections?: Array<{ id: string; icon?: SectionBarIcon; label: string }>;
};

export function NativeNavigationBar({
  activeSection = 'loan',
  sections = [
    { id: 'loan', label: 'My Loan', icon: 'loan' },
    { id: 'payments', label: 'Payments', icon: 'payments' },
    { id: 'newLoan', label: 'New Loan', icon: 'newLoan' },
    { id: 'resources', label: 'Resources', icon: 'resources' },
  ],
  style,
}: NativeNavigationBarProps) {
  return (
    <View style={[styles.navigationBar, style]}>
      {sections.map((section) => (
        <NativeSectionBar
          icon={section.icon}
          key={section.id}
          label={section.label}
          state={section.id === activeSection ? 'selected' : 'default'}
          style={styles.navigationSection}
        />
      ))}
    </View>
  );
}

export type NativeNavigationalListProps = NativeBaseProps & {
  items?: Array<{ id: string; label: string; meta?: string }>;
};

export function NativeNavigationalList({
  items = [
    { id: 'item-1', label: 'List item 1' },
    { id: 'item-2', label: 'List item 2' },
  ],
  style,
}: NativeNavigationalListProps) {
  return (
    <View style={[styles.stack, style]}>
      {items.map((item) => (
        <NativeNavigationalListItem key={item.id} label={item.label} meta={item.meta} />
      ))}
    </View>
  );
}

export type NativeNavigationalListItemProps = NativePressProps & {
  label?: string;
  leading?: NavigationalListItemLeading;
  meta?: string;
  state?: NavigationalListItemState;
};

export function NativeNavigationalListItem({
  label = 'List item',
  leading = 'none',
  meta,
  onPress,
  state = 'default',
  style,
}: NativeNavigationalListItemProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={[styles.listItem, state === 'pressed' ? styles.selectedSurface : null, style]}>
      {leading !== 'none' ? <NativeIconContainer icon="arrowRight" size={32} /> : null}
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{label}</Text>
        {meta ? <Text style={styles.rowMeta}>{meta}</Text> : null}
      </View>
      <NativeIcon color={color.grey30} name="arrowRight" />
    </Pressable>
  );
}

export type NativeNotificationBadgeProps = NativeBaseProps & {
  label?: string;
  size?: NotificationBadgeSize;
};

export function NativeNotificationBadge({ label = '1', size = 'singleDigit', style }: NativeNotificationBadgeProps) {
  const dimension = size === 'small' ? 8 : 20;

  return (
    <View accessibilityLabel={`${label} notifications`} style={[styles.notificationBadge, { height: dimension, minWidth: dimension }, style]}>
      {size !== 'small' ? <Text style={styles.notificationBadgeText}>{label}</Text> : null}
    </View>
  );
}

export type NativeNotificationIconProps = NativeBaseProps & {
  label?: string;
  type?: NotificationIconType;
};

export function NativeNotificationIcon({ label, style, type = 'requestedLoan' }: NativeNotificationIconProps) {
  const icon: IconName = type === 'weeklyPayment' ? 'bell' : type === 'centerMeeting' ? 'person' : 'document';

  return (
    <View accessibilityLabel={label ?? titleize(type)} style={[styles.notificationIcon, style]}>
      <NativeIcon color={color.primary90} name={icon} size={26} />
    </View>
  );
}

export type NativeOTPInputBoxProps = NativeBaseProps & {
  state?: 'enabled' | 'active' | 'filled' | 'filledError' | 'activeError';
  value?: string;
};

export function NativeOTPInputBox({ state = 'enabled', style, value = '' }: NativeOTPInputBoxProps) {
  const hasError = state === 'filledError' || state === 'activeError';
  const isActive = state === 'active' || state === 'activeError';

  return (
    <View style={[styles.otpBox, isActive ? styles.selectedSurface : null, hasError ? styles.errorBorder : null, style]}>
      <Text style={styles.otpText}>{value}</Text>
    </View>
  );
}

export type NativeOTPInputProps = NativeBaseProps & {
  length?: number;
  value?: string;
};

export function NativeOTPInput({ length = 4, style, value = '' }: NativeOTPInputProps) {
  return (
    <View style={[styles.otpRow, style]}>
      {Array.from({ length }, (_, index) => (
        <NativeOTPInputBox key={index} state={value[index] ? 'filled' : index === value.length ? 'active' : 'enabled'} value={value[index] ?? ''} />
      ))}
    </View>
  );
}

export type NativeOptionSelectionBottomSheetProps = NativeBaseProps & {
  onOptionSelect?: (id: string) => void;
  options?: OptionSelectionOption[];
  subtitleText?: string;
  titleText?: string;
};

export function NativeOptionSelectionBottomSheet({
  onOptionSelect,
  options = [{ id: 'option-1', label: 'Option 1' }],
  style,
  subtitleText = 'Select one option',
  titleText = 'Options',
}: NativeOptionSelectionBottomSheetProps) {
  return (
    <View style={[styles.bottomSheet, style]}>
      <Text style={styles.surfaceTitle}>{titleText}</Text>
      <Text style={styles.surfaceSubtitle}>{subtitleText}</Text>
      <View style={styles.stack}>
        {options.map((option) => (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ disabled: option.disabled }}
            disabled={option.disabled}
            key={option.id}
            onPress={() => onOptionSelect?.(option.id)}
            style={[styles.optionRow, option.disabled ? styles.disabledSurface : null]}
          >
            <Text style={styles.rowTitle}>{option.label}</Text>
            <NativeIcon name="arrowRight" />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export type NativePastLoansRowsProps = NativeBaseProps & {
  amount?: string;
  date?: string;
  status?: string;
  type?: PastLoansRowsType;
};

export function NativePastLoansRows({ amount = '$125.00', date = 'May 20', status = 'Closed', style, type = 'content' }: NativePastLoansRowsProps) {
  return <NativeDataRow cells={type === 'header' ? ['DATE', 'AMOUNT', 'STATUS'] : [date, amount, status]} header={type === 'header'} style={style} />;
}

export type NativePaymentStateRowsTableHeaderProps = NativeBaseProps & {
  columns?: string[];
};

export function NativePaymentStateRowsTableHeader({
  columns = ['PAYMENT', 'DATE', 'AMOUNT', 'STATUS'],
  style,
}: NativePaymentStateRowsTableHeaderProps) {
  return <NativeDataRow cells={columns} header style={style} />;
}

export type NativePaymentStatusRowProps = NativeBaseProps & {
  amount?: string;
  date?: string;
  label?: string;
  state?: PaymentStatusRowState;
};

export function NativePaymentStatusRow({
  amount = '$125.00',
  date = 'May 20',
  label = 'Payment',
  state = 'open',
  style,
}: NativePaymentStatusRowProps) {
  return <NativeDataRow cells={[label, date, amount, state.toUpperCase()]} style={style} />;
}

export type NativePendingBalanceRowsProps = NativeBaseProps & {
  amount?: string;
  date?: string;
  label?: string;
  type?: PendingBalanceRowsType;
};

export function NativePendingBalanceRows({
  amount = '$125.00',
  date = 'May 20',
  label,
  style,
  type = 'paymentContent',
}: NativePendingBalanceRowsProps) {
  return (
    <NativeDataRow
      cells={type === 'header' ? ['BALANCE', 'DUE DATE', 'AMOUNT'] : [label ?? titleize(type), date, amount]}
      header={type === 'header'}
      style={style}
    />
  );
}

export type NativePillButtonProps = NativePressProps & {
  label?: string;
  state?: 'enabled' | 'selected' | 'pressed' | 'disabled';
};

export function NativePillButton({ label = 'Pill', onPress, state = 'enabled', style }: NativePillButtonProps) {
  const isDisabled = state === 'disabled';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, selected: state === 'selected' }}
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.pill, state === 'selected' ? styles.selectedSurface : null, isDisabled ? styles.disabledSurface : null, style]}
    >
      <Text style={styles.pillText}>{label}</Text>
    </Pressable>
  );
}

export type NativeSavingsGoalProps = NativeBaseProps & {
  label?: string;
  type?: SavingsGoalType;
};

export function NativeSavingsGoal({ label, style, type = 'inProgress' }: NativeSavingsGoalProps) {
  return (
    <View accessibilityLabel={label ?? titleize(type)} style={[styles.illustrationBadge, type === 'completed' ? styles.successSurface : null, style]}>
      <NativeIcon color={type === 'completed' ? color.green90 : color.savingsGold} name={type === 'completed' ? 'check' : 'settings'} size={32} />
    </View>
  );
}

export type NativeSavingsProgramLogoProps = NativeBaseProps & {
  label?: string;
  type?: SavingsProgramLogoType;
};

export function NativeSavingsProgramLogo({ label = 'Savings Program', style, type = 'small' }: NativeSavingsProgramLogoProps) {
  return (
    <View accessibilityLabel={label} style={[styles.savingsLogo, type === 'medium' ? styles.savingsLogoMedium : null, style]}>
      <Text style={styles.logoText}>S</Text>
    </View>
  );
}

export type NativeSectionBarProps = NativePressProps & {
  badgeLabel?: string;
  icon?: SectionBarIcon;
  interaction?: SectionBarInteraction;
  label?: string;
  showBadge?: boolean;
  state?: SectionBarState;
};

const sectionIcons: Record<SectionBarIcon, IconName> = {
  approvals: 'check',
  document: 'document',
  loan: 'document',
  newLoan: 'plus',
  payments: 'bell',
  resources: 'document',
};

export function NativeSectionBar({
  icon = 'document',
  interaction = 'default',
  label = 'Section',
  onPress,
  showBadge = false,
  state = 'default',
  style,
}: NativeSectionBarProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: state === 'selected' }}
      onPress={onPress}
      style={[styles.sectionBar, state === 'selected' || interaction === 'pressed' ? styles.selectedSurface : null, style]}
    >
      <View>
        <NativeIcon color={state === 'selected' ? color.primary90 : color.grey60} name={sectionIcons[icon]} size={24} />
        {showBadge ? <NativeNotificationBadge size="small" style={styles.sectionBadge} /> : null}
      </View>
      <Text style={styles.sectionBarText}>{label}</Text>
    </Pressable>
  );
}

export type NativeSegmentedSpinnerProps = NativeBaseProps & {
  rotation?: CircularSpinnerRotation | SegmentedSpinnerRotation;
};

export type SegmentedSpinnerRotation = '1' | '2' | '3' | '4';

export function NativeSegmentedSpinner({ rotation = '1', style }: NativeSegmentedSpinnerProps) {
  return <NativeCircularSpinner rotation={rotation} size="small" style={style} />;
}

export type NativeSideBarItemProps = NativePressProps & {
  badgeText?: string;
  icon?: IconName;
  label?: string;
  pressedStyle?: SideBarItemPressedStyle;
  showBadge?: boolean;
  state?: SideBarItemState;
  trailingIcon?: IconName;
};

export function NativeSideBarItem({
  badgeText = 'NEW',
  icon = 'person',
  label = 'Menu item',
  onPress,
  pressedStyle = 'standard',
  showBadge = true,
  state = 'default',
  style,
  trailingIcon,
}: NativeSideBarItemProps) {
  const emphasized = state === 'pressed' && pressedStyle === 'emphasis';

  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={[styles.sidebarItem, state === 'pressed' ? styles.selectedSurface : null, emphasized ? styles.sidebarItemEmphasis : null, style]}>
      <NativeIcon color={emphasized ? color.grey00 : color.primary90} name={icon} />
      <Text style={[styles.rowTitle, emphasized ? styles.inverseText : null]}>{label}</Text>
      {showBadge ? <NativeStatusBadge label={badgeText} style={styles.sidebarBadge} /> : null}
      {trailingIcon ? <NativeIcon color={emphasized ? color.grey00 : color.grey60} name={trailingIcon} /> : null}
    </Pressable>
  );
}

export type NativeSideBarProps = NativeBaseProps & {
  items?: Array<NativeSideBarItemProps & { id: string }>;
  title?: string;
};

export function NativeSideBar({
  items = [
    { id: 'profile', label: 'Profile', icon: 'person' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ],
  style,
  title = 'Menu',
}: NativeSideBarProps) {
  return (
    <View style={[styles.sidebar, style]}>
      <Text style={styles.appHeaderTitle}>{title}</Text>
      <View style={styles.stack}>
        {items.map((item) => (
          <NativeSideBarItem key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
}

export type NativeStandardBottomSheetProps = NativeBaseProps & {
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  title?: string;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
};

export function NativeStandardBottomSheet({
  description = 'Use this area for a concise explanation of the current task.',
  onPrimaryPress,
  onSecondaryPress,
  primaryLabel = 'Continue',
  secondaryLabel = 'Cancel',
  style,
  title = 'Bottom sheet title',
}: NativeStandardBottomSheetProps) {
  return (
    <View accessibilityRole="text" style={[styles.bottomSheet, style]}>
      <View style={styles.sheetHandle} />
      <Text style={styles.surfaceTitle}>{title}</Text>
      <Text style={styles.surfaceSubtitle}>{description}</Text>
      <NativeButton label={primaryLabel} onPress={onPrimaryPress} />
      <NativeButton label={secondaryLabel} onPress={onSecondaryPress} variant="outlined" />
    </View>
  );
}

export type NativeStandardModalProps = NativeStandardBottomSheetProps & {
  type?: StandardModalType;
};

export function NativeStandardModal({
  description = 'Use this modal to focus attention on an important decision.',
  onPrimaryPress,
  onSecondaryPress,
  primaryLabel = 'Continue',
  secondaryLabel = 'Cancel',
  style,
  title = 'Modal title',
  type = 'verticalActions',
}: NativeStandardModalProps) {
  return (
    <View accessibilityRole="text" style={[styles.modal, type === 'mediaTop' ? styles.modalMedia : null, style]}>
      <Text style={styles.surfaceTitle}>{title}</Text>
      <Text style={styles.surfaceSubtitle}>{description}</Text>
      <View style={type === 'horizontalActions' ? styles.horizontalActions : styles.stack}>
        <NativeButton label={secondaryLabel} onPress={onSecondaryPress} variant="outlined" />
        <NativeButton label={primaryLabel} onPress={onPrimaryPress} />
      </View>
    </View>
  );
}

export type NativeStatusIndicatorProps = NativeBaseProps & {
  label?: string;
  status?: StatusIndicatorStatus;
};

const statusIndicatorColors: Record<StatusIndicatorStatus, string> = {
  attention: color.orange80,
  completed: color.green80,
  neutral: color.grey30,
};

export function NativeStatusIndicator({ label, status = 'completed', style }: NativeStatusIndicatorProps) {
  return (
    <View style={[styles.statusIndicator, style]}>
      <View style={[styles.statusDot, { backgroundColor: statusIndicatorColors[status] }]} />
      {label ? <Text style={styles.rowMeta}>{label}</Text> : null}
    </View>
  );
}

export type NativeSubDetailsGroupProps = NativeBaseProps & {
  rows?: number;
  title?: string;
};

export function NativeSubDetailsGroup({ rows = 1, style, title = 'Details' }: NativeSubDetailsGroupProps) {
  return (
    <NativeSurface label={title} style={style}>
      {Array.from({ length: rows }, (_, index) => (
        <NativeDataRow cells={[`Label ${index + 1}`, `Value ${index + 1}`]} key={index} />
      ))}
    </NativeSurface>
  );
}

export type NativeSwitchProps = NativePressProps & {
  showIcon?: boolean;
  state?: SwitchState;
};

export function NativeSwitch({ onPress, showIcon = true, state = 'off', style }: NativeSwitchProps) {
  const isOn = state === 'on' || state === 'disabledOn';
  const isDisabled = state === 'disabledOff' || state === 'disabledOn';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ checked: isOn, disabled: isDisabled }}
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.switchTrack, isOn ? styles.switchOn : null, isDisabled ? styles.disabledSurface : null, style]}
    >
      <View style={[styles.switchThumb, isOn ? styles.switchThumbOn : null]}>
        {showIcon && isOn ? <NativeIcon color={color.primary90} name="check" size={12} /> : null}
      </View>
    </Pressable>
  );
}

export type NativeTooltipProps = NativeBaseProps & {
  arrowAlignment?: TooltipArrowAlignment;
  arrowPlacement?: TooltipArrowPlacement;
  text?: string;
};

export function NativeTooltip({ style, text = 'Tooltip Text' }: NativeTooltipProps) {
  return (
    <View accessibilityRole="text" style={[styles.tooltip, style]}>
      <Text style={styles.tooltipText}>{text}</Text>
    </View>
  );
}

export type NativeUserAvatarProps = NativeBaseProps & {
  avatar?: UserAvatarVariant;
  imageSrc?: string;
  label?: string;
  name?: string;
  size?: UserAvatarSize;
  type?: UserAvatarType;
};

const avatarSizes: Record<UserAvatarSize, number> = {
  big: 104,
  medium: 64,
  small: 40,
  xSmall: 32,
};

export function NativeUserAvatar({
  avatar = 'none',
  label,
  name = 'User',
  size = 'medium',
  style,
  type = 'initials',
}: NativeUserAvatarProps) {
  const dimension = avatarSizes[size];
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <View accessibilityLabel={label ?? name} style={[styles.userAvatar, { height: dimension, width: dimension }, style]}>
      <Text style={[styles.avatarText, { fontSize: Math.max(12, dimension / 3) }]}>{type === 'avatar' && avatar !== 'none' ? avatar : initials}</Text>
    </View>
  );
}

export type NativeValueAdjusterButtonProps = NativePressProps & {
  adjustment?: 'decrease' | 'increase';
  state?: 'enabled' | 'pressed' | 'disabled';
};

export function NativeValueAdjusterButton({
  adjustment = 'increase',
  onPress,
  state = 'enabled',
  style,
}: NativeValueAdjusterButtonProps) {
  return (
    <NativeIconButton
      disabled={state === 'disabled'}
      icon={adjustment === 'increase' ? 'plus' : 'minus'}
      onPress={onPress}
      state={state === 'pressed' ? 'pressed' : state === 'disabled' ? 'disabled' : 'enabled'}
      style={style}
      variant="outlined"
    />
  );
}

export type NativeWebHeaderProps = NativeBaseProps & {
  size?: WebHeaderSize;
  state?: WebHeaderState;
  title?: string;
};

export function NativeWebHeader({
  size = 'tabletDesktop',
  state = 'default',
  style,
  title = 'Grameen America',
}: NativeWebHeaderProps) {
  return (
    <View style={[styles.webHeader, state === 'loading' ? styles.disabledSurface : null, style]}>
      <NativeLogo type="full" />
      {size !== 'mobile' ? <Text style={styles.rowTitle}>{title}</Text> : null}
      <NativeIcon name="menu" />
    </View>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    backgroundColor: color.grey00,
    borderColor: color.grey10,
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: nativeTokens.spacing.sm,
    paddingHorizontal: nativeTokens.spacing['3xl'],
    paddingVertical: nativeTokens.spacing.xxl,
  },
  amountSelector: {
    alignItems: 'center',
    backgroundColor: color.grey00,
    borderColor: color.grey20,
    borderRadius: nativeTokens.radius.lg,
    borderWidth: 1,
    minHeight: 72,
    paddingHorizontal: nativeTokens.spacing['3xl'],
    paddingVertical: nativeTokens.spacing.lg,
  },
  amountText: {
    ...nativeTokens.typography.displaySmallBold,
    color: color.primary90,
  },
  appHeader: {
    backgroundColor: color.headerDark,
    borderRadius: nativeTokens.radius.lg,
    paddingHorizontal: nativeTokens.spacing['3xl'],
    paddingVertical: nativeTokens.spacing['3xl'],
  },
  appHeaderEyebrow: {
    ...nativeTokens.typography.bodySmallSemiBold,
    color: color.transparentWhite78,
    textTransform: 'uppercase',
  },
  appHeaderSmall: {
    paddingVertical: nativeTokens.spacing.xxl,
  },
  appHeaderSubtitle: {
    ...nativeTokens.typography.bodyRegular,
    color: color.transparentWhite78,
  },
  appHeaderTitle: {
    ...nativeTokens.typography.headingBold,
    color: color.grey00,
  },
  avatarText: {
    ...nativeTokens.typography.bodySemiBold,
    color: color.primary90,
    textAlign: 'center',
  },
  bottomSheet: {
    backgroundColor: color.grey00,
    borderColor: color.grey10,
    borderRadius: 24,
    borderWidth: 1,
    gap: nativeTokens.spacing.xxl,
    paddingHorizontal: nativeTokens.spacing['3xl'],
    paddingVertical: nativeTokens.spacing['3xl'],
  },
  caption: {
    ...nativeTokens.typography.bodySmallRegular,
    color: color.grey40,
  },
  colorIndicator: {
    borderRadius: nativeTokens.radius.circle,
  },
  compactRow: {
    minHeight: 36,
  },
  dataCell: {
    ...nativeTokens.typography.bodyRegular,
    color: color.grey60,
    flex: 1,
  },
  dataHeaderCell: {
    ...nativeTokens.typography.bodySmallSemiBold,
    color: color.grey40,
  },
  dataHeaderRow: {
    backgroundColor: color.grey05,
  },
  dataRow: {
    alignItems: 'center',
    backgroundColor: color.grey00,
    borderColor: color.grey10,
    borderRadius: nativeTokens.radius.sm,
    borderWidth: 1,
    flexDirection: 'row',
    gap: nativeTokens.spacing.sm,
    minHeight: 44,
    paddingHorizontal: nativeTokens.spacing.lg,
    paddingVertical: nativeTokens.spacing.sm,
  },
  disabledSurface: {
    opacity: 0.48,
  },
  errorBorder: {
    borderColor: color.red80,
  },
  errorSurface: {
    backgroundColor: color.cardRed,
  },
  guidanceAvatar: {
    alignItems: 'center',
    backgroundColor: color.guidanceSkin,
    borderRadius: nativeTokens.radius.circle,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  horizontalActions: {
    flexDirection: 'row',
    gap: nativeTokens.spacing.sm,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: color.grey00,
    borderColor: color.grey20,
    borderRadius: nativeTokens.radius.circle,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  iconContainer: {
    alignItems: 'center',
    borderRadius: nativeTokens.radius.lg,
    justifyContent: 'center',
  },
  illustrationBadge: {
    alignItems: 'center',
    backgroundColor: color.yellow05,
    borderRadius: nativeTokens.radius.circle,
    height: 96,
    justifyContent: 'center',
    width: 96,
  },
  inlineButton: {
    alignItems: 'center',
    borderRadius: nativeTokens.radius.pill,
    flexDirection: 'row',
    gap: nativeTokens.spacing.sm,
    justifyContent: 'center',
    paddingHorizontal: nativeTokens.spacing.lg,
    paddingVertical: nativeTokens.spacing.sm,
  },
  inlineButtonLarge: {
    paddingHorizontal: nativeTokens.spacing['3xl'],
    paddingVertical: nativeTokens.spacing.xxl,
  },
  inlineButtonText: {
    ...nativeTokens.typography.bodySemiBold,
    color: color.primary90,
  },
  inverseText: {
    color: color.grey00,
  },
  languageImage: {
    alignItems: 'center',
    backgroundColor: color.primary00,
    borderRadius: nativeTokens.radius.circle,
    justifyContent: 'center',
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: color.grey00,
    borderColor: color.grey10,
    borderRadius: nativeTokens.radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: nativeTokens.spacing.lg,
    minHeight: 56,
    paddingHorizontal: nativeTokens.spacing.lg,
    paddingVertical: nativeTokens.spacing.sm,
  },
  logo: {
    alignItems: 'center',
    backgroundColor: color.primary90,
    borderRadius: nativeTokens.radius.circle,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  logoFull: {
    borderRadius: nativeTokens.radius.pill,
    paddingHorizontal: nativeTokens.spacing.lg,
    width: 150,
  },
  logoText: {
    ...nativeTokens.typography.bodySemiBold,
    color: color.grey00,
  },
  modal: {
    backgroundColor: color.grey00,
    borderColor: color.grey10,
    borderRadius: nativeTokens.radius.lg,
    borderWidth: 1,
    gap: nativeTokens.spacing.xxl,
    paddingHorizontal: nativeTokens.spacing['3xl'],
    paddingVertical: nativeTokens.spacing['3xl'],
  },
  modalMedia: {
    paddingVertical: nativeTokens.spacing['4xl'],
  },
  navigationBar: {
    backgroundColor: color.grey00,
    borderColor: color.grey10,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  navigationSection: {
    flex: 1,
  },
  notificationBadge: {
    alignItems: 'center',
    backgroundColor: color.red80,
    borderRadius: nativeTokens.radius.circle,
    justifyContent: 'center',
    paddingHorizontal: nativeTokens.spacing.xxs,
  },
  notificationBadgeText: {
    ...nativeTokens.typography.captionRegular,
    color: color.grey00,
    fontWeight: 700,
  },
  notificationIcon: {
    alignItems: 'center',
    backgroundColor: color.primary00,
    borderRadius: nativeTokens.radius.circle,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  optionRow: {
    alignItems: 'center',
    backgroundColor: color.optionSheetSurface,
    borderColor: color.grey10,
    borderRadius: nativeTokens.radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 56,
    paddingHorizontal: nativeTokens.spacing.xxl,
  },
  otpBox: {
    alignItems: 'center',
    backgroundColor: color.grey00,
    borderColor: color.grey20,
    borderRadius: nativeTokens.radius.md,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  otpRow: {
    flexDirection: 'row',
    gap: nativeTokens.spacing.sm,
  },
  otpText: {
    ...nativeTokens.typography.headingBold,
    color: color.grey80,
  },
  pill: {
    alignItems: 'center',
    borderColor: color.grey20,
    borderRadius: nativeTokens.radius.pill,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 32,
    paddingHorizontal: nativeTokens.spacing.xxl,
    paddingVertical: nativeTokens.spacing.sm,
  },
  pillText: {
    ...nativeTokens.typography.bodySmallSemiBold,
    color: color.primary90,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: nativeTokens.spacing.sm,
  },
  rowLeading: {
    flexShrink: 0,
  },
  rowMeta: {
    ...nativeTokens.typography.bodySmallRegular,
    color: color.grey40,
  },
  rowText: {
    flex: 1,
    gap: nativeTokens.spacing.xxs,
  },
  rowTitle: {
    ...nativeTokens.typography.bodySemiBold,
    color: color.grey60,
  },
  rowTrailing: {
    flexShrink: 0,
  },
  savingsLogo: {
    alignItems: 'center',
    backgroundColor: color.savingsGold,
    borderRadius: nativeTokens.radius.circle,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  savingsLogoMedium: {
    height: 56,
    width: 56,
  },
  sectionBadge: {
    position: 'absolute',
    right: -3,
    top: -3,
  },
  sectionBar: {
    alignItems: 'center',
    gap: nativeTokens.spacing.xxs,
    justifyContent: 'center',
    minHeight: 66,
    paddingHorizontal: nativeTokens.spacing.xs,
    paddingVertical: nativeTokens.spacing.xxs,
  },
  sectionBarText: {
    ...nativeTokens.typography.bodySmallRegular,
    color: color.grey60,
    textAlign: 'center',
  },
  sectionTitle: {
    ...nativeTokens.typography.subHeadingSemiBold,
    color: color.grey80,
  },
  selectedSurface: {
    backgroundColor: color.primary00,
    borderColor: color.primary80,
  },
  selectionMark: {
    alignItems: 'center',
    borderWidth: 2,
    height: 20,
    justifyContent: 'center',
    width: 20,
  },
  selectionRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: nativeTokens.spacing.sm,
    minHeight: 32,
  },
  selectionText: {
    ...nativeTokens.typography.captionRegular,
    color: color.grey00,
    fontWeight: 700,
    lineHeight: 12,
  },
  sheetHandle: {
    alignSelf: 'center',
    backgroundColor: color.grey20,
    borderRadius: nativeTokens.radius.circle,
    height: 4,
    width: 48,
  },
  sidebar: {
    backgroundColor: color.sidebarSurface,
    gap: nativeTokens.spacing.xxl,
    paddingHorizontal: nativeTokens.spacing['3xl'],
    paddingVertical: nativeTokens.spacing['3xl'],
  },
  sidebarBadge: {
    minHeight: 18,
  },
  sidebarItem: {
    alignItems: 'center',
    borderRadius: nativeTokens.radius.sm,
    flexDirection: 'row',
    gap: nativeTokens.spacing.sm,
    minHeight: 36,
    paddingHorizontal: nativeTokens.spacing.sm,
    paddingVertical: nativeTokens.spacing.xxs,
  },
  sidebarItemEmphasis: {
    backgroundColor: color.primary90,
  },
  smallText: {
    fontSize: nativeTokens.typography.bodySmallRegular.fontSize,
  },
  spinner: {
    alignItems: 'center',
    borderColor: color.primary90,
    borderRadius: nativeTokens.radius.circle,
    borderWidth: 3,
    justifyContent: 'center',
  },
  spinnerText: {
    ...nativeTokens.typography.captionRegular,
    color: color.primary90,
  },
  stack: {
    gap: nativeTokens.spacing.sm,
  },
  statusDot: {
    borderRadius: nativeTokens.radius.circle,
    height: 8,
    width: 8,
  },
  statusIndicator: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: nativeTokens.spacing.xxs,
  },
  successSurface: {
    backgroundColor: color.green10,
  },
  surface: {
    backgroundColor: color.grey00,
    borderColor: color.grey10,
    borderRadius: nativeTokens.radius.lg,
    borderWidth: 1,
    gap: nativeTokens.spacing.sm,
    paddingHorizontal: nativeTokens.spacing.xxl,
    paddingVertical: nativeTokens.spacing.xxl,
  },
  surfaceContent: {
    marginTop: nativeTokens.spacing.sm,
  },
  surfaceSubtitle: {
    ...nativeTokens.typography.bodyRegular,
    color: color.grey50,
  },
  surfaceTitle: {
    ...nativeTokens.typography.subHeadingSemiBold,
    color: color.grey80,
  },
  switchOn: {
    backgroundColor: color.primary90,
  },
  switchThumb: {
    alignItems: 'center',
    backgroundColor: color.grey00,
    borderRadius: nativeTokens.radius.circle,
    height: 20,
    justifyContent: 'center',
    width: 20,
  },
  switchThumbOn: {
    marginLeft: 22,
  },
  switchTrack: {
    backgroundColor: color.grey30,
    borderRadius: nativeTokens.radius.pill,
    height: 24,
    justifyContent: 'center',
    paddingHorizontal: 2,
    width: 46,
  },
  tooltip: {
    backgroundColor: color.grey80,
    borderRadius: nativeTokens.radius.sm,
    paddingHorizontal: nativeTokens.spacing.lg,
    paddingVertical: nativeTokens.spacing.sm,
  },
  tooltipText: {
    ...nativeTokens.typography.bodySmallRegular,
    color: color.grey00,
  },
  uploadSlot: {
    alignItems: 'center',
    backgroundColor: color.grey00,
    borderColor: color.grey20,
    borderRadius: nativeTokens.radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: nativeTokens.spacing.lg,
    minHeight: 72,
    paddingHorizontal: nativeTokens.spacing.xxl,
    paddingVertical: nativeTokens.spacing.xxl,
  },
  userAvatar: {
    alignItems: 'center',
    backgroundColor: color.primary00,
    borderRadius: nativeTokens.radius.circle,
    justifyContent: 'center',
  },
  webHeader: {
    alignItems: 'center',
    backgroundColor: color.grey00,
    borderColor: color.webHeaderBorder,
    borderRadius: nativeTokens.radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: nativeTokens.spacing.xxl,
    justifyContent: 'space-between',
    minHeight: 64,
    paddingHorizontal: nativeTokens.spacing['3xl'],
  },
});
