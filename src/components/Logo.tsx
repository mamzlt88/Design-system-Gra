import type { HTMLAttributes } from 'react';

export type LogoType = 'iconOnly' | 'full';

export type LogoProps = {
  type?: LogoType;
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;

export function Logo({ type = 'iconOnly', label = 'Grameen logo', style, ...spanProps }: LogoProps) {
  const full = type === 'full';

  return (
    <span
      aria-label={label}
      data-figma-node-id="2760:487"
      role="img"
      style={{
        alignItems: 'center',
        color: '#0C6466',
        display: 'inline-flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: 16,
        fontWeight: 700,
        gap: 8,
        height: 48,
        width: full ? 115 : 54,
        ...style,
      }}
      {...spanProps}
    >
      <svg aria-hidden="true" focusable="false" height="48" viewBox="0 0 54 48" width="54">
        <circle cx="24" cy="24" fill="#0C6466" r="18" />
        <path d="M14 26c7-14 20-14 27 0-8-4-18-4-27 0Z" fill="#FFFFFF" />
        <path d="M18 29c5 5 12 5 18 0" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="3" />
      </svg>
      {full ? <span>Grameen</span> : null}
    </span>
  );
}
