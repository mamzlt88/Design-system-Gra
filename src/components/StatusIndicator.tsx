import type { CSSProperties, HTMLAttributes } from 'react';

export type StatusIndicatorStatus = 'completed' | 'neutral' | 'attention';

export type StatusIndicatorProps = {
  status?: StatusIndicatorStatus;
  label?: string;
} & HTMLAttributes<HTMLSpanElement>;

const statusColors: Record<StatusIndicatorStatus, string> = {
  completed: '#0C6466',
  neutral: '#A4A4A4',
  attention: '#AB241F',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  borderRadius: 999,
  color: '#FFFFFF',
  display: 'inline-flex',
  flexShrink: 0,
  height: 27,
  justifyContent: 'center',
  lineHeight: 0,
  width: 27,
};

function readableStatus(status: StatusIndicatorStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function StatusIndicator({
  status = 'completed',
  label,
  style,
  ...spanProps
}: StatusIndicatorProps) {
  const accessibleLabel = label ?? `${readableStatus(status)} status`;

  return (
    <span
      role="img"
      aria-label={accessibleLabel}
      data-figma-node-id="7873:607"
      style={{
        ...baseStyle,
        backgroundColor: statusColors[status],
        ...style,
      }}
      {...spanProps}
    >
      <svg aria-hidden="true" focusable="false" height="19" viewBox="0 0 24 24" width="19">
        <path
          d="M11 17h2v-2h-2v2Zm0-4h2V7h-2v6Zm1 9a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
