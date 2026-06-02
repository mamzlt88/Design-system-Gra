import type { CSSProperties, HTMLAttributes } from 'react';

import { Icon, type IconName } from './Icon';
import { componentTokens as tokens } from '../tokens/componentTokens';

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
    surface: tokens.color.illustrativeRedSoft,
    emphasizedSurface: tokens.color.illustrativeRedSubtle,
    foreground: tokens.color.illustrativeRed,
  },
  yellow: {
    surface: tokens.color.yellow05,
    emphasizedSurface: tokens.color.yellow10,
    foreground: tokens.color.yellow50,
  },
  green: {
    surface: tokens.color.green05,
    emphasizedSurface: tokens.color.green10,
    foreground: tokens.color.green80,
  },
  brand: {
    surface: tokens.color.primary00,
    emphasizedSurface: tokens.color.primary05,
    foreground: tokens.color.primary90,
  },
  blue: {
    surface: tokens.color.secondary40,
    emphasizedSurface: tokens.color.secondary50,
    foreground: tokens.color.secondary80,
  },
  purple: {
    surface: tokens.color.illustrativePurpleSoft,
    emphasizedSurface: tokens.color.illustrativePurpleSubtle,
    foreground: tokens.color.illustrativePurple,
  },
  pink: {
    surface: tokens.color.illustrativePinkSoft,
    emphasizedSurface: tokens.color.illustrativePinkSubtle,
    foreground: tokens.color.illustrativePink,
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
  borderRadius: tokens.radius.circle,
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
