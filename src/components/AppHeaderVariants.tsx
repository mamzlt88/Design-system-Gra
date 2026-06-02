import { Fragment, type CSSProperties } from 'react';

import { Button } from './Button';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { UserAvatar } from './UserAvatar';
import type { AppHeaderProps, AppHeaderSize } from './AppHeader';
import { componentTokens as tokens } from '../tokens/componentTokens';

export const appHeaderColors = {
  header: tokens.color.headerDark,
  headerDark: tokens.color.headerDark,
  headerLight: tokens.color.primary90,
  headerGradient: tokens.gradient.appHeader,
  text: tokens.color.grey00,
  mutedText: tokens.color.transparentWhite78,
  chip: tokens.color.transparentWhite16,
  blush: tokens.color.appHeaderBlush,
  cyan: tokens.color.appHeaderCyan,
};

export const appHeaderBaseStyle: CSSProperties = {
  background: appHeaderColors.headerGradient,
  backgroundColor: appHeaderColors.header,
  boxSizing: 'border-box',
  color: appHeaderColors.text,
  display: 'grid',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  overflow: 'hidden',
  position: 'relative',
  width: 390,
};

export const appHeaderDimensions: Record<AppHeaderSize, { minHeight: number; radius: string; paddingBottom: number }> = {
  large: { minHeight: 148, radius: '0', paddingBottom: 24 },
  medium: { minHeight: 104, radius: '0', paddingBottom: 16 },
  mediumRounded: { minHeight: 104, radius: '0 0 12px 12px', paddingBottom: 16 },
  small: { minHeight: 56, radius: '0', paddingBottom: 12 },
};

const helpIllustrationSrc = new URL('../assets/illustrations/Help Illustration.svg', import.meta.url).href;

const topIconStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 0,
  color: appHeaderColors.text,
  display: 'inline-flex',
  height: 24,
  justifyContent: 'center',
  padding: tokens.spacing.none,
  width: 24,
};

function LabelPill({ label, value }: { label: string; value: string }) {
  return (
    <span style={{ backgroundColor: appHeaderColors.chip, borderRadius: tokens.radius.xs, color: appHeaderColors.text, display: 'inline-flex', fontSize: 11, gap: tokens.spacing.xxs, lineHeight: tokens.typography.bodySmallRegular.lineHeight, padding: '4px 8px' }}>
      <strong>{label}</strong>
      <span>{value}</span>
    </span>
  );
}

function TitleLabels({
  title,
  label1,
  label2,
  value1,
  value2,
  showTitle = true,
}: {
  title: string;
  label1: string;
  label2: string;
  value1: string;
  value2: string;
  showTitle?: boolean;
}) {
  return (
    <div style={{ display: 'grid', gap: tokens.spacing.sm, padding: '0 24px' }}>
      {showTitle ? <h1 style={{ fontSize: 18, fontWeight: 700, lineHeight: '24px', margin: 0 }}>{title}</h1> : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: tokens.spacing.xxs }}>
        <LabelPill label={label1} value={value1} />
        <LabelPill label={label2} value={value2} />
      </div>
    </div>
  );
}

function TopBar({
  left = 'menu',
  right = true,
  counter,
  showLanguage = false,
  minHeight = 36,
  onBack,
}: {
  left?: 'menu' | 'back' | 'none';
  right?: boolean;
  counter?: string;
  showLanguage?: boolean;
  minHeight?: number;
  onBack?: () => void;
}) {
  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', minHeight, padding: '0 18px' }}>
      {left === 'back' ? (
        <button aria-label="Go back" onClick={onBack} style={topIconStyle} type="button">
          <Icon name="arrowLeft" width={18} height={18} />
        </button>
      ) : left === 'menu' ? (
        <span aria-hidden="true" style={topIconStyle}>
          <Icon name="menu" width={18} height={18} />
        </span>
      ) : (
        <span />
      )}
      {right ? (
        <div style={{ alignItems: 'center', display: 'inline-flex', gap: tokens.spacing.xxl }}>
          {showLanguage ? (
            <span style={{ alignItems: 'center', display: 'inline-flex', fontSize: tokens.typography.bodySmallRegular.fontSize, fontWeight: 700, gap: tokens.spacing.xxs }}>
              Eng
              <Icon name="chevronDown" width={14} height={14} />
            </span>
          ) : null}
          <Icon name="bell" width={18} height={18} />
          {counter ? <span style={{ fontSize: 13, fontWeight: 700 }}>{counter}</span> : null}
          <Icon name="helpCircle" width={18} height={18} />
        </div>
      ) : null}
    </div>
  );
}

