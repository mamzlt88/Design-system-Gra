import type { HTMLAttributes } from 'react';

import { Logo } from './Logo';
import { SideBarItem } from './SideBarItem';

export type SideBarProps = {
  selectedIndex?: number;
  firstLabel?: string;
  secondLabel?: string;
  thirdLabel?: string;
  fourthLabel?: string;
  onItemSelect?: (index: number) => void;
} & Omit<HTMLAttributes<HTMLElement>, 'children'>;

export function SideBar({
  selectedIndex = 0,
  firstLabel = 'Dashboard',
  secondLabel = 'Payments',
  thirdLabel = 'Approvals',
  fourthLabel = 'Resources',
  onItemSelect,
  style,
  ...navProps
}: SideBarProps) {
  const labels = [firstLabel, secondLabel, thirdLabel, fourthLabel];

  return (
    <nav
      aria-label="Sidebar navigation"
      data-figma-node-id="9275:1994"
      style={{
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E6E6E6',
        boxSizing: 'border-box',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        gap: 24,
        minHeight: 420,
        padding: 24,
        width: 280,
        ...style,
      }}
      {...navProps}
    >
      <Logo type="full" />
      <div style={{ display: 'grid', gap: 8 }}>
        {labels.map((label, index) => (
          <SideBarItem
            key={label}
            label={label}
            onClick={() => onItemSelect?.(index)}
            pressedStyle={index === selectedIndex ? 'emphasis' : 'standard'}
            state={index === selectedIndex ? 'pressed' : 'default'}
          />
        ))}
      </div>
    </nav>
  );
}
