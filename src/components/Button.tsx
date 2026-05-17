import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

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
  grey00: '#FFFFFF',
  grey05: '#F5F5F5',
  grey10: '#E6E6E6',
  grey20: '#D3D3D3',
  grey30: '#A4A4A4',
  grey40: '#5C5C5C',
  grey50: '#434343',
  grey60: '#313131',
  grey90: '#0B0B0B',
  primary03: '#E3F0F0',
  primary05: '#DBEBEB',
  primary10: '#E6FEFF',
  primary20: '#CDFEFF',
  primary30: '#9BF0F1',
  primary50: '#47A0B0',
  primary70: '#3C7F82',
  primary80: '#0D7779',
  primary90: '#0C6466',
  primary100: '#0A5253',
  red50: '#FDE0E0',
  red60: '#FACCCB',
  red80: '#AB241F',
  red90: '#921512',
  orange80: '#E85801',
  orange90: '#BF4315',
  green80: '#0B7639',
  green90: '#045728',
  secondary80: '#42728A',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  borderRadius: 100,
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'Raleway, Open Sans, Arial, sans-serif',
  fontSize: 16,
  fontWeight: 600,
  gap: 4,
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
    dark: '#FFE7D6',
    text: colors.grey00,
  },
  green: {
    light: colors.green80,
    pressed: colors.green90,
    dark: '#CDFCE5',
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
    <span aria-hidden="true" style={{ display: 'inline-flex', fontSize: 16, lineHeight: 1 }}>
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
