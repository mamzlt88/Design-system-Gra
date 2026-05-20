import type { CSSProperties, HTMLAttributes } from 'react';

export type NotificationIconType = 'requestedLoan' | 'loanRenewal' | 'loanApprovalPending' | 'weeklyPayment' | 'centerMeeting';

export type NotificationIconProps = {
  type?: NotificationIconType;
  label?: string;
  size?: number;
} & HTMLAttributes<HTMLDivElement>;

const colors = {
  grey30: '#A4A4A4',
  grey60: '#313131',
  grey05: '#F5F5F5',
  primary90: '#0C6466',
};

const typeLabels: Record<NotificationIconType, string> = {
  requestedLoan: 'Requested loan',
  loanRenewal: 'Loan renewal',
  loanApprovalPending: 'Loan approval pending',
  weeklyPayment: 'Weekly payment',
  centerMeeting: 'Center meeting',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: colors.grey30,
  borderRadius: 100,
  color: colors.grey60,
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  position: 'relative',
};

function DocumentGlyph() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="28" height="28">
      <path d="M7 3h7l4 4v14H7z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="M14 3v5h5" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 12h6M10 16h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function PaymentGlyph() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="30" height="30">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 6v12M15.5 8.5H11a2 2 0 0 0-.5 3.94l3 .62a2 2 0 0 1-.5 3.94H8.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function LocationGlyph() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"
        fill="currentColor"
      />
      <circle cx="12" cy="9" r="2.3" fill={colors.grey30} />
    </svg>
  );
}

function RequestedLoanBadge() {
  return (
    <span
      aria-hidden="true"
      style={{
        alignItems: 'center',
        backgroundColor: colors.grey05,
        borderRadius: 100,
        bottom: 9,
        color: colors.primary90,
        display: 'inline-flex',
        height: 18,
        justifyContent: 'center',
        position: 'absolute',
        right: 9,
        width: 18,
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path d="M5 12h12M13 8l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </svg>
    </span>
  );
}

function ApprovalPendingBadge() {
  return (
    <span
      aria-hidden="true"
      style={{
        backgroundColor: colors.primary90,
        border: `3px solid ${colors.grey05}`,
        borderRadius: 100,
        height: 14,
        position: 'absolute',
        right: 13,
        top: 10,
        width: 14,
      }}
    />
  );
}

export function NotificationIcon({
  type = 'requestedLoan',
  label,
  size = 56,
  style,
  ...divProps
}: NotificationIconProps) {
  const accessibleLabel = label ?? typeLabels[type];
  const isDocumentType = type === 'requestedLoan' || type === 'loanRenewal' || type === 'loanApprovalPending';

  return (
    <div
      role="img"
      aria-label={accessibleLabel}
      data-figma-node-id="2870:5575"
      style={{
        ...baseStyle,
        height: size,
        width: size,
        ...style,
      }}
      {...divProps}
    >
      {isDocumentType ? <DocumentGlyph /> : null}
      {type === 'weeklyPayment' ? <PaymentGlyph /> : null}
      {type === 'centerMeeting' ? <LocationGlyph /> : null}
      {type === 'requestedLoan' ? <RequestedLoanBadge /> : null}
      {type === 'loanApprovalPending' ? <ApprovalPendingBadge /> : null}
    </div>
  );
}
