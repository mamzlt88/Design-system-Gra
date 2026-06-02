import type { CSSProperties, HTMLAttributes } from 'react';

import { Icon } from './Icon';
import { Logo } from './Logo';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type WebHeaderSize = 'mobile' | 'tabletDesktop';
export type WebHeaderState = 'default' | 'loading';

export type WebHeaderProps = {
  size?: WebHeaderSize;
  state?: WebHeaderState;
  countryLabel?: string;
  languageLabel?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'title'>;

const colors = {
  border: tokens.color.webHeaderBorder,
  skeleton: tokens.color.webHeaderSkeleton,
  text: tokens.color.grey50,
  primary: tokens.color.primary90,
  white: tokens.color.grey00,
};

function Skeleton({ width, height = 12 }: { width: number; height?: number }) {
  return <span aria-hidden="true" style={{ backgroundColor: colors.skeleton, borderRadius: tokens.radius.circle, display: 'inline-block', height, width }} />;
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
          backgroundColor: tokens.color.webHeaderAccent,
          border: `1px solid ${colors.border}`,
          borderRadius: tokens.radius.circle,
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
    fontFamily: tokens.typography.bodyRegular.fontFamily,
    gap: tokens.spacing.lg,
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
