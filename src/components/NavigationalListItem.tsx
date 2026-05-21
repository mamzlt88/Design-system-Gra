import type { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Icon } from './Icon';
import { IconContainer } from './IconContainer';

export type NavigationalListItemState = 'default' | 'pressed';
export type NavigationalListItemLeading = 'iconContainer' | 'iconPlain' | 'none';

export type NavigationalListItemProps = {
  state?: NavigationalListItemState;
  leading?: NavigationalListItemLeading;
  label?: string;
  supportingText?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function NavigationalListItem({
  state = 'default',
  leading = 'iconContainer',
  label = 'List item',
  supportingText = 'Supporting detail',
  style,
  ...buttonProps
}: NavigationalListItemProps) {
  const pressed = state === 'pressed';

  return (
    <button
      type="button"
      data-figma-node-id="7428:8728"
      style={{
        alignItems: 'center',
        backgroundColor: pressed ? '#EDF6F6' : '#FFFFFF',
        border: '1px solid #E6E6E6',
        borderRadius: 8,
        boxSizing: 'border-box',
        color: '#141414',
        cursor: 'pointer',
        display: 'flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        gap: 12,
        minHeight: 64,
        padding: '12px 16px',
        textAlign: 'left',
        width: '100%',
        ...style,
      }}
      {...buttonProps}
    >
      {leading === 'iconContainer' ? <IconContainer color="brand" icon="arrowRight" size={40} /> : null}
      {leading === 'iconPlain' ? <Icon name="arrowRight" width={24} height={24} style={{ color: '#0C6466', flex: '0 0 auto' }} /> : null}
      <span style={{ display: 'grid', flex: 1, gap: 2, minWidth: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 600, lineHeight: '20px' }}>{label}</span>
        <span style={{ color: '#5C5C5C', fontSize: 13, lineHeight: '18px' }}>{supportingText}</span>
      </span>
      <Icon name="arrowRight" width={18} height={18} style={{ color: '#A4A4A4', flex: '0 0 auto' }} />
    </button>
  );
}
