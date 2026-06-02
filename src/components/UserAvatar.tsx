import { useEffect, useMemo, useState, type HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type UserAvatarSize = 'big' | 'medium' | 'small' | 'xSmall';
export type UserAvatarType = 'avatar' | 'initials';
export type UserAvatarVariant = '1' | '2' | '3' | '4' | '5' | '6' | 'none';

export type UserAvatarProps = {
  size?: UserAvatarSize;
  type?: UserAvatarType;
  avatar?: UserAvatarVariant;
  src?: string;
  imageSrc?: string;
  alt?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  initialsText?: string;
  showStar?: boolean;
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;

const sizeMap: Record<UserAvatarSize, number> = {
  big: 110,
  medium: 82,
  small: 55,
  xSmall: 40,
};

const avatarSources: Record<Exclude<UserAvatarVariant, 'none'>, Record<UserAvatarSize, string>> = {
  '1': {
    big: new URL('../assets/avatars/avatar-1-big.png', import.meta.url).href,
    medium: new URL('../assets/avatars/avatar-1-medium.png', import.meta.url).href,
    small: new URL('../assets/avatars/avatar-1-small.png', import.meta.url).href,
    xSmall: new URL('../assets/avatars/avatar-1-xSmall.png', import.meta.url).href,
  },
  '2': {
    big: new URL('../assets/avatars/avatar-2-big.png', import.meta.url).href,
    medium: new URL('../assets/avatars/avatar-2-medium.png', import.meta.url).href,
    small: new URL('../assets/avatars/avatar-2-small.png', import.meta.url).href,
    xSmall: new URL('../assets/avatars/avatar-2-xSmall.png', import.meta.url).href,
  },
  '3': {
    big: new URL('../assets/avatars/avatar-3-big.png', import.meta.url).href,
    medium: new URL('../assets/avatars/avatar-3-medium.png', import.meta.url).href,
    small: new URL('../assets/avatars/avatar-3-small.png', import.meta.url).href,
    xSmall: new URL('../assets/avatars/avatar-3-xSmall.png', import.meta.url).href,
  },
  '4': {
    big: new URL('../assets/avatars/avatar-4-big.png', import.meta.url).href,
    medium: new URL('../assets/avatars/avatar-4-medium.png', import.meta.url).href,
    small: new URL('../assets/avatars/avatar-4-small.png', import.meta.url).href,
    xSmall: new URL('../assets/avatars/avatar-4-xSmall.png', import.meta.url).href,
  },
  '5': {
    big: new URL('../assets/avatars/avatar-5-big.png', import.meta.url).href,
    medium: new URL('../assets/avatars/avatar-5-medium.png', import.meta.url).href,
    small: new URL('../assets/avatars/avatar-5-small.png', import.meta.url).href,
    xSmall: new URL('../assets/avatars/avatar-5-xSmall.png', import.meta.url).href,
  },
  '6': {
    big: new URL('../assets/avatars/avatar-6-big.png', import.meta.url).href,
    medium: new URL('../assets/avatars/avatar-6-medium.png', import.meta.url).href,
    small: new URL('../assets/avatars/avatar-6-small.png', import.meta.url).href,
    xSmall: new URL('../assets/avatars/avatar-6-xSmall.png', import.meta.url).href,
  },
};

const initialsTypography: Record<UserAvatarSize, { fontFamily: string; fontSize: number; lineHeight: string }> = {
  big: { fontFamily: tokens.typography.bodyRegular.fontFamily, fontSize: tokens.typography.displayLargeSemiBold.fontSize, lineHeight: tokens.typography.displayLargeSemiBold.lineHeight },
  medium: { fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: tokens.typography.displayMediumSemiBold.fontSize, lineHeight: tokens.typography.displayMediumSemiBold.lineHeight },
  small: { fontFamily: tokens.typography.bodyRegular.fontFamily, fontSize: tokens.typography.displaySmallBold.fontSize, lineHeight: tokens.typography.displaySmallBold.lineHeight },
  xSmall: { fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: tokens.typography.headingBold.fontSize, lineHeight: tokens.typography.headingBold.lineHeight },
};

function getInitials({ firstName, lastName, name, initialsText }: Pick<UserAvatarProps, 'firstName' | 'lastName' | 'name' | 'initialsText'>) {
  if (initialsText?.trim()) return initialsText.trim().slice(0, 2).toUpperCase();

  const parts = [firstName, lastName].filter(Boolean);
  if (parts.length === 0 && name) {
    parts.push(...name.trim().split(/\s+/).filter(Boolean));
  }

  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : '';
  return `${first}${last}`.toUpperCase() || 'AS';
}

export function UserAvatar({
  size = 'big',
  type = 'avatar',
  avatar = '1',
  src,
  imageSrc,
  alt,
  name,
  firstName,
  lastName,
  initialsText,
  showStar = true,
  label,
  style,
  ...spanProps
}: UserAvatarProps) {
  const pixelSize = sizeMap[size];
  const imageSource = imageSrc ?? src ?? (avatar === 'none' ? undefined : avatarSources[avatar][size]);
  const [imageFailed, setImageFailed] = useState(false);
  const shouldShowImage = type === 'avatar' && avatar !== 'none' && imageSource && !imageFailed;
  const initials = useMemo(() => getInitials({ firstName, lastName, name, initialsText }), [firstName, initialsText, lastName, name]);
  const typography = initialsTypography[size];
  const accessibleName = label ?? name ?? alt ?? (shouldShowImage ? 'User avatar' : `${initials} avatar`);

  useEffect(() => {
    setImageFailed(false);
  }, [imageSource]);

  return (
    <span
      aria-label={accessibleName}
      data-figma-node-id="1640:11011"
      role="img"
      style={{
        alignItems: 'center',
        backgroundColor: shouldShowImage ? 'transparent' : tokens.color.primary05,
        border: shouldShowImage ? '0' : `${size === 'small' ? 1.375 : 1}px solid ${tokens.color.primary00}`,
        borderRadius: tokens.radius.circle,
        boxShadow: shouldShowImage && avatar !== '1' ? tokens.effect.avatarImage : undefined,
        boxSizing: 'border-box',
        color: tokens.color.primary90,
        display: 'inline-flex',
        flexShrink: 0,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontWeight: 600,
        height: pixelSize,
        justifyContent: 'center',
        lineHeight: typography.lineHeight,
        overflow: 'visible',
        position: 'relative',
        textAlign: 'center',
        width: pixelSize,
        ...style,
      }}
      {...spanProps}
    >
      {shouldShowImage ? (
        <img
          alt=""
          aria-hidden="true"
          onError={() => setImageFailed(true)}
          src={imageSource}
          style={{ borderRadius: 'inherit', display: 'block', height: '100%', objectFit: 'cover', width: '100%' }}
        />
      ) : (
        initials
      )}
      {showStar && size === 'xSmall' ? (
        <span
          aria-hidden="true"
          style={{
            alignItems: 'center',
            backgroundColor: tokens.color.grey00,
            borderRadius: tokens.radius.md,
            boxShadow: tokens.effect.cardsElevation,
            color: tokens.color.avatarWarning,
            display: 'inline-flex',
            height: 14,
            justifyContent: 'center',
            position: 'absolute',
            right: -1,
            top: -2,
            width: 14,
          }}
        >
          <svg aria-hidden="true" focusable="false" height="12" viewBox="0 0 16 16" width="12">
            <path d="M8 1.8l1.7 3.5 3.9.6-2.8 2.7.7 3.9L8 10.7l-3.5 1.8.7-3.9-2.8-2.7 3.9-.6L8 1.8z" fill="currentColor" />
          </svg>
        </span>
      ) : null}
    </span>
  );
}
