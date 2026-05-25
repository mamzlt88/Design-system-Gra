import type { InputHTMLAttributes } from 'react';

import { SelectionControlBase, type SelectionControlState } from './SelectionControlBase';

export type CheckboxRadioButtonType = 'radioText' | 'radio' | 'square' | 'squareRed';
export type CheckboxRadioButtonState = SelectionControlState;

export type CheckboxRadioButtonProps = {
  type?: CheckboxRadioButtonType;
  state?: CheckboxRadioButtonState;
  itemText?: string;
  supportiveText?: string;
  showSupportiveText?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children' | 'checked'>;

export function CheckboxRadioButton({
  type = 'radioText',
  state = 'default',
  itemText = 'Item',
  supportiveText = 'Supportive text',
  showSupportiveText = false,
  disabled = false,
  onChange,
  style,
  ...inputProps
}: CheckboxRadioButtonProps) {
  const isTextVisible = type === 'radioText' || showSupportiveText;

  return (
    <SelectionControlBase
      disabled={disabled}
      inputType={type === 'radio' || type === 'radioText' ? 'radio' : 'checkbox'}
      itemText={itemText}
      onChange={onChange}
      shape={type === 'radio' || type === 'radioText' ? 'circle' : 'square'}
      showItemText={isTextVisible}
      showSupportiveText={showSupportiveText}
      state={state}
      style={style}
      supportiveText={supportiveText}
      tone={type === 'squareRed' ? 'danger' : 'primary'}
      {...inputProps}
    />
  );
}
