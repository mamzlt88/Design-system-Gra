import type { CSSProperties, HTMLAttributes } from 'react';

import { Button } from './Button';
import { IconContainer } from './IconContainer';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type InformationalCardBgColor = 'blue' | 'yellow';

export type InformationalCardProps = {
  bgColor?: InformationalCardBgColor;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'title'>;

const cardPalettes: Record<InformationalCardBgColor, { background: string; border: string; icon: 'blue' | 'yellow' }> = {
  blue: { background: tokens.color.primary00, border: tokens.color.secondary60, icon: 'blue' },
  yellow: { background: tokens.color.yellow05, border: tokens.color.yellow10, icon: 'yellow' },
};

export function InformationalCard({
  bgColor = 'blue',
  title = 'Helpful information',
  description = 'Use this card to show supporting guidance that keeps the user informed.',
  actionLabel,
  onAction,
  style,
  ...articleProps
}: InformationalCardProps) {
  const palette = cardPalettes[bgColor];

  return (
    <article
      data-figma-node-id="9243:9011"
      style={{
        alignItems: 'flex-start',
        backgroundColor: palette.background,
        border: `1px solid ${palette.border}`,
        borderRadius: tokens.radius.md,
        boxSizing: 'border-box',
        display: 'flex',
        gap: tokens.spacing.xxl,
        maxWidth: 520,
        padding: tokens.spacing['2xl'],
        ...style,
      }}
      {...articleProps}
    >
      <IconContainer color={palette.icon} icon="info" label="" size={40} />
      <div style={{ display: 'grid', flex: 1, gap: tokens.spacing.sm, minWidth: 0 }}>
        <h3 style={{ color: tokens.color.grey80, fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: 18, lineHeight: '24px', margin: 0 }}>
          {title}
        </h3>
        <p style={{ color: tokens.color.grey50, fontFamily: tokens.typography.bodyRegular.fontFamily, fontSize: tokens.typography.bodyRegular.fontSize, lineHeight: tokens.typography.subHeadingSemiBold.lineHeight, margin: 0 }}>
          {description}
        </p>
        {actionLabel ? (
          <div style={{ paddingTop: tokens.spacing.sm }}>
            <Button label={actionLabel} onClick={onAction} variant="text" />
          </div>
        ) : null}
      </div>
    </article>
  );
}
