import type { CSSProperties, HTMLAttributes } from 'react';

import { Icon, type IconName } from './Icon';

export type IconContainerColor = 'red' | 'yellow' | 'green' | 'brand' | 'blue' | 'purple' | 'pink';
export type IconContainerStyle = 'default' | 'emphasized';

export type IconContainerProps = {
  color?: IconContainerColor;
  styleVariant?: IconContainerStyle;
  icon?: IconName;
  label?: string;
  size?: number;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;

const colorStyles: Record<IconContainerColor, { surface: string; emphasizedSurface: string; foreground: string }> = {
  red: {
    surface: '#FFEBEA',
    emphasizedSurface: '#FFD3D2',
    foreground: '#EF554E',
  },
  yellow: {
    surface: '#FFF6DC',
    emphasizedSurface: '#FFF0C8',
    foreground: '#AE813D',
  },
  green: {
    surface: '#E1FDF0',
    emphasizedSurface: '#CDFCE5',
    foreground: '#0B7639',
  },
  brand: {
    surface: '#EDF6F6',
    emphasizedSurface: '#DBEBEB',
    foreground: '#0C6466',
  },
  blue: {
    surface: '#E3ECF4',
    emphasizedSurface: '#D9E5EE',
    foreground: '#42728A',
  },
  purple: {
    surface: '#F8EEFF',
    emphasizedSurface: '#F4E3FF',
    foreground: '#74428A',
  },
  pink: {
    surface: '#FFEEFB',
    emphasizedSurface: '#F6DEF0',
    foreground: '#D151A4',
  },
};

const colorLabels: Record<IconContainerColor, string> = {
  red: 'Red',
  yellow: 'Yellow',
  green: 'Green',
  brand: 'Brand',
  blue: 'Blue',
  purple: 'Purple',
  pink: 'Pink',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  borderRadius: 999,
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: 0,
};

export function IconContainer({
  color = 'red',
  styleVariant = 'default',
  icon = 'check',
  label,
  size = 37,
  style,
  ...spanProps
}: IconContainerProps) {
  const palette = colorStyles[color];
  const isEmphasized = styleVariant === 'emphasized';
  const accessibleLabel = label ?? `${colorLabels[color]} icon container`;

  return (
    <span
      role="img"
      aria-label={accessibleLabel}
      data-figma-node-id="9084:6053"
      style={{
        ...baseStyle,
        backgroundColor: isEmphasized ? palette.emphasizedSurface : palette.surface,
        color: palette.foreground,
        height: size,
        width: size,
        ...style,
      }}
      {...spanProps}
    >
      <Icon name={icon} width={Math.max(12, size - 16)} height={Math.max(12, size - 16)} />
    </span>
  );
}
