import type { CSSProperties, HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type ColorIndicatorColor = 'red' | 'yellow' | 'green' | 'aquamarine' | 'blue' | 'brand';

export type ColorIndicatorProps = {
  color?: ColorIndicatorColor;
  label?: string;
  height?: number;
} & HTMLAttributes<HTMLSpanElement>;

const colorValues: Record<ColorIndicatorColor, string> = {
  red: tokens.color.illustrativeRed,
  yellow: tokens.color.yellow40,
  green: tokens.color.colorIndicatorGreen,
  aquamarine: tokens.color.primary30,
  blue: tokens.color.primary40,
  brand: tokens.color.primary60,
};

const baseStyle: CSSProperties = {
  borderRadius: tokens.radius.xs,
  display: 'inline-block',
  flexShrink: 0,
  width: 6,
};

export function ColorIndicator({
  color = 'red',
  label,
  height = 24,
  style,
  ...spanProps
}: ColorIndicatorProps) {
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      data-figma-node-id="9097:6463"
      style={{
        ...baseStyle,
        backgroundColor: colorValues[color],
        height,
        ...style,
      }}
      {...spanProps}
    />
  );
}
