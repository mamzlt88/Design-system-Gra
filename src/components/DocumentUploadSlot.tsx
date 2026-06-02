import type { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Icon } from './Icon';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type DocumentUploadSlotProps = {
  instructionText: string;
  requirement?: 'none' | 'optional' | 'required';
  typeLabel?: string;
  showType?: boolean;
  state?: 'default' | 'pressed' | 'uploaded';
  fileName?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const baseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: tokens.color.primary03,
  border: `1px dashed ${tokens.color.primary80}`,
  borderRadius: tokens.radius.md,
  color: tokens.color.primary80,
  cursor: 'pointer',
  display: 'inline-flex',
  flexDirection: 'column',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  gap: tokens.spacing.xs,
  height: 107,
  justifyContent: 'center',
  minHeight: 107,
  minWidth: 107,
  overflow: 'hidden',
  padding: '16px 8px',
  position: 'relative',
  textAlign: 'center',
  width: 107,
  transition: 'background-color 120ms ease-in-out, border-color 120ms ease-in-out, opacity 120ms ease-in-out',
};

const requirementLabels: Record<NonNullable<DocumentUploadSlotProps['requirement']>, string> = {
  none: '',
  optional: 'Optional',
  required: 'Required',
};

export function DocumentUploadSlot({
  instructionText,
  requirement = 'required',
  typeLabel = '(Type)',
  showType = true,
  state = 'default',
  fileName,
  disabled = false,
  style,
  ...buttonProps
}: DocumentUploadSlotProps) {
  const uploaded = state === 'uploaded';
  const requirementLabel = requirementLabels[requirement];
  const tone = requirement === 'optional' ? 'neutral' : 'primary';
  const details = showType ? typeLabel || requirementLabel : requirementLabel;

  return (
    <button
      type="button"
      aria-label={uploaded && fileName ? `${instructionText}. Uploaded file: ${fileName}` : instructionText}
      disabled={disabled}
      style={{
        ...baseStyle,
        backgroundColor: uploaded ? tokens.color.grey00 : state === 'pressed' ? (tone === 'neutral' ? tokens.color.grey10 : tokens.color.primary05) : tone === 'neutral' ? tokens.color.grey05 : tokens.color.primary03,
        borderColor: uploaded ? tokens.color.grey20 : tone === 'neutral' ? tokens.color.grey30 : tokens.color.primary80,
        borderStyle: uploaded ? 'solid' : 'dashed',
        color: tone === 'neutral' ? tokens.color.grey40 : tokens.color.primary80,
        opacity: disabled ? 0.55 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        ...style,
      }}
      {...buttonProps}
    >
      {uploaded ? (
        <>
          <span
            aria-hidden="true"
            style={{
              backgroundImage:
                `linear-gradient(45deg, ${tokens.color.checkerPattern} 25%, transparent 25%), linear-gradient(-45deg, ${tokens.color.checkerPattern} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${tokens.color.checkerPattern} 75%), linear-gradient(-45deg, transparent 75%, ${tokens.color.checkerPattern} 75%)`,
              backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
              backgroundSize: '16px 16px',
              inset: 0,
              position: 'absolute',
            }}
          />
          <span
            aria-hidden="true"
            style={{
              alignItems: 'center',
              backgroundColor: tokens.color.primary90,
              borderRadius: tokens.radius.pill,
              color: tokens.color.grey00,
              display: 'inline-flex',
              height: 36,
              justifyContent: 'center',
              position: 'absolute',
              right: -12,
              top: -12,
              width: 36,
            }}
          >
            <Icon name="check" width={22} height={22} />
          </span>
        </>
      ) : (
        <>
          <Icon name="plus" width={24} height={24} />
          <span style={{ display: 'grid', fontSize: tokens.typography.captionRegular.fontSize, fontWeight: 400, gap: tokens.spacing.none, lineHeight: 1.25 }}>
            <span style={{ whiteSpace: 'pre-line' }}>{instructionText}</span>
            {details ? <span>{details}</span> : null}
          </span>
        </>
      )}
    </button>
  );
}
