import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type PillButtonProps = {
  label: string;
  state?: 'enabled' | 'selected' | 'pressed';
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const colors = {
  grey00: tokens.color.grey00,
  grey10: tokens.color.grey10,
  grey30: tokens.color.grey30,
  grey40: tokens.color.grey40,
  grey50: tokens.color.grey50,
  primary05: tokens.color.primary05,
  primary20: tokens.color.primary20,
  primary90: tokens.color.primary90,
  primary100: tokens.color.primary100,
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  border: `1px solid ${colors.grey10}`,
  borderRadius: tokens.radius.pill,
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  fontSize: tokens.typography.bodySmallRegular.fontSize,
  fontWeight: 400,
  justifyContent: 'center',
  lineHeight: tokens.typography.bodySmallRegular.lineHeight,
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
