import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type LanguageSelectorState = 'default' | 'pressed' | 'selected';

export type LanguageSelectorProps = {
  state?: LanguageSelectorState;
  langText?: string;
  imageLabel?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const colors = {
  grey00: tokens.color.grey00,
  grey10: tokens.color.grey10,
  grey30: tokens.color.grey30,
  grey50: tokens.color.grey50,
  primary90: tokens.color.primary90,
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
        borderRadius: tokens.radius.md,
        color: colors.grey50,
        cursor: 'pointer',
        display: 'inline-flex',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        fontSize: tokens.typography.bodyRegular.fontSize,
        fontWeight: 600,
        gap: tokens.spacing.sm,
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
          borderRadius: tokens.radius.pill,
          display: 'inline-flex',
          height: 18,
          justifyContent: 'center',
          width: 18,
        }}
      >
        {selected ? <span style={{ backgroundColor: colors.primary90, borderRadius: tokens.radius.pill, height: 8, width: 8 }} /> : null}
      </span>
      <span
        aria-label={imageLabel}
        role="img"
        style={{
          alignItems: 'center',
          backgroundColor: tokens.color.primary00,
          borderRadius: tokens.radius.pill,
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
