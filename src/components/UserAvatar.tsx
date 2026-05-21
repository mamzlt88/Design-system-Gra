import type { HTMLAttributes } from 'react';

export type UserAvatarSize = 'big' | 'medium' | 'small' | 'xSmall';
export type UserAvatarType = 'avatar' | 'initials';
export type UserAvatarVariant = '1' | '2' | '3' | '4' | '5' | '6' | 'none';

export type UserAvatarProps = {
  size?: UserAvatarSize;
  type?: UserAvatarType;
  avatar?: UserAvatarVariant;
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

const avatarColors: Record<UserAvatarVariant, string> = {
  '1': '#0C6466',
  '2': '#AB241F',
  '3': '#3A7D1D',
  '4': '#735425',
  '5': '#244555',
  '6': '#6F4BA8',
  none: '#A4A4A4',
};

export function UserAvatar({
  size = 'big',
  type = 'avatar',
  avatar = '1',
  initialsText = 'AS',
  showStar = true,
  label = 'User avatar',
  style,
  ...spanProps
}: UserAvatarProps) {
  const pixelSize = sizeMap[size];
  const color = avatarColors[avatar];

  return (
    <span
      aria-label={label}
      data-figma-node-id="1640:11011"
      role="img"
      style={{
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: 999,
        color: '#FFFFFF',
        display: 'inline-flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: Math.max(12, pixelSize * 0.28),
        fontWeight: 700,
        height: pixelSize,
        justifyContent: 'center',
        position: 'relative',
        width: pixelSize,
        ...style,
      }}
      {...spanProps}
    >
      {type === 'initials' || avatar === 'none' ? (
        initialsText
      ) : (
        <svg aria-hidden="true" focusable="false" height={pixelSize * 0.72} viewBox="0 0 64 64" width={pixelSize * 0.72}>
          <circle cx="32" cy="25" fill="#F2B896" r="14" />
          <path d="M12 62c3-16 14-24 20-24s17 8 20 24H12Z" fill="#FFFFFF" opacity="0.92" />
          <path d="M19 23c4-14 25-14 27 2-8-5-17-5-27-2Z" fill="#434343" />
        </svg>
      )}
      {showStar && size === 'xSmall' ? (
        <span
          aria-hidden="true"
          style={{
            alignItems: 'center',
            backgroundColor: '#F7C04A',
            border: '2px solid #FFFFFF',
            borderRadius: 100,
            bottom: -2,
            color: '#735425',
            display: 'inline-flex',
            fontSize: 10,
            height: 16,
            justifyContent: 'center',
            position: 'absolute',
            right: -2,
            width: 16,
          }}
        >
          *
        </span>
      ) : null}
    </span>
  );
}
