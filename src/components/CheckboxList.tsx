import type { CSSProperties, HTMLAttributes } from 'react';

import { CheckboxRadioButton } from './CheckboxRadioButton';

export type CheckboxListProps = {
  itemCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  selectedCount?: number;
  itemLabelPrefix?: string;
  showTopScrollIndicator?: boolean;
  showBottomScrollIndicator?: boolean;
  showTextField?: boolean;
  textFieldLabel?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

const scrollIndicatorStyle: CSSProperties = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)',
  height: 18,
  left: 0,
  pointerEvents: 'none',
  position: 'absolute',
  right: 0,
  zIndex: 1,
};

export function CheckboxList({
  itemCount = 1,
  selectedCount = 0,
  itemLabelPrefix = 'Item',
  showTopScrollIndicator = true,
  showBottomScrollIndicator = true,
  showTextField = false,
  textFieldLabel = 'Other',
  style,
  ...divProps
}: CheckboxListProps) {
  return (
    <div
      data-figma-node-id="7673:5287"
      role="group"
      style={{
        display: 'inline-grid',
        gap: 8,
        maxHeight: itemCount >= 6 ? 328 : undefined,
        overflow: itemCount >= 6 ? 'hidden' : undefined,
        padding: 0,
        position: 'relative',
        width: 350,
        ...style,
      }}
      {...divProps}
    >
      {itemCount >= 6 && showTopScrollIndicator ? <span aria-hidden="true" style={{ ...scrollIndicatorStyle, top: 0 }} /> : null}
      {Array.from({ length: itemCount }).map((_, index) => (
        <CheckboxRadioButton
          itemText={`${itemLabelPrefix} ${index + 1}`}
          key={index}
          state={index < selectedCount ? 'selected' : 'default'}
          type="square"
        />
      ))}
      {showTextField ? (
        <label style={{ color: '#5C5C5C', display: 'grid', fontFamily: 'Open Sans, Arial, sans-serif', fontSize: 12, gap: 4 }}>
          {textFieldLabel}
          <input
            style={{
              border: '1px solid #D3D3D3',
              borderRadius: 8,
              font: 'inherit',
              height: 40,
              padding: '0 12px',
            }}
            type="text"
          />
        </label>
      ) : null}
      {itemCount >= 6 && showBottomScrollIndicator ? (
        <span
          aria-hidden="true"
          style={{
            ...scrollIndicatorStyle,
            bottom: 0,
            transform: 'rotate(180deg)',
          }}
        />
      ) : null}
    </div>
  );
}
