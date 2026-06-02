import { useId, type HTMLAttributes, type ReactNode } from 'react';

import { Button } from './Button';
import { IconContainer } from './IconContainer';
import { componentTokens as tokens } from '../tokens/componentTokens';

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
      <ul style={{ color: tokens.color.grey50, fontSize: tokens.typography.bodyRegular.fontSize, lineHeight: tokens.typography.subHeadingSemiBold.lineHeight, margin: 0, paddingLeft: 18 }}>
        <li>Review the information carefully.</li>
        <li>Confirm that the details are correct.</li>
        <li>Continue when the user is ready.</li>
      </ul>
    );
  }

  return <p style={{ color: tokens.color.grey50, fontSize: tokens.typography.bodyRegular.fontSize, lineHeight: tokens.typography.subHeadingSemiBold.lineHeight, margin: 0 }}>{description}</p>;
}

function Media({ type }: { type: StandardModalType }) {
  if (type !== 'illustration' && type !== 'mediaTop') {
    return null;
  }

  return (
    <div style={{ alignItems: 'center', backgroundColor: tokens.color.primary00, borderRadius: type === 'mediaTop' ? '8px 8px 0 0' : 8, display: 'flex', justifyContent: 'center', minHeight: 120 }}>
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

  return <div style={{ display: 'grid', gap: tokens.spacing.sm, gridTemplateColumns: horizontal ? '1fr 1fr' : '1fr' }}>{children}</div>;
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
  const titleId = useId();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-figma-node-id="7478:9775"
      style={{
        backgroundColor: tokens.color.grey00,
        border: `1px solid ${tokens.color.grey10}`,
        borderRadius: tokens.radius.lg,
        boxShadow: tokens.effect.modalElevation,
        boxSizing: 'border-box',
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        gap: tokens.spacing['2xl'],
        maxWidth: 390,
        overflow: 'hidden',
        padding: type === 'mediaTop' ? 0 : 24,
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <Media type={type} />
      <div style={{ display: 'grid', gap: tokens.spacing.xxl, padding: type === 'mediaTop' ? '0 24px 24px' : 0 }}>
        <div style={{ display: 'grid', gap: tokens.spacing.sm }}>
          <h2 id={titleId} style={{ color: tokens.color.grey80, fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: 22, lineHeight: '28px', margin: 0 }}>{title}</h2>
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
