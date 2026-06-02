import type { HTMLAttributes } from 'react';

import {
  InformativeHeader,
  NavigationalHeader,
  ProfileHeader,
  StandardHeader,
  appHeaderBaseStyle,
  appHeaderColors,
  appHeaderDimensions,
} from './AppHeaderVariants';
import { componentTokens as tokens } from '../tokens/componentTokens';

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
  primaryLabel?: string;
  secondaryLabel?: string;
  showNotice?: boolean;
  showLanguage?: boolean;
  onBack?: () => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'title'>;

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
  notice = 'This is a notice that shows a short message relevant to the process.',
  primaryLabel = 'Button',
  secondaryLabel = 'Button',
  showNotice = false,
  showLanguage = false,
  onBack,
  onPrimaryClick,
  onSecondaryClick,
  style,
  ...headerProps
}: AppHeaderProps) {
  const dimensions = appHeaderDimensions[size];
  const effectiveType = type === 'profile' && (size === 'mediumRounded' || size === 'small') ? 'profile' : type;
  const minHeight =
    effectiveType === 'informative' && size === 'large'
      ? 300
      : effectiveType === 'profile' && size === 'large'
        ? 176
        : effectiveType === 'navigational' && size === 'large'
          ? 184
          : dimensions.minHeight;
  const paddingBottom =
    effectiveType === 'informative' && size === 'medium'
      ? 0
      : effectiveType === 'informative' && size === 'mediumRounded'
        ? 20
        : dimensions.paddingBottom;
  const paddingTop = effectiveType === 'informative' && size === 'medium' ? 12 : undefined;

  return (
    <header
      data-figma-node-id="7591:4171"
      style={{
        ...appHeaderBaseStyle,
        borderRadius: dimensions.radius,
        minHeight,
        paddingBottom,
        paddingTop,
        ...style,
      }}
      {...headerProps}
    >
      {effectiveType === 'standard' ? (
        <StandardHeader label1={label1} label2={label2} showLanguage={showLanguage} size={size} title1={title1} value1={value1} value2={value2} />
      ) : null}
      {effectiveType === 'informative' ? (
        <InformativeHeader
          business={business}
          description={description}
          label1={label1}
          mainMessage={mainMessage}
          name={name}
          onBack={onBack}
          onPrimaryClick={onPrimaryClick}
          onSecondaryClick={onSecondaryClick}
          primaryLabel={primaryLabel}
          secondaryLabel={secondaryLabel}
          size={size}
          title1={title1}
          title2={title2}
          value1={value1}
        />
      ) : null}
      {effectiveType === 'navigational' ? <NavigationalHeader counter={counter} onBack={onBack} size={size} title1={title1} /> : null}
      {effectiveType === 'profile' ? <ProfileHeader label1={label1} name={name} onBack={onBack} size={size === 'large' ? 'large' : 'medium'} value1={value1} /> : null}
      {showNotice ? <p style={{ color: appHeaderColors.mutedText, fontSize: tokens.typography.bodySmallRegular.fontSize, lineHeight: '16px', margin: '10px 24px 0' }}>{notice}</p> : null}
    </header>
  );
}
