import type { SVGProps } from 'react';

export type IconName =
  | 'arrowLeft'
  | 'arrowRight'
  | 'bell'
  | 'chevronDown'
  | 'check'
  | 'document'
  | 'externalLink'
  | 'helpCircle'
  | 'info'
  | 'menu'
  | 'minus'
  | 'plus'
  | 'search'
  | 'settings'
  | 'upload';

export type IconProps = {
  name: IconName;
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, 'name'>;

const iconPaths: Record<IconName, string[]> = {
  arrowLeft: ['M19 12H5', 'M11 6l-6 6 6 6'],
  arrowRight: ['M5 12h14', 'M13 6l6 6-6 6'],
  bell: ['M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0'],
  chevronDown: ['M6 9l6 6 6-6'],
  check: ['M20 6 9 17l-5-5'],
  document: ['M7 3h7l5 5v13H7z', 'M14 3v6h5'],
  externalLink: ['M14 4h6v6', 'M20 4 10 14', 'M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5'],
  helpCircle: ['M9.09 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4', 'M12 17h.01', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'],
  info: ['M12 17v-6', 'M12 7h.01', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  minus: ['M5 12h14'],
  plus: ['M12 5v14', 'M5 12h14'],
  search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M21 21l-4.35-4.35'],
  settings: [
    'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
    'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.2.64.78 1.08 1.45 1.08H21a2 2 0 0 1 0 4h-.09A1.65 1.65 0 0 0 19.4 15z',
  ],
  upload: ['M12 16V4', 'M7 9l5-5 5 5', 'M5 20h14'],
};

export function Icon({ name, title, width = 18, height = 18, ...svgProps }: IconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      focusable="false"
      role={title ? 'img' : undefined}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svgProps}
    >
      {title ? <title>{title}</title> : null}
      {iconPaths[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
