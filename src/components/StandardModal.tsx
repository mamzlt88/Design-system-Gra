import type { HTMLAttributes, ReactNode } from 'react';

import { Button } from './Button';
import { IconContainer } from './IconContainer';

export type StandardModalType = 'verticalActions' | 'horizontalActions' | 'bullets' | 'illustration' | 'mediaTop';

export type StandardModalProps = {
  type?: StandardModalType;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'>;

function ModalBody({ type, description }: { type: StandardModalType; description: string }) {
  if (type === 'bullets') {
    return (
      <ul style={{ color: '#434343', fontSize: 14, lineHeight: '20px', margin: 0, paddingLeft: 18 }}>
        <li>Review the information carefully.</li>
        <li>Confirm that the details are correct.</li>
        <li>Continue when the user is ready.</li>
      </ul>
    );
  }

  return <p style={{ color: '#434343', fontSize: 14, lineHeight: '20px', margin: 0 }}>{description}</p>;
}

function Media({ type }: { type: StandardModalType }) {
  if (type !== 'illustration' && type !== 'mediaTop') {
    return null;
  }

  return (
    <div style={{ alignItems: 'center', backgroundColor: '#EDF6F6', borderRadius: type === 'mediaTop' ? '8px 8px 0 0' : 8, display: 'flex', justifyContent: 'center', minHeight: 120 }}>
      <IconContainer color="brand" icon="info" size={72} />
    </div>
  );
}

function Actions({
  type,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}: {
  type: StandardModalType;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}) {
  const horizontal = type === 'horizontalActions';
  const children: ReactNode = (
    <>
      <Button fullWidth={!horizontal} label={secondaryLabel} onClick={onSecondaryClick} variant="outlined" />
      <Button fullWidth={!horizontal} label={primaryLabel} onClick={onPrimaryClick} />
    </>
  );

  return <div style={{ display: 'grid', gap: 8, gridTemplateColumns: horizontal ? '1fr 1fr' : '1fr' }}>{children}</div>;
}

export function StandardModal({
  type = 'verticalActions',
  title = 'Modal title',
  description = 'Use this modal to focus attention on an important decision.',
  primaryLabel = 'Continue',
  secondaryLabel = 'Cancel',
  onPrimaryClick,
  onSecondaryClick,
  style,
  ...divProps
}: StandardModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      data-figma-node-id="7478:9775"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E6E6E6',
        borderRadius: 12,
        boxShadow: '0 12px 32px rgba(20, 20, 20, 0.16)',
        boxSizing: 'border-box',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        gap: 20,
        maxWidth: 390,
        overflow: 'hidden',
        padding: type === 'mediaTop' ? 0 : 24,
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <Media type={type} />
      <div style={{ display: 'grid', gap: 16, padding: type === 'mediaTop' ? '0 24px 24px' : 0 }}>
        <div style={{ display: 'grid', gap: 8 }}>
          <h2 style={{ color: '#141414', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 22, lineHeight: '28px', margin: 0 }}>{title}</h2>
          <ModalBody description={description} type={type} />
        </div>
        <Actions
          onPrimaryClick={onPrimaryClick}
          onSecondaryClick={onSecondaryClick}
          primaryLabel={primaryLabel}
          secondaryLabel={secondaryLabel}
          type={type}
        />
      </div>
    </div>
  );
}
