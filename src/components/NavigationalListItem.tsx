import type { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Icon } from './Icon';
import { IconContainer } from './IconContainer';
import { componentTokens as tokens } from '../tokens/componentTokens';

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
        backgroundColor: pressed ? tokens.color.primary00 : tokens.color.grey00,
        border: `1px solid ${tokens.color.grey10}`,
        borderRadius: tokens.radius.md,
        boxSizing: 'border-box',
        color: tokens.color.grey80,
        cursor: 'pointer',
        display: 'flex',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        gap: tokens.spacing.lg,
        minHeight: 64,
        padding: '12px 16px',
        textAlign: 'left',
        width: '100%',
        ...style,
      }}
      {...buttonProps}
    >
      {leading === 'iconContainer' ? <IconContainer color="brand" icon="arrowRight" size={40} /> : null}
      {leading === 'iconPlain' ? <Icon name="arrowRight" width={24} height={24} style={{ color: tokens.color.primary90, flex: '0 0 auto' }} /> : null}
      <span style={{ display: 'grid', flex: 1, gap: tokens.spacing.xxxs, minWidth: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 600, lineHeight: tokens.typography.subHeadingSemiBold.lineHeight }}>{label}</span>
        <span style={{ color: tokens.color.grey40, fontSize: 13, lineHeight: '18px' }}>{supportingText}</span>
      </span>
      <Icon name="arrowRight" width={18} height={18} style={{ color: tokens.color.grey30, flex: '0 0 auto' }} />
    </button>
  );
}
