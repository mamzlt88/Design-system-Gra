import type { CSSProperties, HTMLAttributes } from 'react';

import { Icon } from './Icon';
import { Logo } from './Logo';

export type WebHeaderSize = 'mobile' | 'tabletDesktop';
export type WebHeaderState = 'default' | 'loading';

export type WebHeaderProps = {
  size?: WebHeaderSize;
  state?: WebHeaderState;
  countryLabel?: string;
  languageLabel?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'title'>;

const colors = {
  border: '#CFE1F1',
  skeleton: '#E2E6E8',
  text: '#434343',
  primary: '#0C6466',
  white: '#FFFFFF',
};

function Skeleton({ width, height = 12 }: { width: number; height?: number }) {
  return <span aria-hidden="true" style={{ backgroundColor: colors.skeleton, borderRadius: 999, display: 'inline-block', height, width }} />;
}

function HeaderLogo({ mobile }: { mobile: boolean }) {
  return (
    <span style={{ alignItems: 'center', display: 'inline-flex', height: mobile ? 22 : 30, overflow: 'hidden', width: mobile ? 30 : 116 }}>
      <span style={{ display: 'inline-flex', transform: `scale(${mobile ? 0.46 : 0.62})`, transformOrigin: 'left center' }}>
        <Logo type={mobile ? 'iconOnly' : 'full'} />
      </span>
    </span>
  );
}

function LanguageControl({
  countryLabel,
  languageLabel,
  mobile,
}: {
  countryLabel: string;
  languageLabel: string;
  mobile: boolean;
}) {
  return (
    <span
      aria-label={`Language: ${languageLabel}`}
      style={{
        alignItems: 'center',
        color: colors.text,
        display: 'inline-flex',
        fontSize: mobile ? 10 : 12,
        fontWeight: 600,
        gap: mobile ? 4 : 6,
        lineHeight: 1,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          alignItems: 'center',
          backgroundColor: '#EEF4F7',
          border: `1px solid ${colors.border}`,
          borderRadius: 999,
          color: colors.primary,
          display: 'inline-flex',
          fontSize: mobile ? 8 : 9,
          fontWeight: 700,
          height: mobile ? 16 : 18,
          justifyContent: 'center',
          width: mobile ? 16 : 18,
        }}
      >
        {countryLabel}
      </span>
      {languageLabel}
      <Icon name="chevronDown" width={mobile ? 12 : 14} height={mobile ? 12 : 14} />
    </span>
  );
}

export function WebHeader({
  size = 'tabletDesktop',
  state = 'default',
  countryLabel = 'US',
  languageLabel = 'Eng',
  style,
  ...headerProps
}: WebHeaderProps) {
  const mobile = size === 'mobile';
  const loading = state === 'loading';

  const containerStyle: CSSProperties = {
    alignItems: 'center',
    backgroundColor: colors.white,
    border: `1px solid ${colors.border}`,
    boxSizing: 'border-box',
    display: 'flex',
    fontFamily: 'Open Sans, Arial, sans-serif',
    gap: 12,
    height: mobile ? 34 : 42,
    justifyContent: 'space-between',
    padding: mobile ? '5px 10px' : '6px 18px',
    width: mobile ? 390 : 790,
    ...style,
  };

  return (
    <header data-figma-node-id="7994:1560" style={containerStyle} {...headerProps}>
      {loading ? <Skeleton width={mobile ? 86 : 148} /> : <HeaderLogo mobile={mobile} />}
      {loading ? <Skeleton width={mobile ? 64 : 88} /> : <LanguageControl countryLabel={countryLabel} languageLabel={languageLabel} mobile={mobile} />}
    </header>
  );
}
