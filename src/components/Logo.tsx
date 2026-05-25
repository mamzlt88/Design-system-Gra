import type { HTMLAttributes } from 'react';

export type LogoType = 'iconOnly' | 'full';

export type LogoProps = {
  type?: LogoType;
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;

const fullLogoSrc = new URL('../assets/logos/grameen-america-logo.png', import.meta.url).href;
const iconOnlyLogoSrc = new URL('../assets/logos/type-icon-only.svg', import.meta.url).href;

export function Logo({ type = 'iconOnly', label = 'Grameen logo', style, ...spanProps }: LogoProps) {
  const full = type === 'full';
  const width = full ? 133 : 54;

  return (
    <span
      aria-label={label}
      data-figma-node-id="2760:487"
      role="img"
      style={{
        alignItems: 'center',
        display: 'inline-flex',
        height: 48,
        width,
        ...style,
      }}
      {...spanProps}
    >
      <img
        alt=""
        aria-hidden="true"
        src={full ? fullLogoSrc : iconOnlyLogoSrc}
        style={{ display: 'block', height: '100%', objectFit: 'contain', width: '100%' }}
      />
    </span>
  );
}
