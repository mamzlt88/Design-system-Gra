import type { AnchorHTMLAttributes, CSSProperties, MouseEvent } from 'react';

import { Icon } from './Icon';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type ExternalLinkButtonProps = {
  label: string;
  href: string;
  textSize?: 'large' | 'medium';
  disabled?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'>;

const baseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: tokens.color.grey00,
  border: `1px solid ${tokens.color.primary03}`,
  borderRadius: tokens.radius.xl,
  color: tokens.color.grey60,
  display: 'inline-flex',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  fontWeight: 600,
  gap: tokens.spacing.lg,
  justifyContent: 'space-between',
  lineHeight: 1.25,
  minHeight: 48,
  padding: '12px 16px',
  textDecoration: 'none',
  transition: 'background-color 120ms ease-in-out, opacity 120ms ease-in-out',
  whiteSpace: 'nowrap',
  width: 354,
};

export function ExternalLinkButton({
  label,
  href,
  textSize = 'medium',
  disabled = false,
  onClick,
  style,
  ...anchorProps
}: ExternalLinkButtonProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  }

  return (
    <a
      aria-disabled={disabled || undefined}
      href={disabled ? undefined : href}
      onClick={handleClick}
      style={{
        ...baseStyle,
        backgroundColor: disabled ? tokens.color.grey05 : baseStyle.backgroundColor,
        fontSize: textSize === 'large' ? 16 : 14,
        opacity: disabled ? 0.55 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        ...style,
      }}
      tabIndex={disabled ? -1 : anchorProps.tabIndex}
      {...anchorProps}
    >
      <span style={{ flex: '1 1 auto' }}>{label}</span>
      <Icon name="externalLink" width={24} height={24} style={{ color: tokens.color.primary80, flex: '0 0 auto' }} />
    </a>
  );
}