function SearchBar() {
  return (
    <div style={{ alignItems: 'center', backgroundColor: appHeaderColors.headerLight, borderRadius: tokens.radius.sm, color: appHeaderColors.mutedText, display: 'flex', gap: tokens.spacing.sm, height: 36, margin: '10px 18px 0', padding: '0 12px' }}>
      <Icon name="search" width={16} height={16} />
      <span style={{ fontSize: 13 }}>Placeholder</span>
    </div>
  );
}

function Stepper() {
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  return (
    <div style={{ display: 'grid', gap: tokens.spacing.sm, padding: '8px 24px 4px' }}>
      <div style={{ alignItems: 'center', display: 'grid', gridTemplateColumns: '20px 1fr 20px 1fr 20px' }}>
        {steps.map((step, index) => (
          <Fragment key={step}>
            <span
              aria-label={step}
              style={{
                alignItems: 'center',
                backgroundColor: index === 0 ? tokens.color.grey00 : appHeaderColors.headerLight,
                borderRadius: tokens.radius.circle,
                color: index === 0 ? appHeaderColors.header : tokens.color.grey00,
                display: 'inline-flex',
                fontSize: 11,
                fontWeight: 700,
                height: 20,
                justifyContent: 'center',
                width: 20,
              }}
            >
              {index + 1}
            </span>
            {index < steps.length - 1 ? <span style={{ backgroundColor: appHeaderColors.headerLight, height: 2 }} /> : null}
          </Fragment>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {steps.map((step) => (
          <span key={step} style={{ color: appHeaderColors.mutedText, fontSize: 11 }}>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeaderIllustration() {
  return (
    <img
      alt=""
      aria-hidden="true"
      src={helpIllustrationSrc}
      style={{ alignSelf: 'start', display: 'block', height: 159, justifySelf: 'end', objectFit: 'contain', width: 134 }}
    />
  );
}

function InformativeMediumTitleBar({ title }: { title: string }) {
  return (
    <div style={{ alignItems: 'center', display: 'flex', gap: tokens.spacing.xxl, height: 40, padding: '0 16px' }}>
      <IconButton ariaLabel="Open menu" icon="menu" variant="filled" />
      <h1
        style={{
          color: appHeaderColors.text,
          fontFamily: tokens.typography.subHeadingSemiBold.fontFamily,
          fontSize: tokens.typography.headingBold.fontSize,
          fontWeight: 700,
          letterSpacing: tokens.typography.bodyRegular.letterSpacing,
          lineHeight: tokens.typography.headingBold.lineHeight,
          margin: 0,
          textAlign: 'center',
          width: 246,
        }}
      >
        {title}
      </h1>
    </div>
  );
}

function LoanRequestInfo({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ alignItems: 'center', display: 'flex', height: 18, width: '100%' }}>
      <span style={{ color: tokens.color.grey10, fontFamily: tokens.typography.bodyRegular.fontFamily, fontSize: tokens.typography.bodyRegular.fontSize, fontWeight: 400, letterSpacing: tokens.typography.bodyRegular.letterSpacing, lineHeight: tokens.typography.bodyRegular.lineHeight }}>
        {label.endsWith(' ') ? label : `${label} `}
      </span>
      <span style={{ color: appHeaderColors.text, fontFamily: tokens.typography.bodyRegular.fontFamily, fontSize: tokens.typography.bodyRegular.fontSize, fontWeight: 400, letterSpacing: tokens.typography.bodyRegular.letterSpacing, lineHeight: tokens.typography.bodyRegular.lineHeight }}>
        |
      </span>
      <span style={{ color: appHeaderColors.text, fontFamily: tokens.typography.bodyRegular.fontFamily, fontSize: tokens.typography.bodyRegular.fontSize, fontWeight: 600, letterSpacing: tokens.typography.bodyRegular.letterSpacing, lineHeight: tokens.typography.bodyRegular.lineHeight }}>
        {value}
      </span>
    </div>
  );
}

export function StandardHeader(props: Required<Pick<AppHeaderProps, 'title1' | 'label1' | 'label2' | 'value1' | 'value2'>> & { size: AppHeaderSize; showLanguage?: boolean }) {
  return (
    <>
      <TopBar showLanguage={props.showLanguage} />
      {props.size !== 'small' ? <TitleLabels {...props} title={props.title1} /> : null}
    </>
  );
}

export function InformativeHeader({
  size,
  title1,
  title2,
  label1,
  value1,
  description,
  mainMessage,
  name,
  business,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  onBack,
}: Required<Pick<AppHeaderProps, 'title1' | 'title2' | 'label1' | 'value1' | 'description' | 'mainMessage' | 'name' | 'business' | 'primaryLabel' | 'secondaryLabel'>> & {
  size: AppHeaderSize;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onBack?: () => void;
}) {
  if (size === 'medium') {
    return (
      <>
        <InformativeMediumTitleBar title={title1} />
        <div style={{ alignItems: 'stretch', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 134px', marginTop: tokens.spacing.lg, minHeight: 159, padding: '0 16px' }}>
          <div style={{ alignContent: 'center', display: 'grid', gap: tokens.spacing.none, minHeight: 159, paddingLeft: tokens.spacing.xxs }}>
            <h1 style={{ fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: tokens.typography.headingBold.fontSize, fontWeight: 700, letterSpacing: tokens.typography.bodyRegular.letterSpacing, lineHeight: tokens.typography.headingBold.lineHeight, margin: 0, textAlign: 'left' }}>{title2}</h1>
            <strong style={{ fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: tokens.typography.displaySmallBold.fontSize, letterSpacing: tokens.typography.bodyRegular.letterSpacing, lineHeight: tokens.typography.displaySmallBold.lineHeight, textAlign: 'left' }}>{mainMessage}</strong>
          </div>
          <HeaderIllustration />
        </div>
      </>
    );
  }

  if (size === 'mediumRounded') {
    return (
      <div style={{ display: 'flex', gap: tokens.spacing.lg, minHeight: 133, padding: '0 16px' }}>
        <IconButton ariaLabel="Go back" darkMode icon="arrowLeft" onClick={onBack} variant="standard" />
        <div style={{ display: 'grid', flex: 1, gap: tokens.spacing['2xl'], paddingRight: tokens.spacing.sm }}>
          <div style={{ alignItems: 'start', display: 'flex', gap: tokens.spacing.xxl, minHeight: 69 }}>
            <UserAvatar avatar="1" label={name} size="small" type="avatar" />
            <div style={{ display: 'grid', flex: 1, gap: tokens.spacing.lg }}>
              <div style={{ display: 'grid', gap: tokens.spacing.xxs }}>
                <strong style={{ color: appHeaderColors.text, fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: tokens.typography.subHeadingSemiBold.fontSize, fontWeight: 700, letterSpacing: tokens.typography.bodyRegular.letterSpacing, lineHeight: tokens.typography.subHeadingSemiBold.lineHeight }}>{name}</strong>
                <span style={{ color: tokens.color.grey10, fontFamily: tokens.typography.bodyRegular.fontFamily, fontSize: tokens.typography.bodySmallRegular.fontSize, fontWeight: 600, letterSpacing: tokens.typography.bodyRegular.letterSpacing, lineHeight: tokens.typography.bodySmallRegular.lineHeight }}>{business}</span>
              </div>
              <LoanRequestInfo label={label1} value={value1} />
            </div>
          </div>
          <div style={{ alignItems: 'center', display: 'flex', gap: tokens.spacing.lg, height: 44 }}>
            <Button darkMode label={secondaryLabel} onClick={onSecondaryClick} style={{ boxSizing: 'border-box', color: tokens.color.red80, height: 44, minHeight: 44, width: 143 }} tone="red" variant="filled" />
            <Button darkMode label={primaryLabel} onClick={onPrimaryClick} style={{ boxSizing: 'border-box', height: 44, minHeight: 44, width: 143 }} tone="primary" variant="filled" />
          </div>
        </div>
      </div>
    );
  }

  if (size === 'small') {
    return (
      <>
        <TopBar counter="1 of 8" left="back" onBack={onBack} />
        <div style={{ alignItems: 'center', display: 'flex', gap: tokens.spacing.sm, padding: '0 24px' }}>
          <h1 style={{ flex: 1, fontSize: tokens.typography.subHeadingSemiBold.fontSize, lineHeight: '22px', margin: 0 }}>{title1}</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar />
      <div style={{ display: 'grid', gap: tokens.spacing.sm, padding: '0 24px' }}>
        <h1 style={{ fontSize: 18, lineHeight: '24px', margin: 0 }}>{title1}</h1>
        <h2 style={{ fontSize: tokens.typography.subHeadingSemiBold.fontSize, lineHeight: '22px', margin: 0 }}>{title2}</h2>
        <p style={{ color: appHeaderColors.mutedText, fontSize: 13, lineHeight: '18px', margin: 0, maxWidth: 310 }}>{description}</p>
      </div>
    </>
  );
}

export function NavigationalHeader({
  size,
  title1,
  counter,
  onBack,
}: {
  size: AppHeaderSize;
  title1: string;
  counter: string;
  onBack?: () => void;
}) {
  if (size === 'mediumRounded') {
    return (
      <>
        <TopBar />
        <div style={{ padding: '0 24px' }}>
          <h1 style={{ fontSize: tokens.typography.subHeadingSemiBold.fontSize, lineHeight: '22px', margin: 0 }}>{title1}</h1>
        </div>
        <SearchBar />
      </>
    );
  }

  return (
    <>
      <Stepper />
      <TopBar counter={size === 'large' ? undefined : counter} left="back" onBack={onBack} />
      <div style={{ padding: '0 24px' }}>
        <h1 style={{ fontSize: tokens.typography.subHeadingSemiBold.fontSize, lineHeight: '22px', margin: 0 }}>{title1}</h1>
      </div>
    </>
  );
}

export function ProfileHeader({
  size,
  name,
  label1,
  value1,
  onBack,
}: {
  size: AppHeaderSize;
  name: string;
  label1: string;
  value1: string;
  onBack?: () => void;
}) {
  if (size === 'medium') {
    return (
      <>
        <TopBar left="none" right={false} />
        <div style={{ alignItems: 'center', display: 'grid', gap: tokens.spacing.lg, gridTemplateColumns: '64px 1fr 40px', padding: '0 24px 18px' }}>
          <UserAvatar label={name} size="medium" type="initials" />
          <div style={{ display: 'grid', gap: tokens.spacing.xxs }}>
            <strong style={{ fontSize: tokens.typography.subHeadingSemiBold.fontSize }}>{name}</strong>
            <LabelPill label={label1} value={value1} />
          </div>
          <IconButton ariaLabel="Go back" icon="arrowLeft" onClick={onBack} variant="standardInverse" />
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar />
      <div style={{ alignItems: 'end', display: 'grid', minHeight: 120, position: 'relative' }}>
        <div
          aria-hidden="true"
          style={{
            backgroundColor: tokens.color.grey00,
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            bottom: -40,
            height: 118,
            left: -36,
            position: 'absolute',
            width: 462,
          }}
        />
        <div style={{ display: 'grid', gap: tokens.spacing.xs, justifyItems: 'center', paddingBottom: tokens.spacing.sm, position: 'relative', zIndex: 1 }}>
          <UserAvatar label={name} size="big" type="initials" />
          <strong style={{ color: appHeaderColors.header, fontSize: 13 }}>{name}</strong>
        </div>
      </div>
    </>
  );
}
