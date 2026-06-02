import { useId, type HTMLAttributes } from 'react';

import { Button } from './Button';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type StandardBottomSheetProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'>;

export function StandardBottomSheet({
  title = 'Bottom sheet title',
  description = 'Use this area for a concise explanation of the current task.',
  primaryLabel = 'Continue',
  secondaryLabel = 'Cancel',
  onPrimaryClick,
  onSecondaryClick,
  style,
  ...divProps
}: StandardBottomSheetProps) {
  const titleId = useId();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-figma-node-id="7482:653"
      style={{
        backgroundColor: tokens.color.grey00,
        border: `1px solid ${tokens.color.grey10}`,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        boxShadow: tokens.effect.bottomSheetElevation,
        boxSizing: 'border-box',
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        gap: tokens.spacing.xxl,
        maxWidth: 390,
        padding: tokens.spacing['3xl'],
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span aria-hidden="true" style={{ backgroundColor: tokens.color.grey20, borderRadius: tokens.radius.circle, height: 4, justifySelf: 'center', width: 48 }} />
      <div style={{ display: 'grid', gap: tokens.spacing.sm }}>
        <h2 id={titleId} style={{ color: tokens.color.grey80, fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: 22, lineHeight: '28px', margin: 0 }}>{title}</h2>
        <p style={{ color: tokens.color.grey50, fontSize: tokens.typography.bodyRegular.fontSize, lineHeight: tokens.typography.subHeadingSemiBold.lineHeight, margin: 0 }}>{description}</p>
      </div>
      <div style={{ display: 'grid', gap: tokens.spacing.sm }}>
        <Button fullWidth label={primaryLabel} onClick={onPrimaryClick} />
        <Button fullWidth label={secondaryLabel} onClick={onSecondaryClick} variant="outlined" />
      </div>
    </div>
  );
}
