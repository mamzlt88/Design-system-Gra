import type { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Icon } from './Icon';

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
  backgroundColor: '#E3F0F0',
  border: '1px dashed #0D7779',
  borderRadius: 8,
  color: '#0D7779',
  cursor: 'pointer',
  display: 'inline-flex',
  flexDirection: 'column',
  fontFamily: 'Open Sans, Arial, sans-serif',
  gap: 6,
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
        backgroundColor: uploaded ? '#FFFFFF' : state === 'pressed' ? (tone === 'neutral' ? '#E6E6E6' : '#DBEBEB') : tone === 'neutral' ? '#F5F5F5' : '#E3F0F0',
        borderColor: uploaded ? '#D3D3D3' : tone === 'neutral' ? '#A4A4A4' : '#0D7779',
        borderStyle: uploaded ? 'solid' : 'dashed',
        color: tone === 'neutral' ? '#5C5C5C' : '#0D7779',
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
                'linear-gradient(45deg, #eeeeee 25%, transparent 25%), linear-gradient(-45deg, #eeeeee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eeeeee 75%), linear-gradient(-45deg, transparent 75%, #eeeeee 75%)',
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
              backgroundColor: '#0C6466',
              borderRadius: 100,
              color: '#FFFFFF',
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
          <span style={{ display: 'grid', fontSize: 10, fontWeight: 400, gap: 0, lineHeight: 1.25 }}>
            <span style={{ whiteSpace: 'pre-line' }}>{instructionText}</span>
            {details ? <span>{details}</span> : null}
          </span>
        </>
      )}
    </button>
  );
}
