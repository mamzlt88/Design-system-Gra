import type { HTMLAttributes } from 'react';

import { Icon } from './Icon';
import { SideBarItem } from './SideBarItem';
import { UserAvatar } from './UserAvatar';

export type SideBarProps = {
  selectedIndex?: number;
  name?: string;
  detailLabel?: string;
  detailValue?: string;
  firstGroupLabel?: string;
  secondGroupLabel?: string;
  firstLabel?: string;
  secondLabel?: string;
  thirdLabel?: string;
  fourthLabel?: string;
  fifthLabel?: string;
  accordionLabel?: string;
  footerLabel?: string;
  onBack?: () => void;
  onItemSelect?: (index: number) => void;
} & Omit<HTMLAttributes<HTMLElement>, 'children'>;

const colors = {
  header: '#003F3E',
  headerDeep: '#01312F',
  text: '#313131',
  muted: '#5C5C5C',
  divider: '#EEF1F2',
  overlay: '#E6E6E6',
  white: '#FFFFFF',
};

function StatusBar() {
  return (
    <div
      aria-hidden="true"
      style={{
        alignItems: 'center',
        color: colors.white,
        display: 'flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: 9,
        fontWeight: 700,
        justifyContent: 'space-between',
        lineHeight: 1,
        opacity: 0.96,
      }}
    >
      <span>9:41</span>
      <span style={{ alignItems: 'center', display: 'inline-flex', gap: 3 }}>
        <span style={{ border: '1px solid currentColor', borderRadius: 3, display: 'inline-block', height: 6, width: 12 }} />
        <span style={{ backgroundColor: 'currentColor', borderRadius: 999, display: 'inline-block', height: 6, width: 6 }} />
        <span style={{ backgroundColor: 'currentColor', borderRadius: 1, display: 'inline-block', height: 7, width: 12 }} />
      </span>
    </div>
  );
}

export function SideBar({
  selectedIndex,
  name = 'Full Name',
  detailLabel = 'Label 1',
  detailValue = 'Value 1',
  firstGroupLabel = 'Label 1',
  secondGroupLabel = 'Label 2',
  firstLabel = 'Section',
  secondLabel = 'Section',
  thirdLabel = 'Section',
  fourthLabel = 'Section',
  fifthLabel = 'Section',
  accordionLabel = 'Accordion Title',
  footerLabel = 'Section',
  onBack,
  onItemSelect,
  style,
  ...navProps
}: SideBarProps) {
  const labels = [firstLabel, secondLabel, thirdLabel, fourthLabel];

  return (
    <nav
      aria-label="Sidebar navigation"
      data-figma-node-id="9229:6716"
      style={{
        backgroundColor: colors.white,
        boxSizing: 'border-box',
        color: colors.text,
        display: 'flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        height: 486,
        overflow: 'hidden',
        position: 'relative',
        width: 390,
        ...style,
      }}
      {...navProps}
    >
      <div style={{ backgroundColor: colors.white, display: 'flex', flexDirection: 'column', height: '100%', width: 260 }}>
        <header
          style={{
            background: `linear-gradient(135deg, ${colors.header} 0%, ${colors.headerDeep} 100%)`,
            boxSizing: 'border-box',
            color: colors.white,
            minHeight: 136,
            padding: '14px 18px 16px',
          }}
        >
          <StatusBar />
          <div style={{ alignItems: 'flex-start', display: 'flex', justifyContent: 'space-between', marginTop: 18 }}>
            <UserAvatar avatar="3" label={name} name={name} showStar={false} size="xSmall" />
            <button
              aria-label="Go back"
              onClick={onBack}
              style={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: 0,
                borderRadius: 999,
                color: colors.white,
                cursor: 'pointer',
                display: 'inline-flex',
                height: 32,
                justifyContent: 'center',
                padding: 0,
                width: 32,
              }}
              type="button"
            >
              <Icon name="arrowLeft" width={16} height={16} />
            </button>
          </div>
          <div style={{ display: 'grid', gap: 3, marginTop: 12 }}>
            <strong style={{ fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 17, fontWeight: 700, lineHeight: '20px' }}>{name}</strong>
            <span style={{ fontSize: 9, fontWeight: 600, lineHeight: '12px', opacity: 0.86 }}>
              {detailLabel}: {detailValue}
            </span>
          </div>
        </header>

        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: '14px 20px 20px' }}>
          <span style={{ color: colors.muted, fontSize: 9, fontWeight: 600, lineHeight: '13px', marginBottom: 6 }}>{firstGroupLabel}</span>
          <div style={{ display: 'grid', gap: 2 }}>
            {labels.map((label, index) => (
              <SideBarItem
                key={`${label}-${index}`}
                icon="person"
                label={label}
                onClick={() => onItemSelect?.(index)}
                pressedStyle={index === selectedIndex ? 'standard' : 'nA'}
                showBadge={false}
                state={index === selectedIndex ? 'pressed' : 'default'}
              />
            ))}
          </div>

          <div style={{ backgroundColor: colors.divider, height: 1, margin: '14px 0 12px' }} />

          <span style={{ color: colors.muted, fontSize: 9, fontWeight: 600, lineHeight: '13px', marginBottom: 6 }}>{secondGroupLabel}</span>
          <div style={{ display: 'grid', gap: 2 }}>
            <SideBarItem
              icon="person"
              label={fifthLabel}
              onClick={() => onItemSelect?.(4)}
              pressedStyle={selectedIndex === 4 ? 'standard' : 'nA'}
              showBadge={false}
              state={selectedIndex === 4 ? 'pressed' : 'default'}
            />
            <SideBarItem
              icon="globe"
              label={accordionLabel}
              onClick={() => onItemSelect?.(5)}
              pressedStyle={selectedIndex === 5 ? 'standard' : 'nA'}
              showBadge={false}
              state={selectedIndex === 5 ? 'pressed' : 'default'}
              trailingIcon="chevronDown"
            />
          </div>

          <div style={{ backgroundColor: colors.divider, height: 1, marginTop: 38 }} />
          <div style={{ marginTop: 'auto', paddingTop: 18 }}>
            <SideBarItem
              icon="person"
              label={footerLabel}
              onClick={() => onItemSelect?.(6)}
              pressedStyle={selectedIndex === 6 ? 'standard' : 'nA'}
              showBadge={false}
              state={selectedIndex === 6 ? 'pressed' : 'default'}
            />
          </div>
        </div>
      </div>
      <div aria-hidden="true" style={{ backgroundColor: colors.overlay, flex: 1 }} />
    </nav>
  );
}
