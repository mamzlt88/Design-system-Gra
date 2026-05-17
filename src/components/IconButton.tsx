import type { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Icon, type IconName } from './Icon';

export type IconButtonProps = {
  ariaLabel: string;
  icon?: IconName;
  variant?: 'filled' | 'tonal' | 'outlined' | 'outlinedAccent' | 'filledRed' | 'standard' | 'standardInverse';
  state?: 'enabled' | 'pressed' | 'disabled';
  darkMode?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'children'>;

const colors = {
  grey00: '#FFFFFF',
  grey10: '#E6E6E6',
  grey20: '#D3D3D3',
  grey30: '#A4A4A4',
  grey40: '#5C5C5C',
  grey50: '#434343',
  grey60: '#313131',
  primary05: '#DBEBEB',
  primary20: '#CDFEFF',
  primary30: '#9BF0F1',
  primary70: '#3C7F82',
  primary90: '#0C6466',
  primary100: '#0A5253',
  red50: '#FDE0E0',
  red60: '#FACCCB',
  red80: '#AB241F',
  red90: '#921512',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  borderRadius: 100,
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  height: 40,
  justifyContent: 'center',
  padding: 8,
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
