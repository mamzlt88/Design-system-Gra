import { Fragment, type CSSProperties, type HTMLAttributes } from 'react';

import { Button } from './Button';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { UserAvatar } from './UserAvatar';

export type AppHeaderSize = 'large' | 'medium' | 'mediumRounded' | 'small';
export type AppHeaderType = 'standard' | 'informative' | 'navigational' | 'profile';

export type AppHeaderProps = {
  size?: AppHeaderSize;
  type?: AppHeaderType;
  title1?: string;
  title2?: string;
  label1?: string;
  label2?: string;
  value1?: string;
  value2?: string;
  description?: string;
  mainMessage?: string;
  name?: string;
  business?: string;
  counter?: string;
  notice?: string;
  showNotice?: boolean;
  showLanguage?: boolean;
  onBack?: () => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'title'>;

const colors = {
  header: '#023536',
  headerDark: '#023536',
  headerLight: '#0C6466',
  headerGradient: 'linear-gradient(180deg, #0A5253 0%, #023536 100%)',
  text: '#FFFFFF',
  mutedText: 'rgba(255, 255, 255, 0.78)',
  chip: 'rgba(255, 255, 255, 0.16)',
  chipStrong: 'rgba(255, 255, 255, 0.24)',
  blush: '#FFD8D1',
  cyan: '#D8F7F2',
};

const baseStyle: CSSProperties = {
  background: colors.headerGradient,
  backgroundColor: colors.header,
  boxSizing: 'border-box',
  color: colors.text,
  display: 'grid',
  fontFamily: 'Open Sans, Arial, sans-serif',
  overflow: 'hidden',
  position: 'relative',
  width: 390,
};

const topIconStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 0,
  color: colors.text,
  display: 'inline-flex',
  height: 24,
  justifyContent: 'center',
  padding: 0,
  width: 24,
};

const dimensions: Record<AppHeaderSize, { minHeight: number; radius: string; paddingBottom: number }> = {
  large: { minHeight: 148, radius: '0', paddingBottom: 24 },
  medium: { minHeight: 104, radius: '0', paddingBottom: 16 },
  mediumRounded: { minHeight: 104, radius: '0 0 12px 12px', paddingBottom: 16 },
  small: { minHeight: 56, radius: '0', paddingBottom: 12 },
};

function StatusBar() {
  return (
    <div style={{ alignItems: 'center', display: 'flex', fontSize: 12, fontWeight: 600, height: 24, justifyContent: 'space-between', padding: '0 18px' }}>
      <span>9:41</span>
      <span aria-hidden="true" style={{ alignItems: 'center', display: 'inline-flex', gap: 5 }}>
        <span style={{ display: 'inline-flex', gap: 2 }}>
          {[4, 6, 8].map((height) => (
            <span key={height} style={{ backgroundColor: colors.text, borderRadius: 1, height, width: 3 }} />
          ))}
        </span>
        <span style={{ border: `1.5px solid ${colors.text}`, borderRadius: 999, height: 10, width: 10 }} />
        <span style={{ border: `1.5px solid ${colors.text}`, borderRadius: 2, height: 9, width: 18 }} />
      </span>
    </div>
  );
}

