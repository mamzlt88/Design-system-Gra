import type { CSSProperties, HTMLAttributes } from 'react';

export type LanguageImageLanguage = 'english' | 'spanish';

export type LanguageImageProps = {
  language?: LanguageImageLanguage;
  size?: number;
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;

const colors = {
  grey00: '#FFFFFF',
  grey10: '#E6E6E6',
  grey40: '#5C5C5C',
  primary05: '#DBEBEB',
  primary90: '#0C6466',
  red50: '#FDE0E0',
  red80: '#AB241F',
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
  borderRadius: 100,
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'Open Sans, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 700,
  justifyContent: 'center',
  letterSpacing: 0,
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
