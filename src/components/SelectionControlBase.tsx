import type { CSSProperties, InputHTMLAttributes } from 'react';

export type SelectionControlState = 'default' | 'selected' | 'disabled';
export type SelectionControlShape = 'circle' | 'square';
export type SelectionControlTone = 'primary' | 'danger';

export type SelectionControlBaseProps = {
  inputType: 'checkbox' | 'radio';
  shape: SelectionControlShape;
  state?: SelectionControlState;
  itemText?: string;
  supportiveText?: string;
  showSupportiveText?: boolean;
  showItemText?: boolean;
  tone?: SelectionControlTone;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children' | 'checked'>;

const colors = {
  grey00: '#FFFFFF',
  grey10: '#E6E6E6',
  grey20: '#D3D3D3',
  grey30: '#A4A4A4',
  grey40: '#5C5C5C',
  grey50: '#434343',
  primary90: '#0C6466',
  red80: '#AB241F',
};

const labelStyle: CSSProperties = {
  alignItems: 'flex-start',
  color: colors.grey50,
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'Open Sans, Arial, sans-serif',
  gap: 8,
  lineHeight: 1.25,
};

const textWrapStyle: CSSProperties = {
  display: 'grid',
  gap: 4,
  paddingTop: 1,
};

const itemTextStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
};

const supportiveTextStyle: CSSProperties = {
  color: colors.grey40,
  fontSize: 12,
  fontWeight: 400,
};

function getControlStyle(
  shape: SelectionControlShape,
  tone: SelectionControlTone,
  state: SelectionControlState,
  disabled: boolean,
): CSSProperties {
  const isSelected = state === 'selected';
  const activeColor = tone === 'danger' ? colors.red80 : colors.primary90;

  return {
    alignItems: 'center',
    backgroundColor: disabled ? colors.grey10 : isSelected ? activeColor : colors.grey00,
    border: `2px solid ${disabled ? colors.grey20 : isSelected ? activeColor : colors.grey30}`,
    borderRadius: shape === 'circle' ? 100 : 4,
    boxSizing: 'border-box',
    color: colors.grey00,
    display: 'inline-flex',
    flexShrink: 0,
    height: 20,
    justifyContent: 'center',
    marginTop: 1,
    width: 20,
  };
}

function getSelectionMark(shape: SelectionControlShape, state: SelectionControlState) {
  if (state !== 'selected') {
    return null;
  }

  if (shape === 'circle') {
    return <span aria-hidden="true" style={{ backgroundColor: colors.grey00, borderRadius: 100, height: 8, width: 8 }} />;
  }

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="14" height="14">
      <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  );
}

export function SelectionControlBase({
  inputType,
  shape,
  state = 'default',
  itemText = 'Item',
  supportiveText = 'Supportive text',
  showSupportiveText = false,
  showItemText = true,
  tone = 'primary',
  disabled = false,
  onChange,
  style,
  ...inputProps
}: SelectionControlBaseProps) {
  const isSelected = state === 'selected';
  const isDisabled = disabled || state === 'disabled';
  const isTextVisible = showItemText || showSupportiveText;
  const isReadOnly = inputProps.readOnly ?? !onChange;

  return (
    <label
      style={{
        ...labelStyle,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1,
        ...style,
      }}
    >
      <input
        aria-label={isTextVisible ? undefined : itemText}
        checked={isSelected}
        disabled={isDisabled}
        onChange={onChange}
        readOnly={isReadOnly}
        style={{ clip: 'rect(0 0 0 0)', height: 1, overflow: 'hidden', position: 'absolute', width: 1 }}
        type={inputType}
        {...inputProps}
      />
      <span aria-hidden="true" style={getControlStyle(shape, tone, state, isDisabled)}>
        {getSelectionMark(shape, state)}
      </span>
      {isTextVisible ? (
        <span style={textWrapStyle}>
          <span style={itemTextStyle}>{itemText}</span>
          {showSupportiveText ? <span style={supportiveTextStyle}>{supportiveText}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
