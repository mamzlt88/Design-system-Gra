import type { HTMLAttributes } from 'react';

import { Icon } from './Icon';
import { SideBarItem } from './SideBarItem';
import { UserAvatar } from './UserAvatar';
import { componentTokens as tokens } from '../tokens/componentTokens';

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
  header: tokens.color.sidebarStart,
  headerDeep: tokens.color.sidebarEnd,
  text: tokens.color.grey60,
  muted: tokens.color.grey40,
  divider: tokens.color.sidebarSurface,
  overlay: tokens.color.grey10,
  white: tokens.color.grey00,
};

function StatusBar() {
  return (
    <div
      aria-hidden="true"
      style={{
        alignItems: 'center',
        color: colors.white,
        display: 'flex',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        fontSize: 9,
        fontWeight: 700,
        justifyContent: 'space-between',
        lineHeight: 1,
        opacity: 0.96,
      }}
    >
      <span>9:41</span>
      <span style={{ alignItems: 'center', display: 'inline-flex', gap: tokens.spacing.xxxs }}>
        <span style={{ border: '1px solid currentColor', borderRadius: 3, display: 'inline-block', height: 6, width: 12 }} />
        <span style={{ backgroundColor: 'currentColor', borderRadius: tokens.radius.circle, display: 'inline-block', height: 6, width: 6 }} />
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
        fontFamily: tokens.typography.bodyRegular.fontFamily,
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
          <div style={{ alignItems: 'flex-start', display: 'flex', justifyContent: 'space-between', marginTop: tokens.spacing.xxxl }}>
            <UserAvatar avatar="3" label={name} name={name} showStar={false} size="xSmall" />
            <button
              aria-label="Go back"
              onClick={onBack}
              style={{
                alignItems: 'center',
                backgroundColor: tokens.color.transparentWhite12,
                border: 0,
                borderRadius: tokens.radius.circle,
                color: colors.white,
                cursor: 'pointer',
                display: 'inline-flex',
                height: 32,
                justifyContent: 'center',
                padding: tokens.spacing.none,
                width: 32,
              }}
              type="button"
            >
              <Icon name="arrowLeft" width={16} height={16} />
            </button>
          </div>
          <div style={{ display: 'grid', gap: tokens.spacing.xxxs, marginTop: tokens.spacing.lg }}>
            <strong style={{ fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: 17, fontWeight: 700, lineHeight: tokens.typography.subHeadingSemiBold.lineHeight }}>{name}</strong>
            <span style={{ fontSize: 9, fontWeight: 600, lineHeight: '12px', opacity: 0.86 }}>
              {detailLabel}: {detailValue}
            </span>
          </div>
        </header>

        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: '14px 20px 20px' }}>
          <span style={{ color: colors.muted, fontSize: 9, fontWeight: 600, lineHeight: '13px', marginBottom: tokens.spacing.xs }}>{firstGroupLabel}</span>
          <div style={{ display: 'grid', gap: tokens.spacing.xxxs }}>
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

          <span style={{ color: colors.muted, fontSize: 9, fontWeight: 600, lineHeight: '13px', marginBottom: tokens.spacing.xs }}>{secondGroupLabel}</span>
          <div style={{ display: 'grid', gap: tokens.spacing.xxxs }}>
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

          <div style={{ backgroundColor: colors.divider, height: 1, marginTop: tokens.spacing['5xl'] - tokens.spacing.xxxs }} />
          <div style={{ marginTop: 'auto', paddingTop: tokens.spacing.xxxl }}>
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
