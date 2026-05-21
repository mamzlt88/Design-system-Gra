import type { CSSProperties, HTMLAttributes } from 'react';

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
    background: '#EDF6F6',
    text: '#0C6466',
  },
  success: {
    background: '#CDFCE5',
    text: '#045728',
  },
  warning: {
    background: '#FFF6DC',
    text: '#735425',
  },
  attention: {
    background: '#FFE6DC',
    text: '#BF4315',
  },
  critical: {
    background: '#FDE0E0',
    text: '#AB241F',
  },
  progress: {
    background: '#D0DEEA',
    text: '#244555',
  },
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  borderRadius: 16,
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'Open Sans, Arial, sans-serif',
  fontSize: 12,
  justifyContent: 'center',
  lineHeight: '15px',
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
          background: 'linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)',
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
