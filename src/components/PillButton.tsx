import type { ButtonHTMLAttributes, CSSProperties } from 'react';

export type PillButtonProps = {
  label: string;
  state?: 'enabled' | 'selected' | 'pressed';
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const colors = {
  grey00: '#FFFFFF',
  grey10: '#E6E6E6',
  grey30: '#A4A4A4',
  grey40: '#5C5C5C',
  grey50: '#434343',
  primary05: '#DBEBEB',
  primary20: '#CDFEFF',
  primary90: '#0C6466',
  primary100: '#0A5253',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  border: `1px solid ${colors.grey10}`,
  borderRadius: 100,
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'Open Sans, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  justifyContent: 'center',
  lineHeight: '15px',
  minHeight: 32,
  padding: '8px 16px',
  transition: 'background-color 120ms ease-in-out, border-color 120ms ease-in-out, color 120ms ease-in-out',
  whiteSpace: 'nowrap',
};

function getPillStyle(state: NonNullable<PillButtonProps['state']>, disabled: boolean): CSSProperties {
  if (disabled) {
    return {
      backgroundColor: colors.grey10,
      borderColor: colors.grey10,
      color: colors.grey30,
    };
  }

  if (state === 'selected') {
    return {
      backgroundColor: colors.primary90,
      borderColor: colors.primary90,
      color: colors.grey00,
      fontWeight: 600,
    };
  }

  if (state === 'pressed') {
    return {
      backgroundColor: colors.primary20,
      borderColor: colors.primary90,
      color: colors.primary100,
      fontWeight: 600,
    };
  }

  return {
    backgroundColor: colors.grey00,
    borderColor: colors.grey10,
    color: colors.grey50,
  };
}

export function PillButton({ label, state = 'enabled', disabled = false, style, ...buttonProps }: PillButtonProps) {
  const isSelected = state === 'selected';

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      disabled={disabled}
      style={{
        ...baseStyle,
        ...getPillStyle(state, disabled),
        pointerEvents: disabled ? 'none' : undefined,
        ...style,
      }}
      {...buttonProps}
    >
      {label}
    </button>
  );
}
