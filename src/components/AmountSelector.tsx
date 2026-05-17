import type { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Icon } from './Icon';

export type AmountSelectorProps = {
  value: string;
  state?: 'initial' | 'default';
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const baseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E6E6E6',
  borderRadius: 8,
  color: '#5C5C5C',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'Open Sans, Arial, sans-serif',
  fontSize: 34,
  fontWeight: 600,
  justifyContent: 'center',
  lineHeight: 1.25,
  minHeight: 80,
  minWidth: 326,
  overflow: 'hidden',
  padding: 0,
  transition: 'border-color 120ms ease-in-out, opacity 120ms ease-in-out',
};

const adjusterStyle: CSSProperties = {
  alignItems: 'center',
  alignSelf: 'stretch',
  borderColor: '#E6E6E6',
  borderStyle: 'solid',
  borderWidth: '0 1px',
  color: '#0C6466',
  display: 'inline-flex',
  flex: '0 0 52px',
  justifyContent: 'center',
};

export function AmountSelector({
  value,
  state = 'initial',
  disabled = false,
  style,
  ...buttonProps
}: AmountSelectorProps) {
  return (
    <button
      type="button"
      aria-label={state === 'initial' ? 'Select amount' : `Selected amount: ${value}`}
      disabled={disabled}
      style={{
        ...baseStyle,
        color: state === 'initial' ? '#A4A4A4' : '#5C5C5C',
        opacity: disabled ? 0.55 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        ...style,
      }}
      {...buttonProps}
    >
      <span aria-hidden="true" style={{ ...adjusterStyle, borderLeftWidth: 0 }}>
        <Icon name="minus" width={24} height={24} />
      </span>
      <span style={{ flex: '1 1 auto', textAlign: 'center' }}>{value}</span>
      <span aria-hidden="true" style={{ ...adjusterStyle, borderRightWidth: 0 }}>
        <Icon name="plus" width={24} height={24} />
      </span>
    </button>
  );
}
