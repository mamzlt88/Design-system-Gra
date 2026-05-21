import type { ButtonHTMLAttributes, CSSProperties } from 'react';

export type LanguageSelectorState = 'default' | 'pressed' | 'selected';

export type LanguageSelectorProps = {
  state?: LanguageSelectorState;
  langText?: string;
  imageLabel?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const colors = {
  grey00: '#FFFFFF',
  grey10: '#E6E6E6',
  grey30: '#A4A4A4',
  grey50: '#434343',
  primary90: '#0C6466',
};

export function LanguageSelector({
  state = 'default',
  langText = 'Eng',
  imageLabel = 'Language',
  style,
  ...buttonProps
}: LanguageSelectorProps) {
  const selected = state === 'selected';
  const pressed = state === 'pressed';

  return (
    <button
      aria-pressed={selected}
      data-figma-node-id="9274:12691"
      style={{
        alignItems: 'center',
        backgroundColor: pressed ? colors.grey10 : colors.grey00,
        border: `1px solid ${selected ? colors.primary90 : colors.grey10}`,
        borderRadius: 8,
        color: colors.grey50,
        cursor: 'pointer',
        display: 'inline-flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: 14,
        fontWeight: 600,
        gap: 8,
        height: 48,
        justifyContent: 'flex-start',
        padding: '0 12px',
        width: 116,
        ...style,
      }}
      type="button"
      {...buttonProps}
    >
      <span
        aria-hidden="true"
        style={{
          alignItems: 'center',
          border: `2px solid ${selected ? colors.primary90 : colors.grey30}`,
          borderRadius: 100,
          display: 'inline-flex',
          height: 18,
          justifyContent: 'center',
          width: 18,
        }}
      >
        {selected ? <span style={{ backgroundColor: colors.primary90, borderRadius: 100, height: 8, width: 8 }} /> : null}
      </span>
      <span
        aria-label={imageLabel}
        role="img"
        style={{
          alignItems: 'center',
          backgroundColor: '#EDF6F6',
          borderRadius: 100,
          color: colors.primary90,
          display: 'inline-flex',
          height: 24,
          justifyContent: 'center',
          width: 24,
        }}
      >
        {langText.slice(0, 1).toUpperCase()}
      </span>
      <span>{langText}</span>
    </button>
  );
}
