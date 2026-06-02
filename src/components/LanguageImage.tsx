import type { CSSProperties, HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type LanguageImageLanguage = 'english' | 'spanish';

export type LanguageImageProps = {
  language?: LanguageImageLanguage;
  size?: number;
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;

const colors = {
  grey00: tokens.color.grey00,
  grey10: tokens.color.grey10,
  grey40: tokens.color.grey40,
  primary05: tokens.color.primary05,
  primary90: tokens.color.primary90,
  red50: tokens.color.red50,
  red80: tokens.color.red80,
};

const languageMeta: Record<
  LanguageImageLanguage,
  {
    code: string;
    label: string;
    backgroundColor: string;
    borderColor: string;
    color: string;
  }
> = {
  english: {
    code: 'Eng',
    label: 'English',
    backgroundColor: colors.primary05,
    borderColor: colors.primary90,
    color: colors.primary90,
  },
  spanish: {
    code: 'Esp',
    label: 'Spanish',
    backgroundColor: colors.red50,
    borderColor: colors.red80,
    color: colors.red80,
  },
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  border: '1px solid transparent',
  borderRadius: tokens.radius.pill,
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  fontSize: tokens.typography.bodySmallRegular.fontSize,
  fontWeight: 700,
  justifyContent: 'center',
  letterSpacing: tokens.typography.bodyRegular.letterSpacing,
  lineHeight: 1,
  overflow: 'hidden',
  textTransform: 'uppercase',
};

export function LanguageImage({ language = 'english', size = 40, label, style, ...spanProps }: LanguageImageProps) {
  const meta = languageMeta[language];
  const accessibleLabel = label ?? `${meta.label} language image`;

  return (
    <span
      role="img"
      aria-label={accessibleLabel}
      data-figma-node-id="7878:11296"
      style={{
        ...baseStyle,
        backgroundColor: meta.backgroundColor,
        borderColor: meta.borderColor,
        color: meta.color,
        height: size,
        width: size,
        ...style,
      }}
      {...spanProps}
    >
      {meta.code}
    </span>
  );
}
