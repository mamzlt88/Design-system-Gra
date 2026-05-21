import type { CSSProperties, HTMLAttributes } from 'react';

import { OTPInputBox, type OTPInputBoxState } from './OTPInputBox';

export type OTPInputProps = {
  value?: string;
  length?: number;
  activeIndex?: number;
  hasError?: boolean;
  supportingText?: string;
  showSupportingText?: boolean;
  label?: string;
  onValueChange?: (value: string) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'>;

const baseStyle: CSSProperties = {
  display: 'inline-grid',
  fontFamily: 'Open Sans, Arial, sans-serif',
  gap: 16,
  width: 334,
};

function getBoxState(index: number, digit: string, activeIndex: number | undefined, hasError: boolean): OTPInputBoxState {
  const isActive = activeIndex === index;
  if (isActive && hasError) {
    return 'activeError';
  }
  if (digit && hasError) {
    return 'filledError';
  }
  if (isActive) {
    return 'active';
  }
  if (digit) {
    return 'filled';
  }
  return 'enabled';
}

export function OTPInput({
  value = '',
  length = 6,
  activeIndex,
  hasError = false,
  supportingText = 'Supporting Text',
  showSupportingText = true,
  label = 'One-time passcode',
  onValueChange,
  style,
  ...divProps
}: OTPInputProps) {
  const digits = Array.from({ length }, (_, index) => value[index] ?? '');

  return (
    <div
      aria-label={label}
      data-figma-node-id="7878:736"
      role="group"
      style={{
        ...baseStyle,
        ...style,
      }}
      {...divProps}
    >
      <div style={{ display: 'flex', gap: 8, width: 334 }}>
        {Array.from({ length }).map((_, index) => {
          const digit = digits[index] ?? '';
          return (
            <OTPInputBox
              ariaLabel={`${label} digit ${index + 1}`}
              key={index}
              onChange={
                onValueChange
                  ? (event) => {
                      const nextDigit = event.target.value.slice(-1);
                      const nextValue = Array.from({ length }, (_, valueIndex) => value[valueIndex] ?? '');
                      nextValue[index] = nextDigit;
                      onValueChange(nextValue.join('').trimEnd());
                    }
                  : undefined
              }
              state={getBoxState(index, digit, activeIndex, hasError)}
              value={digit}
            />
          );
        })}
      </div>
      {showSupportingText ? (
        <p
          style={{
            color: '#921512',
            fontSize: 12,
            fontWeight: 600,
            lineHeight: '15px',
            margin: 0,
            width: 326,
          }}
        >
          {supportingText}
        </p>
      ) : null}
    </div>
  );
}
