import type { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Icon, type IconName } from './Icon';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type IconButtonProps = {
  ariaLabel: string;
  icon?: IconName;
  variant?: 'filled' | 'tonal' | 'outlined' | 'outlinedAccent' | 'filledRed' | 'standard' | 'standardInverse';
  state?: 'enabled' | 'pressed' | 'disabled';
  darkMode?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'children'>;

const colors = {
  grey00: tokens.color.grey00,
  grey10: tokens.color.grey10,
  grey20: tokens.color.grey20,
  grey30: tokens.color.grey30,
  grey40: tokens.color.grey40,
  grey50: tokens.color.grey50,
  grey60: tokens.color.grey60,
  primary05: tokens.color.primary05,
  primary20: tokens.color.primary20,
  primary30: tokens.color.primary30,
  primary70: tokens.color.primary70,
  primary90: tokens.color.primary90,
  primary100: tokens.color.primary100,
  red50: tokens.color.red50,
  red60: tokens.color.red60,
  red80: tokens.color.red80,
  red90: tokens.color.red90,
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  borderRadius: tokens.radius.pill,
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  height: 40,
  justifyContent: 'center',
  padding: tokens.spacing.sm,
  transition: 'background-color 120ms ease-in-out, border-color 120ms ease-in-out, opacity 120ms ease-in-out',
  width: 40,
};

function getIconButtonStyle(
  variant: NonNullable<IconButtonProps['variant']>,
  state: NonNullable<IconButtonProps['state']>,
  darkMode: boolean,
): CSSProperties {
  const disabled = state === 'disabled';
  const pressed = state === 'pressed';

  if (variant === 'tonal') {
    return {
      backgroundColor: disabled ? (darkMode ? colors.primary100 : colors.grey10) : pressed ? (darkMode ? colors.primary100 : colors.primary30) : darkMode ? colors.primary20 : colors.primary20,
      borderColor: 'transparent',
      color: disabled ? colors.grey30 : colors.primary90,
    };
  }

  if (variant === 'outlined' || variant === 'outlinedAccent') {
    return {
      backgroundColor: disabled ? (variant === 'outlinedAccent' ? colors.grey00 : 'transparent') : pressed ? (darkMode ? colors.primary100 : colors.primary05) : variant === 'outlinedAccent' ? colors.grey00 : 'transparent',
      borderColor: disabled ? colors.grey20 : variant === 'outlinedAccent' ? colors.primary90 : darkMode ? colors.grey00 : colors.grey60,
      color: disabled ? colors.grey30 : variant === 'outlinedAccent' ? colors.primary90 : darkMode ? colors.grey00 : colors.grey60,
    };
  }

  if (variant === 'filledRed') {
    return {
      backgroundColor: disabled ? (darkMode ? colors.primary100 : colors.grey10) : darkMode ? (pressed ? colors.red60 : colors.red50) : pressed ? colors.red90 : colors.red80,
      borderColor: 'transparent',
      color: disabled ? colors.grey30 : darkMode ? colors.red80 : colors.grey00,
    };
  }

  if (variant === 'standard') {
    return {
      backgroundColor: disabled ? 'transparent' : darkMode ? (pressed ? colors.primary70 : 'transparent') : pressed ? colors.grey10 : 'transparent',
      borderColor: 'transparent',
      color: disabled ? colors.grey30 : darkMode ? colors.grey00 : colors.grey60,
    };
  }

  if (variant === 'standardInverse') {
    return {
      backgroundColor: disabled || pressed ? colors.grey50 : colors.grey40,
      borderColor: 'transparent',
      color: disabled ? colors.grey30 : colors.grey00,
    };
  }

  return {
    backgroundColor: disabled ? (darkMode ? colors.primary100 : colors.grey10) : darkMode ? (pressed ? colors.primary30 : colors.primary20) : pressed ? colors.primary100 : colors.primary90,
    borderColor: 'transparent',
    color: disabled ? colors.grey30 : darkMode ? colors.primary90 : colors.grey00,
  };
}

export function IconButton({
  ariaLabel,
  icon = 'settings',
  variant = 'filled',
  state = 'enabled',
  darkMode = false,
  disabled = false,
  style,
  ...buttonProps
}: IconButtonProps) {
  const isDisabled = disabled || state === 'disabled';

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={isDisabled}
      style={{
        ...baseStyle,
        ...getIconButtonStyle(variant, isDisabled ? 'disabled' : state, darkMode),
        pointerEvents: isDisabled ? 'none' : undefined,
        ...style,
      }}
      {...buttonProps}
    >
      <Icon name={icon} width={24} height={24} />
    </button>
  );
}
