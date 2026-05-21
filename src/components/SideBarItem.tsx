import type { ButtonHTMLAttributes } from 'react';

import { Icon, type IconName } from './Icon';

export type SideBarItemState = 'default' | 'pressed';
export type SideBarItemPressedStyle = 'nA' | 'standard' | 'emphasis';

export type SideBarItemProps = {
  state?: SideBarItemState;
  pressedStyle?: SideBarItemPressedStyle;
  label?: string;
  icon?: IconName;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function SideBarItem({
  state = 'default',
  pressedStyle = 'standard',
  label = 'Menu item',
  icon = 'settings',
  style,
  ...buttonProps
}: SideBarItemProps) {
  const pressed = state === 'pressed';
  const emphasized = pressed && pressedStyle === 'emphasis';

  return (
    <button
      type="button"
      data-figma-node-id="7878:9372"
      style={{
        alignItems: 'center',
        backgroundColor: pressedStyle === 'nA' ? 'transparent' : pressed ? (emphasized ? '#0C6466' : '#EDF6F6') : 'transparent',
        border: '1px solid transparent',
        borderRadius: 8,
        color: emphasized ? '#FFFFFF' : pressed ? '#0C6466' : '#434343',
        cursor: 'pointer',
        display: 'flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: 14,
        fontWeight: pressed ? 700 : 600,
        gap: 12,
        minHeight: 44,
        padding: '10px 12px',
        textAlign: 'left',
        width: '100%',
        ...style,
      }}
      {...buttonProps}
    >
      <Icon name={icon} width={20} height={20} />
      <span>{label}</span>
    </button>
  );
}
