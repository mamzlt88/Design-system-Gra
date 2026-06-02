import type { CSSProperties, HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type SegmentedSpinnerRotation = '1' | '2' | '3' | '4';

export type SegmentedSpinnerProps = {
  rotation?: SegmentedSpinnerRotation;
  label?: string;
} & HTMLAttributes<HTMLSpanElement>;

const opacityFrames: Record<SegmentedSpinnerRotation, number[]> = {
  '1': [1, 0.87, 0.75, 0.63, 0.51, 0.39, 0.27, 0.15],
  '2': [0.75, 0.63, 0.51, 0.39, 0.27, 0.15, 1, 0.87],
  '3': [0.51, 0.39, 0.27, 0.15, 1, 0.87, 0.75, 0.63],
  '4': [0.27, 0.15, 1, 0.87, 0.75, 0.63, 0.51, 0.39],
};

const segmentAngles = [0, 45, 90, 135, 180, 225, 270, 315];
const teal = tokens.color.primary90;
const size = 25;

const baseStyle: CSSProperties = {
  alignItems: 'center',
  display: 'inline-flex',
  flexShrink: 0,
  height: size,
  justifyContent: 'center',
  lineHeight: 0,
  width: size,
};

export function SegmentedSpinner({
  rotation = '1',
  label = 'Loading',
  style,
  ...spanProps
}: SegmentedSpinnerProps) {
  const opacities = opacityFrames[rotation];

  return (
    <span
      role="status"
      aria-label={label}
      data-figma-node-id="9761:597"
      style={{
        ...baseStyle,
        ...style,
      }}
      {...spanProps}
    >
      <svg aria-hidden="true" focusable="false" height={size} viewBox="0 0 25 25" width={size}>
        {segmentAngles.map((angle, index) => (
          <rect
            fill={teal}
            height="8.333"
            key={angle}
            opacity={opacities[index]}
            rx="1.667"
            transform={`rotate(${angle} 12.5 12.5)`}
            width="3.333"
            x="10.834"
            y="0"
          />
        ))}
      </svg>
    </span>
  );
}
