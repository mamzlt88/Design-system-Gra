import type { HTMLAttributes } from 'react';

export type SavingsProgramLogoType = 'small' | 'medium';

export type SavingsProgramLogoProps = {
  type?: SavingsProgramLogoType;
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;

const dimensions: Record<SavingsProgramLogoType, { width: number; height: number }> = {
  small: { width: 150, height: 94 },
  medium: { width: 226, height: 141 },
};

export function SavingsProgramLogo({
  type = 'small',
  label = 'Savings Program logo',
  style,
  ...spanProps
}: SavingsProgramLogoProps) {
  const { width, height } = dimensions[type];

  return (
    <span
      aria-label={label}
      data-figma-node-id="8625:10563"
      role="img"
      style={{
        alignItems: 'center',
        backgroundColor: '#EDF6F6',
        borderRadius: 12,
        color: '#0C6466',
        display: 'inline-grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontWeight: 700,
        height,
        justifyItems: 'center',
        padding: 12,
        textAlign: 'center',
        width,
        ...style,
      }}
      {...spanProps}
    >
      <span style={{ fontSize: type === 'medium' ? 20 : 15 }}>Savings</span>
      <span style={{ fontSize: type === 'medium' ? 14 : 11, fontWeight: 600 }}>Program</span>
    </span>
  );
}
