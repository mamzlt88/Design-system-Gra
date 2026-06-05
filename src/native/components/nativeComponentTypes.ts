export type AppHeaderSize = 'large' | 'medium' | 'mediumRounded' | 'small';
export type AppHeaderType = 'standard' | 'informative' | 'navigational' | 'profile';

export type AttendanceReportRowsType = 'content' | 'header';

export type CheckboxListItem = {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  supportiveText?: string;
};

export type CheckboxButtonTone = 'default' | 'danger';
export type CheckboxRadioButtonType = 'radioText' | 'radio' | 'square' | 'squareRed';

export type CircularSpinnerRotation = '1' | '2' | '3' | '4';
export type CircularSpinnerSize = 'small' | 'medium' | 'large';

export type ColorIndicatorColor = 'red' | 'yellow' | 'green' | 'aquamarine' | 'blue' | 'brand';
export type GuidanceAvatarType = '1' | '2';

export type IconContainerColor = 'red' | 'yellow' | 'green' | 'brand' | 'blue' | 'purple' | 'pink';
export type IconContainerStyle = 'default' | 'emphasized';

export type IconName =
  | 'arrowLeft'
  | 'arrowRight'
  | 'bell'
  | 'chevronDown'
  | 'check'
  | 'document'
  | 'externalLink'
  | 'helpCircle'
  | 'info'
  | 'menu'
  | 'minus'
  | 'person'
  | 'plus'
  | 'globe'
  | 'search'
  | 'settings'
  | 'upload';

export type InformationButtonState = 'enabled' | 'pressed' | 'tooltipOpen';
export type InformationButtonTextSize = 'medium' | 'small';

export type InformationalCardBgColor = 'blue' | 'yellow';

export type LanguageImageLanguage = 'english' | 'spanish';
export type LanguageSelectorState = 'default' | 'pressed' | 'selected';

export type LastPaymentsRowsType = 'title' | 'header' | 'content';
export type LoanApprovalInProgressType =
  | 'centerApprovalInProgress'
  | 'centerApprovalOnHold'
  | 'amountNeedsApproval'
  | 'resubmitDocuments';

export type LogoType = 'iconOnly' | 'full';

export type MambuWebviewTableSize = 'small' | 'medium';
export type MambuWebviewTableType = 'content' | 'header' | 'total';

export type NavigationalListItemLeading = 'iconContainer' | 'iconPlain' | 'none';
export type NavigationalListItemState = 'default' | 'pressed';

export type NotificationBadgeSize = 'small' | 'singleDigit' | 'multipleDigits';
export type NotificationIconType =
  | 'requestedLoan'
  | 'loanRenewal'
  | 'loanApprovalPending'
  | 'weeklyPayment'
  | 'centerMeeting';

export type OptionSelectionOption = {
  id: string;
  label: string;
  disabled?: boolean;
};

export type PastLoansRowsType = 'content' | 'header';
export type PaymentStatusRowState = 'open' | 'closed';
export type PendingBalanceRowsType = 'paymentContent' | 'header' | 'interestContent';

export type SavingsGoalType = 'inProgress' | 'completed';
export type SavingsProgramLogoType = 'small' | 'medium';

export type SectionBarIcon = 'loan' | 'payments' | 'newLoan' | 'approvals' | 'resources' | 'document';
export type SectionBarInteraction = 'default' | 'pressed';
export type SectionBarState = 'default' | 'selected';

export type SideBarItemPressedStyle = 'nA' | 'standard' | 'emphasis';
export type SideBarItemState = 'default' | 'pressed';

export type StandardModalType = 'verticalActions' | 'horizontalActions' | 'bullets' | 'illustration' | 'mediaTop';

export type StatusBadgeStatus =
  | 'informative'
  | 'success'
  | 'warning'
  | 'attention'
  | 'critical'
  | 'progress'
  | 'loading';
export type StatusBadgeStyle = 'default' | 'emphasized';

export type StatusIndicatorStatus = 'completed' | 'neutral' | 'attention';
export type SwitchState = 'off' | 'on' | 'disabledOn' | 'disabledOff';

export type TooltipArrowAlignment = 'left' | 'middle' | 'right';
export type TooltipArrowPlacement = 'top' | 'bottom';

export type UserAvatarSize = 'big' | 'medium' | 'small' | 'xSmall';
export type UserAvatarType = 'avatar' | 'initials';
export type UserAvatarVariant = '1' | '2' | '3' | '4' | '5' | '6' | 'none';

export type WebHeaderSize = 'mobile' | 'tabletDesktop';
export type WebHeaderState = 'default' | 'loading';
