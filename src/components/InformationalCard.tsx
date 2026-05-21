import type { CSSProperties, HTMLAttributes } from 'react';

import { Button } from './Button';
import { IconContainer } from './IconContainer';

export type InformationalCardBgColor = 'blue' | 'yellow';

export type InformationalCardProps = {
  bgColor?: InformationalCardBgColor;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'title'>;

const cardPalettes: Record<InformationalCardBgColor, { background: string; border: string; icon: 'blue' | 'yellow' }> = {
  blue: { background: '#EDF6F6', border: '#D0DEEA', icon: 'blue' },
  yellow: { background: '#FFF6DC', border: '#FFF0C8', icon: 'yellow' },
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
        borderRadius: 8,
        boxSizing: 'border-box',
        display: 'flex',
        gap: 16,
        maxWidth: 520,
        padding: 20,
        ...style,
      }}
      {...articleProps}
    >
      <IconContainer color={palette.icon} icon="info" label="" size={40} />
      <div style={{ display: 'grid', flex: 1, gap: 8, minWidth: 0 }}>
        <h3 style={{ color: '#141414', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 18, lineHeight: '24px', margin: 0 }}>
          {title}
        </h3>
        <p style={{ color: '#434343', fontFamily: 'Open Sans, Arial, sans-serif', fontSize: 14, lineHeight: '20px', margin: 0 }}>
          {description}
        </p>
        {actionLabel ? (
          <div style={{ paddingTop: 8 }}>
            <Button label={actionLabel} onClick={onAction} variant="text" />
          </div>
        ) : null}
      </div>
    </article>
  );
}
