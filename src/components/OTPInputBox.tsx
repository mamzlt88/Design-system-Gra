import type { CSSProperties, InputHTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type OTPInputBoxState = 'enabled' | 'active' | 'filled' | 'filledError' | 'activeError';

export type OTPInputBoxProps = {
  state?: OTPInputBoxState;
  value?: string;
  showValue?: boolean;
  ariaLabel?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'value' | 'aria-label'>;

const colors = {
  grey10: tokens.color.grey10,
  grey20: tokens.color.grey20,
  grey90: tokens.color.grey80,
  primary90: tokens.color.primary90,
  red90: tokens.color.red90,
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
        borderRadius: tokens.radius.xl,
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
          fontFamily: tokens.typography.bodyRegular.fontFamily,
          fontSize: tokens.typography.displaySmallBold.fontSize,
          fontWeight: 400,
          height: '100%',
          lineHeight: tokens.typography.displaySmallBold.lineHeight,
          outline: 'none',
          padding: tokens.spacing.none,
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
