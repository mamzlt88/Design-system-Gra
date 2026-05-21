import type { CSSProperties, HTMLAttributes } from 'react';

export type NotificationBadgeSize = 'small' | 'singleDigit' | 'multipleDigits';

export type NotificationBadgeProps = {
  size?: NotificationBadgeSize;
  value?: number | string;
  label?: string;
} & HTMLAttributes<HTMLSpanElement>;

const red80 = '#AB241F';
const white = '#FFFFFF';

const baseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: red80,
  borderRadius: 100,
  color: white,
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'Open Sans, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  justifyContent: 'center',
  lineHeight: '15px',
};

const sizeStyles: Record<NotificationBadgeSize, CSSProperties> = {
  small: {
    height: 6,
    width: 6,
  },
  singleDigit: {
    height: 15,
    minWidth: 15,
    paddingInline: 4,
  },
  multipleDigits: {
    height: 15,
    minWidth: 22,
    paddingInline: 4,
  },
};

function badgeText(size: NotificationBadgeSize, value: number | string | undefined) {
  if (size === 'small') {
    return null;
  }
  if (value !== undefined && value !== null && String(value).length > 0) {
    return String(value);
  }
  return size === 'multipleDigits' ? '32' : '3';
}

export function NotificationBadge({
  size = 'small',
  value,
  label,
  style,
  ...spanProps
}: NotificationBadgeProps) {
  const text = badgeText(size, value);
  const accessibleLabel = label ?? (text ? `${text} notifications` : 'Unread notification');

  return (
    <span
      role="status"
      aria-label={accessibleLabel}
      data-figma-node-id="7509:2356"
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...style,
      }}
      {...spanProps}
    >
      {text}
    </span>
  );
}
