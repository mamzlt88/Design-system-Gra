import type { HTMLAttributes } from 'react';

import { Button } from './Button';

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
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      data-figma-node-id="7482:653"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E6E6E6',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        boxShadow: '0 -8px 24px rgba(20, 20, 20, 0.14)',
        boxSizing: 'border-box',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        gap: 16,
        maxWidth: 390,
        padding: 24,
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span aria-hidden="true" style={{ backgroundColor: '#D3D3D3', borderRadius: 999, height: 4, justifySelf: 'center', width: 48 }} />
      <div style={{ display: 'grid', gap: 8 }}>
        <h2 style={{ color: '#141414', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 22, lineHeight: '28px', margin: 0 }}>{title}</h2>
        <p style={{ color: '#434343', fontSize: 14, lineHeight: '20px', margin: 0 }}>{description}</p>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <Button fullWidth label={primaryLabel} onClick={onPrimaryClick} />
        <Button fullWidth label={secondaryLabel} onClick={onSecondaryClick} variant="outlined" />
      </div>
    </div>
  );
}
