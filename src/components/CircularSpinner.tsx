import type { CSSProperties, HTMLAttributes } from 'react';

export type CircularSpinnerSize = 'small' | 'medium' | 'large';
export type CircularSpinnerRotation = '1' | '2' | '3' | '4';

export type CircularSpinnerProps = {
  size?: CircularSpinnerSize;
  rotation?: CircularSpinnerRotation;
  animated?: boolean;
  label?: string;
} & HTMLAttributes<HTMLSpanElement>;

const sizeMap: Record<CircularSpinnerSize, number> = {
  small: 24,
  medium: 28,
  large: 32,
};

const rotationMap: Record<CircularSpinnerRotation, number> = {
  '1': 0,
  '2': 90,
  '3': 180,
  '4': 270,
};

const trackColor = '#E6E6E6';
const indicatorColor = '#0A5253';

const baseStyle: CSSProperties = {
  alignItems: 'center',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: 0,
};

export function CircularSpinner({
  size = 'small',
  rotation = '1',
  animated = true,
  label = 'Loading',
  style,
  ...spanProps
}: CircularSpinnerProps) {
  const pixelSize = sizeMap[size];
  const strokeWidth = pixelSize * 0.2;
  const radius = (pixelSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const staticRotation = rotationMap[rotation];

  return (
    <span
      role="status"
      aria-label={label}
      data-figma-node-id="9476:242"
      data-gra-spinner="circular"
      style={{
        ...baseStyle,
        height: pixelSize,
        width: pixelSize,
        ...style,
      }}
      {...spanProps}
    >
      <style>
        {`@keyframes gra-circular-spinner-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  [data-gra-spinner="circular"] svg {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}`}
      </style>
      <svg
        aria-hidden="true"
        focusable="false"
        height={pixelSize}
        style={{
          animation: animated ? 'gra-circular-spinner-spin 0.8s linear infinite' : undefined,
          transform: `rotate(${staticRotation}deg)`,
          transformOrigin: 'center',
        }}
        viewBox={`0 0 ${pixelSize} ${pixelSize}`}
        width={pixelSize}
      >
        <circle
          cx={pixelSize / 2}
          cy={pixelSize / 2}
          fill="none"
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={pixelSize / 2}
          cy={pixelSize / 2}
          fill="none"
          r={radius}
          stroke={indicatorColor}
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          strokeLinecap="butt"
          strokeWidth={strokeWidth}
        />
      </svg>
    </span>
  );
}
