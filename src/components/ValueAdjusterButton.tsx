import type { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Icon } from './Icon';

export type ValueAdjusterButtonProps = {
  adjustment?: 'decrease' | 'increase';
  state?: 'enabled' | 'pressed' | 'disabled';
  ariaLabel?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'children' | 'type'>;

const colors = {
  grey00: '#FFFFFF',
  grey10: '#E6E6E6',
  grey20: '#D3D3D3',
  grey30: '#A4A4A4',
  primary05: '#DBEBEB',
  primary20: '#CDFEFF',
  primary90: '#0C6466',
  primary100: '#0A5253',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  border: `1px solid ${colors.grey10}`,
  boxSizing: 'border-box',
  color: colors.primary90,
  cursor: 'pointer',
  display: 'inline-flex',
  flexShrink: 0,
  height: 80,
  justifyContent: 'center',
  minWidth: 52,
  padding: 0,
  transition: 'background-color 120ms ease-in-out, border-color 120ms ease-in-out, color 120ms ease-in-out',
  width: 52,
};

const iconWrapStyle: CSSProperties = {
  alignItems: 'center',
  color: 'inherit',
  display: 'inline-flex',
  height: 24,
  justifyContent: 'center',
  lineHeight: 0,
  width: 24,
};

function getAdjusterStyle(
  adjustment: NonNullable<ValueAdjusterButtonProps['adjustment']>,
  state: NonNullable<ValueAdjusterButtonProps['state']>,
  disabled: boolean,
): CSSProperties {
  const isDisabled = disabled || state === 'disabled';

  return {
    backgroundColor: isDisabled ? colors.grey10 : state === 'pressed' ? colors.primary20 : colors.grey00,
    borderColor: isDisabled ? colors.grey20 : state === 'pressed' ? colors.primary90 : colors.grey10,
    borderRadius: adjustment === 'decrease' ? '8px 0 0 8px' : '0 8px 8px 0',
    color: isDisabled ? colors.grey30 : state === 'pressed' ? colors.primary100 : colors.primary90,
  };
}

export function ValueAdjusterButton({
  adjustment = 'decrease',
  state = 'enabled',
  ariaLabel,
  disabled = false,
  style,
  ...buttonProps
}: ValueAdjusterButtonProps) {
  const isDisabled = disabled || state === 'disabled';
  const accessibleName = ariaLabel ?? (adjustment === 'decrease' ? 'Decrease value' : 'Increase value');

  return (
    <button
      type="button"
      aria-label={accessibleName}
      disabled={isDisabled}
      style={{
        ...baseStyle,
        ...getAdjusterStyle(adjustment, state, disabled),
        pointerEvents: isDisabled ? 'none' : undefined,
        ...style,
      }}
      {...buttonProps}
    >
      <span aria-hidden="true" style={iconWrapStyle}>
        <Icon name={adjustment === 'decrease' ? 'minus' : 'plus'} width={24} height={24} />
      </span>
    </button>
  );
}
