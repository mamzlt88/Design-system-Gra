import type { CSSProperties, HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type StatusBadgeStatus =
  | 'informative'
  | 'success'
  | 'warning'
  | 'attention'
  | 'critical'
  | 'progress'
  | 'loading';

export type StatusBadgeStyle = 'default' | 'emphasized';

export type StatusBadgeProps = {
  status?: StatusBadgeStatus;
  styleVariant?: StatusBadgeStyle;
  label?: string;
} & HTMLAttributes<HTMLSpanElement>;

const statusColors: Record<Exclude<StatusBadgeStatus, 'loading'>, { background: string; text: string }> = {
  informative: {
    background: tokens.color.primary00,
    text: tokens.color.primary90,
  },
  success: {
    background: tokens.color.green10,
    text: tokens.color.green90,
  },
  warning: {
    background: tokens.color.yellow05,
    text: tokens.color.yellow60,
  },
  attention: {
    background: tokens.color.orange40,
    text: tokens.color.orange90,
  },
  critical: {
    background: tokens.color.red50,
    text: tokens.color.red80,
  },
  progress: {
    background: tokens.color.secondary60,
    text: tokens.color.secondary90,
  },
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  borderRadius: tokens.radius.xl,
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  fontSize: tokens.typography.bodySmallRegular.fontSize,
  justifyContent: 'center',
  lineHeight: tokens.typography.bodySmallRegular.lineHeight,
  minHeight: 23,
  padding: '4px 8px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
};

function readableStatus(status: StatusBadgeStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function StatusBadge({
  status = 'informative',
  styleVariant = 'default',
  label = 'STATUS',
  style,
  ...spanProps
}: StatusBadgeProps) {
  if (status === 'loading') {
    return (
      <span
        role="status"
        aria-label="Loading status"
        data-figma-node-id="7483:6154"
        style={{
          ...baseStyle,
          background: tokens.gradient.shimmer,
          minWidth: 77,
          ...style,
        }}
        {...spanProps}
      />
    );
  }

  const colors = statusColors[status];

  return (
    <span
      aria-label={`${readableStatus(status)} status: ${label}`}
      data-figma-node-id="7483:6154"
      style={{
        ...baseStyle,
        backgroundColor: colors.background,
        color: colors.text,
        fontWeight: styleVariant === 'emphasized' ? 600 : 400,
        ...style,
      }}
      {...spanProps}
    >
      {label}
    </span>
  );
}
