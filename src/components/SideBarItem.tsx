import type { ButtonHTMLAttributes } from 'react';

import { Icon, type IconName } from './Icon';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type SideBarItemState = 'default' | 'pressed';
export type SideBarItemPressedStyle = 'nA' | 'standard' | 'emphasis';

export type SideBarItemProps = {
  state?: SideBarItemState;
  pressedStyle?: SideBarItemPressedStyle;
  label?: string;
  badgeText?: string;
  showBadge?: boolean;
  icon?: IconName;
  trailingIcon?: IconName;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function SideBarItem({
  state = 'default',
  pressedStyle = 'standard',
  label = 'Menu item',
  badgeText = 'BADGE',
  showBadge = true,
  icon = 'person',
  trailingIcon,
  style,
  ...buttonProps
}: SideBarItemProps) {
  const pressed = state === 'pressed';
  const emphasized = pressed && pressedStyle === 'emphasis';
  const standardPressed = pressed && pressedStyle === 'standard';
  const badgeColors = emphasized
    ? { backgroundColor: tokens.color.transparentWhite22, color: tokens.color.grey00 }
    : standardPressed
      ? { backgroundColor: tokens.color.grey00, color: tokens.color.primary90 }
      : { backgroundColor: tokens.color.primary00, color: tokens.color.primary90 };

  return (
    <button
      type="button"
      data-figma-node-id="7878:9372"
      style={{
        alignItems: 'center',
        backgroundColor: pressedStyle === 'nA' ? 'transparent' : pressed ? (emphasized ? tokens.color.primary90 : tokens.color.primary00) : 'transparent',
        border: '1px solid transparent',
        borderRadius: tokens.radius.sm,
        color: emphasized ? tokens.color.grey00 : pressed ? tokens.color.primary90 : tokens.color.grey60,
        cursor: 'pointer',
        display: 'flex',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        fontSize: tokens.typography.bodySmallRegular.fontSize,
        fontWeight: pressed ? 700 : 600,
        gap: tokens.spacing.sm,
        lineHeight: '16px',
        minHeight: 28,
        padding: '4px 8px',
        textAlign: 'left',
        width: '100%',
        ...style,
      }}
      {...buttonProps}
    >
      <Icon name={icon} width={14} height={14} />
      <span style={{ flex: 1 }}>{label}</span>
      {showBadge ? (
        <span
          style={{
            ...badgeColors,
            borderRadius: tokens.radius.circle,
            flex: '0 0 auto',
            fontSize: 9,
            fontWeight: 700,
            lineHeight: '12px',
            padding: '2px 6px',
            textTransform: 'uppercase',
          }}
        >
          {badgeText}
        </span>
      ) : null}
      {trailingIcon ? <Icon name={trailingIcon} width={12} height={12} /> : null}
    </button>
  );
}
