import { SelectionControlBase, type SelectionControlBaseProps, type SelectionControlState } from './SelectionControlBase';

export type RadioButtonState = SelectionControlState;

export type RadioButtonProps = Omit<SelectionControlBaseProps, 'inputType' | 'shape' | 'tone' | 'showItemText'>;

export function RadioButton(props: RadioButtonProps) {
  return <SelectionControlBase inputType="radio" shape="circle" showItemText tone="primary" {...props} />;
}
