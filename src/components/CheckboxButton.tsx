import { SelectionControlBase, type SelectionControlBaseProps, type SelectionControlState } from './SelectionControlBase';

export type CheckboxButtonState = SelectionControlState;
export type CheckboxButtonTone = 'default' | 'danger';

export type CheckboxButtonProps = {
  tone?: CheckboxButtonTone;
} & Omit<SelectionControlBaseProps, 'inputType' | 'shape' | 'tone' | 'showItemText'>;

export function CheckboxButton({ tone = 'default', ...props }: CheckboxButtonProps) {
  return <SelectionControlBase inputType="checkbox" shape="square" showItemText tone={tone === 'danger' ? 'danger' : 'primary'} {...props} />;
}
