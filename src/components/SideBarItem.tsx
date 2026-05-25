import type { ButtonHTMLAttributes } from 'react';

import { Icon, type IconName } from './Icon';

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
    ? { backgroundColor: 'rgba(255, 255, 255, 0.22)', color: '#FFFFFF' }
    : standardPressed
      ? { backgroundColor: '#FFFFFF', color: '#0C6466' }
      : { backgroundColor: '#EDF6F6', color: '#0C6466' };

  return (
    <button
      type="button"
      data-figma-node-id="7878:9372"
      style={{
        alignItems: 'center',
        backgroundColor: pressedStyle === 'nA' ? 'transparent' : pressed ? (emphasized ? '#0C6466' : '#EDF6F6') : 'transparent',
        border: '1px solid transparent',
        borderRadius: 6,
        color: emphasized ? '#FFFFFF' : pressed ? '#0C6466' : '#313131',
        cursor: 'pointer',
        display: 'flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: 12,
        fontWeight: pressed ? 700 : 600,
        gap: 8,
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
            borderRadius: 999,
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
