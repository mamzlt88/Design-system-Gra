import type { CSSProperties, InputHTMLAttributes } from 'react';

export type OTPInputBoxState = 'enabled' | 'active' | 'filled' | 'filledError' | 'activeError';

export type OTPInputBoxProps = {
  state?: OTPInputBoxState;
  value?: string;
  showValue?: boolean;
  ariaLabel?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'value' | 'aria-label'>;

const colors = {
  grey10: '#E6E6E6',
  grey20: '#D3D3D3',
  grey90: '#141414',
  primary90: '#0C6466',
  red90: '#921512',
};

function getBoxStyle(state: OTPInputBoxState): CSSProperties {
  const isActive = state === 'active' || state === 'activeError';
  const isError = state === 'activeError' || state === 'filledError';

  return {
    backgroundColor: isActive ? colors.grey20 : colors.grey10,
    border: isActive || isError ? `1px solid ${isError ? colors.red90 : colors.primary90}` : '1px solid transparent',
  };
}

export function OTPInputBox({
  state = 'enabled',
  value = '',
  showValue = true,
  ariaLabel = 'One-time passcode digit',
  onChange,
  style,
  ...inputProps
}: OTPInputBoxProps) {
  const displayValue = showValue ? value.slice(0, 1) : '';
  const isActive = state === 'active' || state === 'activeError';

  return (
    <span
      data-figma-node-id="7878:668"
      style={{
        alignItems: 'center',
        borderRadius: 16,
        boxSizing: 'border-box',
        display: 'inline-flex',
        height: 66,
        justifyContent: 'center',
        position: 'relative',
        width: 49,
        ...getBoxStyle(state),
        ...style,
      }}
    >
      <input
        aria-invalid={state === 'activeError' || state === 'filledError' ? true : undefined}
        aria-label={ariaLabel}
        inputMode="numeric"
        maxLength={1}
        onChange={onChange}
        pattern="[0-9]*"
        readOnly={!onChange}
        style={{
          background: 'transparent',
          border: 0,
          boxSizing: 'border-box',
          color: colors.grey90,
          fontFamily: 'Open Sans, Arial, sans-serif',
          fontSize: 24,
          fontWeight: 400,
          height: '100%',
          lineHeight: '30px',
          outline: 'none',
          padding: 0,
          textAlign: 'center',
          width: '100%',
        }}
        type="text"
        value={displayValue}
        {...inputProps}
      />
      {isActive ? (
        <span
          aria-hidden="true"
          style={{
            backgroundColor: state === 'activeError' ? colors.red90 : colors.primary90,
            height: 34,
            position: 'absolute',
            right: 12,
            top: 16,
            width: state === 'activeError' ? 1 : 2,
          }}
        />
      ) : null}
    </span>
  );
}
