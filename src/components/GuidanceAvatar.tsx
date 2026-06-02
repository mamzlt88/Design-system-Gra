import type { HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type GuidanceAvatarType = '1' | '2';

export type GuidanceAvatarProps = {
  typeAvatar?: GuidanceAvatarType;
  showBackground?: boolean;
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;

export function GuidanceAvatar({
  typeAvatar = '1',
  showBackground = true,
  label = 'Guidance avatar',
  style,
  ...spanProps
}: GuidanceAvatarProps) {
  const accent = typeAvatar === '1' ? tokens.color.primary90 : tokens.color.red80;

  return (
    <span
      aria-label={label}
      data-figma-node-id="7475:443"
      role="img"
      style={{
        alignItems: 'center',
        backgroundColor: showBackground ? tokens.color.primary00 : 'transparent',
        borderRadius: tokens.radius.pill,
        display: 'inline-flex',
        height: 78,
        justifyContent: 'center',
        width: 78,
        ...style,
      }}
      {...spanProps}
    >
      <svg aria-hidden="true" focusable="false" height="64" viewBox="0 0 64 64" width="64">
        <circle cx="32" cy="24" fill={tokens.color.guidanceSkin} r="13" />
        <path d="M13 58c3-15 13-22 19-22s16 7 19 22H13Z" fill={accent} />
        <path d={typeAvatar === '1' ? 'M20 21c5-12 22-12 24 3-7-5-15-5-24-3Z' : 'M18 24c2-15 28-16 28 0-8-7-19-7-28 0Z'} fill={tokens.color.grey50} />
      </svg>
    </span>
  );
}
