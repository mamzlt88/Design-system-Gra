import type { CSSProperties, HTMLAttributes } from 'react';

export type ColorIndicatorColor = 'red' | 'yellow' | 'green' | 'aquamarine' | 'blue' | 'brand';

export type ColorIndicatorProps = {
  color?: ColorIndicatorColor;
  label?: string;
  height?: number;
} & HTMLAttributes<HTMLSpanElement>;

const colorValues: Record<ColorIndicatorColor, string> = {
  red: '#EF554E',
  yellow: '#FFBF10',
  green: '#83C23F',
  aquamarine: '#9BF0F1',
  blue: '#52BAC9',
  brand: '#0C989A',
};

const baseStyle: CSSProperties = {
  borderRadius: 4,
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
