import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type ButtonProps = {
  label?: string;
  variant?: 'filled' | 'outlined' | 'text';
  tone?: 'primary' | 'secondary' | 'red' | 'warning' | 'green' | 'standard';
  state?: 'enabled' | 'pressed' | 'disabled';
  darkMode?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const colors = {
  grey00: tokens.color.grey00,
  grey05: tokens.color.grey05,
  grey10: tokens.color.grey10,
  grey20: tokens.color.grey20,
  grey30: tokens.color.grey30,
  grey40: tokens.color.grey40,
  grey50: tokens.color.grey50,
  grey60: tokens.color.grey60,
  grey90: tokens.color.grey90,
  primary03: tokens.color.primary03,
  primary05: tokens.color.primary05,
  primary10: tokens.color.primary10,
  primary20: tokens.color.primary20,
  primary30: tokens.color.primary30,
  primary50: tokens.color.primary50,
  primary70: tokens.color.primary70,
  primary80: tokens.color.primary80,
  primary90: tokens.color.primary90,
  primary100: tokens.color.primary100,
  red50: tokens.color.red50,
  red60: tokens.color.red60,
  red80: tokens.color.red80,
  red90: tokens.color.red90,
  orange80: tokens.color.orange80,
  orange90: tokens.color.orange90,
  green80: tokens.color.green80,
  green90: tokens.color.green90,
  secondary80: tokens.color.secondary80,
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  borderRadius: tokens.radius.pill,
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: tokens.typography.subHeadingSemiBold.fontFamily,
  fontSize: tokens.typography.subHeadingSemiBold.fontSize,
  fontWeight: 600,
  gap: tokens.spacing.xxs,
  justifyContent: 'center',
  lineHeight: 1.25,
  minHeight: 44,
  padding: '12px 24px',
  transition: 'background-color 120ms ease-in-out, border-color 120ms ease-in-out, opacity 120ms ease-in-out',
  whiteSpace: 'nowrap',
};

const toneColors: Record<NonNullable<ButtonProps['tone']>, { light: string; pressed: string; dark: string; text: string }> = {
  primary: {
    light: colors.primary90,
    pressed: colors.primary100,
    dark: colors.primary10,
    text: colors.grey00,
  },
  secondary: {
    light: colors.secondary80,
    pressed: colors.primary70,
    dark: colors.primary20,
    text: colors.grey00,
  },
  red: {
    light: colors.red80,
    pressed: colors.red90,
    dark: colors.red50,
    text: colors.grey00,
  },
  warning: {
    light: colors.orange80,
    pressed: colors.orange90,
    dark: tokens.color.orange40,
    text: colors.grey00,
  },
  green: {
    light: colors.green80,
    pressed: colors.green90,
    dark: tokens.color.green10,
    text: colors.grey00,
  },
  standard: {
    light: colors.grey40,
    pressed: colors.grey60,
    dark: colors.grey05,
    text: colors.grey00,
  },
};

function getVariantStyle(
  variant: NonNullable<ButtonProps['variant']>,
  tone: NonNullable<ButtonProps['tone']>,
  state: NonNullable<ButtonProps['state']>,
  darkMode: boolean,
): CSSProperties {
  const toneColor = toneColors[tone];
  const disabled = state === 'disabled';
  const pressed = state === 'pressed';
  const activeColor = darkMode ? toneColor.dark : pressed ? toneColor.pressed : toneColor.light;
  const activeText = darkMode && variant === 'filled' ? colors.primary90 : toneColor.text;

  if (disabled) {
    return {
      backgroundColor: darkMode ? colors.primary80 : colors.grey10,
      borderColor: variant === 'outlined' ? colors.grey30 : 'transparent',
      color: darkMode ? colors.primary50 : colors.grey30,
    };
  }

  if (variant === 'outlined') {
    return {
      backgroundColor: pressed ? (darkMode ? colors.primary100 : colors.grey05) : 'transparent',
      borderColor: darkMode ? colors.grey00 : colors.grey30,
      color: darkMode ? colors.primary20 : tone === 'standard' ? colors.grey50 : colors.primary90,
    };
  }

  if (variant === 'text') {
    return {
      backgroundColor: pressed ? (darkMode ? colors.grey60 : colors.grey05) : 'transparent',
      borderColor: 'transparent',
      color: darkMode ? colors.grey00 : tone === 'standard' ? colors.grey50 : colors.primary90,
    };
  }

  return {
    backgroundColor: activeColor,
    borderColor: 'transparent',
    color: tone === 'standard' && darkMode ? colors.grey90 : activeText,
  };
}

export function Button({
  label,
  variant = 'filled',
  tone = 'primary',
  state = 'enabled',
  darkMode = false,
  leftIcon = false,
  rightIcon = false,
  fullWidth = false,
  children,
  disabled = false,
  style,
  ...buttonProps
}: ButtonProps) {
  const content = label ?? children;
  const isDisabled = disabled || state === 'disabled';
  const icon = (
    <span aria-hidden="true" style={{ display: 'inline-flex', fontSize: tokens.typography.subHeadingSemiBold.fontSize, lineHeight: 1 }}>
      +
    </span>
  );

  return (
    <button
      type="button"
      disabled={isDisabled}
      style={{
        ...baseStyle,
        ...getVariantStyle(variant, tone, isDisabled ? 'disabled' : state, darkMode),
        pointerEvents: isDisabled ? 'none' : undefined,
        width: fullWidth ? '100%' : undefined,
        ...style,
      }}
      {...buttonProps}
    >
      {leftIcon ? icon : null}
      <span>{content}</span>
      {rightIcon ? icon : null}
    </button>
  );
}