function LabelPill({ label, value }: { label: string; value: string }) {
  return (
    <span style={{ backgroundColor: colors.chip, borderRadius: 4, color: colors.text, display: 'inline-flex', fontSize: 11, gap: 2, lineHeight: '16px', padding: '1px 5px' }}>
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
    <div style={{ display: 'grid', gap: 8, padding: '0 24px' }}>
      {showTitle ? <h1 style={{ fontSize: 18, fontWeight: 700, lineHeight: '24px', margin: 0 }}>{title}</h1> : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
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
  onBack,
}: {
  left?: 'menu' | 'back' | 'none';
  right?: boolean;
  counter?: string;
  showLanguage?: boolean;
  onBack?: () => void;
}) {
  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', minHeight: 36, padding: '0 18px' }}>
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
        <div style={{ alignItems: 'center', display: 'inline-flex', gap: 16 }}>
          {showLanguage ? (
            <span style={{ alignItems: 'center', display: 'inline-flex', fontSize: 12, fontWeight: 700, gap: 4 }}>
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
    <div style={{ alignItems: 'center', backgroundColor: colors.headerLight, borderRadius: 6, color: colors.mutedText, display: 'flex', gap: 8, height: 36, margin: '10px 18px 0', padding: '0 12px' }}>
      <Icon name="search" width={16} height={16} />
      <span style={{ fontSize: 13 }}>Placeholder</span>
    </div>
  );
}

function Stepper() {
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  return (
    <div style={{ display: 'grid', gap: 8, padding: '8px 24px 4px' }}>
      <div style={{ alignItems: 'center', display: 'grid', gridTemplateColumns: '20px 1fr 20px 1fr 20px' }}>
        {steps.map((step, index) => (
          <Fragment key={step}>
            <span
              aria-label={step}
              style={{
                alignItems: 'center',
                backgroundColor: index === 0 ? '#FFFFFF' : colors.headerLight,
                borderRadius: 999,
                color: index === 0 ? colors.header : '#FFFFFF',
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
            {index < steps.length - 1 ? <span style={{ backgroundColor: colors.headerLight, height: 2 }} /> : null}
          </Fragment>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {steps.map((step) => (
          <span key={step} style={{ color: colors.mutedText, fontSize: 11 }}>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeaderIllustration() {
  return (
    <div aria-hidden="true" style={{ alignSelf: 'end', height: 84, justifySelf: 'end', position: 'relative', width: 90 }}>
      <span style={{ backgroundColor: '#EAF6FF', borderRadius: '44px 44px 12px 12px', bottom: 0, height: 62, left: 18, position: 'absolute', width: 54 }} />
      <span style={{ backgroundColor: '#FFD3B6', borderRadius: 999, height: 26, left: 32, position: 'absolute', top: 4, width: 26 }} />
      <span style={{ backgroundColor: '#141414', borderRadius: '999px 999px 999px 0', height: 36, left: 24, position: 'absolute', top: 0, width: 36 }} />
      <span style={{ backgroundColor: colors.chipStrong, borderRadius: 4, height: 22, left: 0, position: 'absolute', top: 24, width: 32 }} />
    </div>
  );
}

function StandardHeader(props: Required<Pick<AppHeaderProps, 'title1' | 'label1' | 'label2' | 'value1' | 'value2'>> & { size: AppHeaderSize; showLanguage?: boolean }) {
  return (
    <>
      <TopBar showLanguage={props.showLanguage} />
      {props.size !== 'small' ? <TitleLabels {...props} title={props.title1} /> : null}
    </>
  );
}

function InformativeHeader({
  size,
  title1,
  title2,
  label1,
  label2,
  value1,
  value2,
  description,
  mainMessage,
  name,
  business,
  onPrimaryClick,
  onSecondaryClick,
  onBack,
}: Required<Pick<AppHeaderProps, 'title1' | 'title2' | 'label1' | 'label2' | 'value1' | 'value2' | 'description' | 'mainMessage' | 'name' | 'business'>> & {
  size: AppHeaderSize;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onBack?: () => void;
}) {
  if (size === 'medium') {
    return (
      <>
        <TopBar />
        <div style={{ alignItems: 'end', display: 'grid', gap: 12, gridTemplateColumns: '1fr 104px', padding: '0 24px' }}>
          <div style={{ display: 'grid', gap: 6 }}>
            <h1 style={{ fontSize: 16, lineHeight: '22px', margin: 0 }}>{title2}</h1>
            <strong style={{ fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 22, lineHeight: '28px' }}>{mainMessage}</strong>
          </div>
          <HeaderIllustration />
        </div>
      </>
    );
  }

  if (size === 'mediumRounded') {
    return (
      <>
        <TopBar />
        <div style={{ alignItems: 'center', display: 'grid', gap: 12, gridTemplateColumns: '52px 1fr', padding: '0 24px' }}>
          <UserAvatar label={name} size="small" type="initials" />
          <div style={{ display: 'grid', gap: 3 }}>
            <strong style={{ fontSize: 14 }}>{name}</strong>
            <span style={{ color: colors.mutedText, fontSize: 12 }}>{business}</span>
            <LabelPill label={label1} value={value1} />
          </div>
        </div>
        <div style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 1fr', padding: '10px 24px 0' }}>
          <Button label="Button" onClick={onSecondaryClick} tone="red" variant="filled" />
          <Button label="Button" onClick={onPrimaryClick} darkMode tone="primary" variant="filled" />
        </div>
      </>
    );
  }

  if (size === 'small') {
    return (
      <>
        <TopBar counter="1 of 8" left="back" onBack={onBack} />
        <div style={{ alignItems: 'center', display: 'flex', gap: 8, padding: '0 24px' }}>
          <h1 style={{ flex: 1, fontSize: 16, lineHeight: '22px', margin: 0 }}>{title1}</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar />
      <div style={{ display: 'grid', gap: 8, padding: '0 24px' }}>
        <h1 style={{ fontSize: 18, lineHeight: '24px', margin: 0 }}>{title1}</h1>
        <h2 style={{ fontSize: 16, lineHeight: '22px', margin: 0 }}>{title2}</h2>
        <p style={{ color: colors.mutedText, fontSize: 13, lineHeight: '18px', margin: 0, maxWidth: 310 }}>{description}</p>
      </div>
    </>
  );
}

function NavigationalHeader({
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
          <h1 style={{ fontSize: 16, lineHeight: '22px', margin: 0 }}>{title1}</h1>
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
        <h1 style={{ fontSize: 16, lineHeight: '22px', margin: 0 }}>{title1}</h1>
      </div>
    </>
  );
}

function ProfileHeader({
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
        <div style={{ alignItems: 'center', display: 'grid', gap: 12, gridTemplateColumns: '64px 1fr 40px', padding: '0 24px 18px' }}>
          <UserAvatar label={name} size="medium" type="initials" />
          <div style={{ display: 'grid', gap: 4 }}>
            <strong style={{ fontSize: 16 }}>{name}</strong>
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
            backgroundColor: '#FFFFFF',
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            bottom: -40,
            height: 118,
            left: -36,
            position: 'absolute',
            width: 462,
          }}
        />
        <div style={{ display: 'grid', gap: 6, justifyItems: 'center', paddingBottom: 8, position: 'relative', zIndex: 1 }}>
          <UserAvatar label={name} size="big" type="initials" />
          <strong style={{ color: colors.header, fontSize: 13 }}>{name}</strong>
        </div>
      </div>
    </>
  );
}

export function AppHeader({
  size = 'large',
  type = 'standard',
  title1 = 'Header Title 1',
  title2 = 'Header Title 2',
  label1 = 'Label 1:',
  label2 = 'Label 2:',
  value1 = 'Value 1',
  value2 = 'Value 2',
  description = 'Description that gives detailed information about the current status or next steps the user should take.',
  mainMessage = 'Main Message.',
  name = 'Full Name',
  business = 'Type of Business',
  counter = '1 of 1',
  showNotice = false,
  showLanguage = false,
  notice = 'This is a notice that shows a short message relevant to the process.',
  onBack,
  onPrimaryClick,
  onSecondaryClick,
  style,
  ...headerProps
}: AppHeaderProps) {
  const dim = dimensions[size];
  const effectiveType = type === 'profile' && (size === 'mediumRounded' || size === 'small') ? 'profile' : type;
  const minHeight =
    effectiveType === 'informative' && size === 'large'
      ? 300
      : effectiveType === 'profile' && size === 'large'
        ? 176
        : effectiveType === 'navigational' && size === 'large'
          ? 184
          : dim.minHeight;

  return (
    <header
      data-figma-node-id="7591:4171"
      style={{
        ...baseStyle,
        borderRadius: dim.radius,
        minHeight,
        paddingBottom: dim.paddingBottom,
        ...style,
      }}
      {...headerProps}
    >
      <StatusBar />
      {effectiveType === 'standard' ? (
        <StandardHeader label1={label1} label2={label2} showLanguage={showLanguage} size={size} title1={title1} value1={value1} value2={value2} />
      ) : null}
      {effectiveType === 'informative' ? (
        <InformativeHeader
          business={business}
          description={description}
          label1={label1}
          label2={label2}
          mainMessage={mainMessage}
          name={name}
          onBack={onBack}
          onPrimaryClick={onPrimaryClick}
          onSecondaryClick={onSecondaryClick}
          size={size}
          title1={title1}
          title2={title2}
          value1={value1}
          value2={value2}
        />
      ) : null}
      {effectiveType === 'navigational' ? <NavigationalHeader counter={counter} onBack={onBack} size={size} title1={title1} /> : null}
      {effectiveType === 'profile' ? <ProfileHeader label1={label1} name={name} onBack={onBack} size={size === 'large' ? 'large' : 'medium'} value1={value1} /> : null}
      {showNotice ? <p style={{ color: colors.mutedText, fontSize: 12, lineHeight: '16px', margin: '10px 24px 0' }}>{notice}</p> : null}
    </header>
  );
}
