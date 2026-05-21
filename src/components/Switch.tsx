import type { ButtonHTMLAttributes, CSSProperties } from 'react';

export type SwitchState = 'off' | 'on' | 'disabledOn' | 'disabledOff';

export type SwitchProps = {
  state?: SwitchState;
  showIcon?: boolean;
  ariaLabel?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'aria-label'>;

const trackColors: Record<SwitchState, string> = {
  off: '#A4A4A4',
  on: '#0C6466',
  disabledOn: '#D0DEEA',
  disabledOff: '#E6E6E6',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  border: 0,
  borderRadius: 100,
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  height: 32,
  padding: 4,
  position: 'relative',
  width: 54,
};

const thumbStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: 100,
  display: 'inline-flex',
  height: 24,
  justifyContent: 'center',
  position: 'absolute',
  top: 4,
  width: 24,
};

export function Switch({
  state = 'off',
  showIcon = true,
  ariaLabel = 'Toggle setting',
  disabled,
  style,
  ...buttonProps
}: SwitchProps) {
  const checked = state === 'on' || state === 'disabledOn';
  const isDisabled = disabled || state === 'disabledOn' || state === 'disabledOff';

  return (
    <button
      aria-checked={checked}
      aria-label={ariaLabel}
      data-figma-node-id="7521:6965"
      disabled={isDisabled}
      role="switch"
      style={{
        ...baseStyle,
        backgroundColor: trackColors[state],
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
      type="button"
      {...buttonProps}
    >
      <span
        aria-hidden="true"
        style={{
          ...thumbStyle,
          color: '#0A5253',
          left: checked ? 26 : 4,
        }}
      >
        {showIcon && state === 'on' ? (
          <svg focusable="false" height="16" viewBox="0 0 24 24" width="16">
            <path
              d="M9.2 16.4 4.9 12.1 3.5 13.5l5.7 5.7L20.5 7.9 19.1 6.5 9.2 16.4Z"
              fill="currentColor"
            />
          </svg>
        ) : null}
      </span>
    </button>
  );
}
