import type { CSSProperties, HTMLAttributes } from 'react';

import { ValueAdjusterButton } from './ValueAdjusterButton';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type AmountSelectorProps = {
  value: string | number;
  state?: 'initial' | 'default';
  pressedControl?: 'decrease' | 'increase' | null;
  disabled?: boolean;
  decreaseDisabled?: boolean;
  increaseDisabled?: boolean;
  onDecrease?: () => void;
  onIncrease?: () => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

const baseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: tokens.color.grey00,
  borderRadius: tokens.radius.md,
  color: tokens.color.grey40,
  display: 'inline-flex',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  fontSize: tokens.typography.displayMediumSemiBold.fontSize,
  fontWeight: 600,
  justifyContent: 'center',
  lineHeight: 1.25,
  minHeight: 80,
  minWidth: 326,
  overflow: 'hidden',
  padding: tokens.spacing.none,
};

const valueStyle: CSSProperties = {
  alignItems: 'center',
  alignSelf: 'stretch',
  borderBottom: `1px solid ${tokens.color.grey10}`,
  borderTop: `1px solid ${tokens.color.grey10}`,
  display: 'inline-flex',
  flex: '1 1 auto',
  justifyContent: 'center',
  minWidth: 222,
  padding: '0 16px',
  textAlign: 'center',
};

export function AmountSelector({
  value,
  state = 'initial',
  pressedControl = null,
  disabled = false,
  decreaseDisabled = false,
  increaseDisabled = false,
  onDecrease,
  onIncrease,
  style,
  ...divProps
}: AmountSelectorProps) {
  const displayValue = String(value);

  return (
    <div
      role="group"
      aria-label={state === 'initial' ? 'Amount selector' : `Selected amount: ${displayValue}`}
      style={{
        ...baseStyle,
        color: state === 'initial' ? tokens.color.grey30 : tokens.color.grey40,
        opacity: disabled ? 0.55 : 1,
        ...style,
      }}
      {...divProps}
    >
      <ValueAdjusterButton
        adjustment="decrease"
        ariaLabel="Decrease amount"
        disabled={disabled || decreaseDisabled}
        state={pressedControl === 'decrease' ? 'pressed' : disabled || decreaseDisabled ? 'disabled' : 'enabled'}
        onClick={onDecrease}
      />
      <span aria-live="polite" style={valueStyle}>
        {displayValue}
      </span>
      <ValueAdjusterButton
        adjustment="increase"
        ariaLabel="Increase amount"
        disabled={disabled || increaseDisabled}
        state={pressedControl === 'increase' ? 'pressed' : disabled || increaseDisabled ? 'disabled' : 'enabled'}
        onClick={onIncrease}
      />
    </div>
  );
}
