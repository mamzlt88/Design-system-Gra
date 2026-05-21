import type { CSSProperties, ReactNode } from 'react';

import { Icon, type IconName } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { figmaTokenMeta, figmaTokenStyles } from '../../tokens';

type TokenCategory = 'color' | 'text' | 'effect' | 'grid';

type TokenStyle = {
  id: string;
  name: string;
  category: TokenCategory | string;
  styleType: string;
  path?: readonly string[];
  resolved: boolean;
  remote?: boolean;
  referenceCount?: number;
  value: unknown;
};

type TokenReference = {
  label: string;
  url: string;
};

const styles = figmaTokenStyles as unknown as TokenStyle[];

const references: Record<string, TokenReference> = {
  gutenberg: {
    label: 'Gutenberg Storybook token documentation reference',
    url: 'https://wordpress.github.io/gutenberg/?path=/docs/tokens-color--page',
  },
  color: {
    label: 'Figma color source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=0-1',
  },
  typography: {
    label: 'Figma typography source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=5034-9624',
  },
  spacing: {
    label: 'Figma spacing source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7286-14018',
  },
  layoutGrid: {
    label: 'Figma layout grid source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7509-2853',
  },
  radiusStroke: {
    label: 'Figma radius and stroke source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7345-3157',
  },
  icons: {
    label: 'Figma icons source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=2-4',
  },
  elevations: {
    label: 'Figma elevations source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=51-13672',
  },
  illustrations: {
    label: 'Figma illustrations source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=1908-4646',
  },
  logo: {
    label: 'Figma logo source',
    url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=30-17051',
  },
};

const pageStyle: CSSProperties = {
  color: '#313131',
  display: 'grid',
  fontFamily: 'Open Sans, Arial, sans-serif',
  gap: 24,
  maxWidth: 1280,
};

const introStyle: CSSProperties = {
  color: '#434343',
  fontSize: 16,
  lineHeight: 1.65,
  margin: 0,
  maxWidth: 860,
};

const panelStyle: CSSProperties = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #E6E6E6',
  borderRadius: 8,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  padding: 20,
};

const tableStyle: CSSProperties = {
  borderCollapse: 'collapse',
  fontSize: 14,
  lineHeight: 1.45,
  width: '100%',
};

const thStyle: CSSProperties = {
  borderBottom: '1px solid #D3D3D3',
  color: '#313131',
  fontSize: 12,
  letterSpacing: 0,
  padding: '10px 12px',
  textAlign: 'left',
  textTransform: 'uppercase',
};

const tdStyle: CSSProperties = {
  borderBottom: '1px solid #E6E6E6',
  padding: '12px',
  verticalAlign: 'top',
};

const codeStyle: CSSProperties = {
  backgroundColor: '#F5F7F8',
  border: '1px solid #E1E8EA',
  borderRadius: 4,
  color: '#313131',
  display: 'inline-block',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: 13,
  padding: '2px 6px',
};

const foundationPageStyle: CSSProperties = {
  ...pageStyle,
  backgroundColor: '#F5F5F5',
  gap: 0,
  width: 'min(1280px, calc(100vw - 64px))',
};

const foundationHeroStyle: CSSProperties = {
  background: 'linear-gradient(135deg, #0A5253 0%, #0C6466 52%, #0A3F40 100%)',
  color: '#FFFFFF',
  display: 'grid',
  gap: 14,
  minHeight: 174,
  padding: '40px 48px 34px',
};

const foundationBoardStyle: CSSProperties = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #E6E6E6',
  display: 'grid',
  gap: 28,
  padding: 36,
};

function getCategory(category: TokenCategory) {
  return styles.filter((style) => style.category === category);
}

function pathName(style: TokenStyle) {
  return style.path?.join('.') ?? style.name.replace(/\//g, '.').replace(/ /g, '_').toLowerCase();
}

function sourceStatus(category: TokenCategory) {
  const categoryStyles = getCategory(category);

  return {
    count: categoryStyles.length,
    unresolved: categoryStyles.filter((style) => !style.resolved).length,
    remote: categoryStyles.filter((style) => style.remote).length,
  };
}

function getObject(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
}

function getColorHex(value: unknown): string | null {
  const record = getObject(value);
  const color = getObject(record?.color);
  return typeof color?.hex === 'string' ? color.hex : null;
}

function describeColor(style: TokenStyle) {
  const record = getObject(style.value);
  const type = typeof record?.type === 'string' ? record.type : style.styleType;
  const hex = getColorHex(style.value);

  return hex ?? type;
}

function getColorBackground(value: unknown) {
  const hex = getColorHex(value);
  if (hex) {
    return hex;
  }

  const record = getObject(value);
  const gradientStops = Array.isArray(record?.gradientStops) ? record.gradientStops : [];
  if (gradientStops.length > 0) {
    const stops = gradientStops
      .map((stop) => {
        const stopRecord = getObject(stop);
        const color = getObject(stopRecord?.color);
        const stopHex = typeof color?.hex === 'string' ? color.hex : '#F5F5F5';
        const position = typeof stopRecord?.position === 'number' ? Math.round(stopRecord.position * 100) : 0;
        return `${stopHex} ${position}%`;
      })
      .join(', ');
    return `linear-gradient(90deg, ${stops})`;
  }

  return '#F5F5F5';
}

function prettyGroupName(group: string) {
  return group
    .replace(/\//g, ' / ')
    .replace(/_/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

function sortByName(a: TokenStyle, b: TokenStyle) {
  return a.name.localeCompare(b.name, undefined, { numeric: true });
}

function groupByTopPath(tokenStyles: TokenStyle[]) {
  return tokenStyles.reduce<Record<string, TokenStyle[]>>((groups, style) => {
    const group = style.path?.[0] ?? style.name.split('/')[0] ?? 'tokens';
    groups[group] = groups[group] ?? [];
    groups[group].push(style);
    return groups;
  }, {});
}

function groupColorStyles(tokenStyles: TokenStyle[]) {
  return tokenStyles.reduce<Record<string, TokenStyle[]>>((groups, style) => {
    const [top, second] = style.path ?? [];
    const group = top === 'semantic' && second ? `semantic/${second}` : top === 'illustrative' && second ? `illustrative/${second}` : top ?? style.name.split('/')[0] ?? 'tokens';
    groups[group] = groups[group] ?? [];
    groups[group].push(style);
    return groups;
  }, {});
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'grid', gap: 6 }}>
        <h2 style={{ borderBottom: '1px solid #D3D3D3', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 28, margin: 0, paddingBottom: 8 }}>
          {title}
        </h2>
        {description ? <p style={introStyle}>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

function SourceLinks({ items }: { items: TokenReference[] }) {
  return (
    <div style={{ ...panelStyle, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {items.map((item) => (
        <a
          href={item.url}
          key={item.url}
          rel="noreferrer"
          style={{
            alignItems: 'center',
            border: '1px solid #D3D3D3',
            borderRadius: 999,
            color: '#0C6466',
            display: 'inline-flex',
            fontSize: 14,
            fontWeight: 700,
            padding: '8px 12px',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

function SummaryCards({
  items,
}: {
  items: Array<{ label: string; value: string | number; detail?: string }>;
}) {
  return (
    <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
      {items.map((item) => (
        <div key={item.label} style={panelStyle}>
          <strong style={{ color: '#5C5C5C', display: 'block', fontSize: 12, textTransform: 'uppercase' }}>{item.label}</strong>
          <span style={{ color: '#0C6466', display: 'block', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 30, fontWeight: 700, marginTop: 6 }}>
            {item.value}
          </span>
          {item.detail ? <span style={{ color: '#5C5C5C', display: 'block', fontSize: 13, marginTop: 4 }}>{item.detail}</span> : null}
        </div>
      ))}
    </div>
  );
}

function DataStatus({
  label,
  status,
  notes,
}: {
  label: string;
  status: 'Code-backed' | 'Figma source only';
  notes: string;
}) {
  return (
    <div style={{ ...panelStyle, display: 'grid', gap: 8 }}>
      <strong style={{ color: status === 'Code-backed' ? '#0B7639' : '#AB241F', fontSize: 14 }}>{status}</strong>
      <span style={{ color: '#313131', fontSize: 16, fontWeight: 700 }}>{label}</span>
      <p style={{ ...introStyle, fontSize: 14 }}>{notes}</p>
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div style={{ ...panelStyle, overflowX: 'auto' }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} style={thStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={tdStyle}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FoundationBrand() {
  return (
    <div style={{ alignItems: 'center', display: 'inline-grid', gap: 8, gridTemplateColumns: '24px auto' }}>
      <span
        aria-hidden="true"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.22)',
          borderRadius: 4,
          display: 'inline-block',
          height: 24,
          position: 'relative',
          width: 24,
        }}
      >
        <span
          style={{
            borderBottom: '10px solid #FFFFFF',
            borderLeft: '9px solid transparent',
            borderRight: '9px solid transparent',
            height: 0,
            left: 3,
            position: 'absolute',
            top: 5,
            width: 0,
          }}
        />
        <span style={{ backgroundColor: '#FFFFFF', bottom: 4, height: 8, left: 6, position: 'absolute', width: 12 }} />
      </span>
      <span style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 800, letterSpacing: 0, lineHeight: 1.05 }}>
        GRAMEEN
        <br />
        AMERICA
      </span>
    </div>
  );
}

function FoundationPage({
  title,
  description,
  references: sourceLinks,
  children,
}: {
  title: string;
  description: string;
  references?: TokenReference[];
  children: ReactNode;
}) {
  return (
    <main style={foundationPageStyle}>
      <header style={foundationHeroStyle}>
        <FoundationBrand />
        <h1 style={{ color: '#FFFFFF', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 34, lineHeight: 1.1, margin: 0 }}>{title}</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: 13, lineHeight: 1.65, margin: 0, maxWidth: 780 }}>{description}</p>
        {sourceLinks ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
            {sourceLinks.map((item) => (
              <a
                href={item.url}
                key={item.url}
                rel="noreferrer"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.32)',
                  borderRadius: 999,
                  color: '#FFFFFF',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '6px 10px',
                  textDecoration: 'none',
                }}
                target="_blank"
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>
      <div style={foundationBoardStyle}>{children}</div>
    </main>
  );
}

const tokenPageStyle: CSSProperties = {
  ...pageStyle,
  gap: 28,
  maxWidth: 1040,
};

const tokenH1Style: CSSProperties = {
  color: '#111827',
  fontFamily: 'Raleway, Open Sans, Arial, sans-serif',
  fontSize: 34,
  lineHeight: 1.2,
  margin: 0,
};

const tokenH2Style: CSSProperties = {
  borderBottom: '1px solid #D3D3D3',
  color: '#111827',
  fontFamily: 'Raleway, Open Sans, Arial, sans-serif',
  fontSize: 26,
  lineHeight: 1.25,
  margin: 0,
  paddingBottom: 6,
};

const tokenH3Style: CSSProperties = {
  color: '#111827',
  fontFamily: 'Raleway, Open Sans, Arial, sans-serif',
  fontSize: 20,
  lineHeight: 1.25,
  margin: 0,
};

function TokenDocPage({
  title,
  description,
  references: sourceLinks,
  children,
}: {
  title: string;
  description: string;
  references?: TokenReference[];
  children: ReactNode;
}) {
  return (
    <main style={tokenPageStyle}>
      <h1 style={tokenH1Style}>{title}</h1>
      <p style={{ ...introStyle, color: '#111827', maxWidth: 'none' }}>{description}</p>
      {sourceLinks ? (
        <p style={{ ...introStyle, fontSize: 14, maxWidth: 'none' }}>
          References:{' '}
          {sourceLinks.map((item, index) => (
            <span key={item.url}>
              {index > 0 ? ' and ' : null}
              <a href={item.url}>{item.label}</a>
            </span>
          ))}
          .
        </p>
      ) : null}
      {children}
    </main>
  );
}

function TokenSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section style={{ display: 'grid', gap: 18, minWidth: 0 }}>
      <h2 style={tokenH2Style}>{title}</h2>
      {description ? <div style={{ color: '#111827', fontSize: 15, lineHeight: 1.65 }}>{description}</div> : null}
      {children}
    </section>
  );
}

function TokenExamplePanel({ children }: { children: ReactNode }) {
  return <div style={{ ...panelStyle, borderRadius: 4, boxShadow: '0 1px 2px rgba(0, 0, 0, 0.12)' }}>{children}</div>;
}

function ColorTokenSwatch({ style }: { style: TokenStyle }) {
  return (
    <div style={{ alignItems: 'start', display: 'grid', gap: 8, gridTemplateColumns: '48px minmax(86px, 1fr)' }}>
      <span
        aria-label={`${style.name} color swatch`}
        style={{
          background: getColorBackground(style.value),
          border: '1px solid #D3D3D3',
          borderRadius: 4,
          display: 'inline-block',
          height: 22,
          width: 48,
        }}
      />
      <span style={{ color: '#313131', display: 'grid', fontSize: 9.5, gap: 2, lineHeight: 1.2 }}>
        <strong style={{ fontSize: 10.5 }}>{style.name.split('/').slice(1).join('/') || style.name}</strong>
        <span>{describeColor(style)}</span>
        <span style={{ color: '#6F6F6F' }}>{pathName(style)}</span>
      </span>
    </div>
  );
}

function ColorTokenColumn({ group, groupStyles }: { group: string; groupStyles: TokenStyle[] }) {
  return (
    <section style={{ display: 'grid', gap: 8, minWidth: 156 }}>
      <h2 style={{ color: '#0C6466', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 13, margin: 0 }}>
        {prettyGroupName(group)}
      </h2>
      <div style={{ display: 'grid', gap: 7 }}>
        {groupStyles.map((style) => (
          <ColorTokenSwatch key={`${style.id}-${style.name}`} style={style} />
        ))}
      </div>
    </section>
  );
}

function preferColorStyle(current: TokenStyle | undefined, candidate: TokenStyle) {
  if (!current) {
    return candidate;
  }

  if (current.remote && !candidate.remote) {
    return candidate;
  }

  if (!current.resolved && candidate.resolved) {
    return candidate;
  }

  return (candidate.referenceCount ?? 0) > (current.referenceCount ?? 0) ? candidate : current;
}

function canonicalColorStyles(tokenStyles: TokenStyle[]) {
  const byPath = new Map<string, TokenStyle>();

  tokenStyles.forEach((style) => {
    const key = pathName(style);
    byPath.set(key, preferColorStyle(byPath.get(key), style));
  });

  return [...byPath.values()];
}

function colorScaleValue(style: TokenStyle) {
  const scaleName = style.path?.[style.path.length - 1] ?? style.name;
  const match = scaleName.match(/(\d+)/);

  return match ? Number(match[1]) : null;
}

function compareColorScale(a: TokenStyle, b: TokenStyle) {
  const aValue = colorScaleValue(a);
  const bValue = colorScaleValue(b);

  if (aValue !== null && bValue !== null && aValue !== bValue) {
    return bValue - aValue;
  }

  if (aValue !== null && bValue === null) {
    return -1;
  }

  if (aValue === null && bValue !== null) {
    return 1;
  }

  return tokenLabel(a).localeCompare(tokenLabel(b), undefined, { numeric: true });
}

function colorStylesByPath(...path: string[]) {
  return canonicalColorStyles(
    getCategory('color').filter((style) => style.path?.length === path.length + 1 && path.every((part, index) => style.path?.[index] === part)),
  ).sort(compareColorScale);
}

function colorStyleByPath(...path: string[]) {
  return canonicalColorStyles(getCategory('color').filter((style) => style.path?.length === path.length && path.every((part, index) => style.path?.[index] === part)))[0];
}

function colorRowsBySecondPath(topPath: string, labelPrefix: string) {
  const secondPaths = [
    ...new Set(
      getCategory('color')
        .filter((style) => style.path?.[0] === topPath && style.path.length === 3)
        .map((style) => style.path?.[1])
        .filter(Boolean) as string[],
    ),
  ].sort((a, b) => prettyGroupName(a).localeCompare(prettyGroupName(b)));

  return secondPaths.map((secondPath) => ({
    name: `${labelPrefix} ${prettyGroupName(secondPath)}`,
    styles: colorStylesByPath(topPath, secondPath),
  }));
}

function tokenLabel(style: TokenStyle) {
  const parts = style.path ?? [];
  const label = parts.length > 0 ? parts[parts.length - 1] : style.name;
  return label.replace(/_/g, '-');
}

function ColorSwatchStrip({ styles: tokenStyles }: { styles: TokenStyle[] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        minWidth: 0,
        width: '100%',
      }}
    >
      {tokenStyles.map((style) => (
        <div
          key={`${style.id}-${pathName(style)}-${describeColor(style)}`}
          style={{
            display: 'grid',
            flex: '1 1 84px',
            gap: 6,
            maxWidth: 112,
            minWidth: 72,
            width: 84,
          }}
        >
          <span
            aria-label={`${style.name}: ${describeColor(style)}`}
            style={{
              background: getColorBackground(style.value),
              border: '1px solid #D3D3D3',
              borderRadius: 4,
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.14)',
              display: 'block',
              height: 50,
              minWidth: 0,
              width: '100%',
            }}
          />
          <span
            style={{
              color: '#5C5C5C',
              display: 'block',
              fontFamily: 'Menlo, Consolas, monospace',
              fontSize: 12,
              lineHeight: 1.3,
              minWidth: 0,
              overflowWrap: 'anywhere',
              textAlign: 'center',
            }}
          >
            {tokenLabel(style)}
            <br />
            {describeColor(style)}
          </span>
        </div>
      ))}
    </div>
  );
}

function ColorTokenRow({ name, styles: tokenStyles }: { name: string; styles: TokenStyle[] }) {
  if (tokenStyles.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        alignItems: 'start',
        borderTop: '1px solid #E6E6E6',
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'minmax(112px, 160px) minmax(0, 1fr)',
        minWidth: 0,
        padding: '22px 0',
      }}
    >
      <strong style={{ color: '#111827', fontSize: 15, lineHeight: 1.4 }}>{name}</strong>
      <ColorSwatchStrip styles={tokenStyles} />
    </div>
  );
}

function ColorTokenSection({
  title,
  description,
  rows,
}: {
  title: string;
  description?: ReactNode;
  rows: Array<{ name: string; styles: TokenStyle[] }>;
}) {
  return (
    <section style={{ display: 'grid', gap: 12, minWidth: 0 }}>
      <h2 style={{ borderBottom: '1px solid #D3D3D3', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 26, lineHeight: 1.25, margin: 0, paddingBottom: 6 }}>
        {title}
      </h2>
      {description ? <div style={{ color: '#111827', fontSize: 15, lineHeight: 1.65 }}>{description}</div> : null}
      <div style={{ alignItems: 'center', color: '#5C5C5C', display: 'grid', fontSize: 14, fontWeight: 700, gap: 16, gridTemplateColumns: 'minmax(112px, 160px) minmax(0, 1fr)', minWidth: 0 }}>
        <span>Name</span>
        <span>Swatches</span>
      </div>
      <div style={{ minWidth: 0 }}>
        {rows.map((row) => (
          <ColorTokenRow key={row.name} name={row.name} styles={row.styles} />
        ))}
      </div>
    </section>
  );
}

export function TokensOverviewPage() {
  return (
    <TokenDocPage
      description="Token documentation keeps Figma, code, and Storybook aligned. These pages follow the Gutenberg token docs pattern: source link, visual examples, and implementation tables."
      references={[references.gutenberg]}
      title="Design tokens"
    >
      <TokenSection
        description={
          <p style={{ margin: 0 }}>
            Current export status: {figmaTokenMeta.styleCount} styles, {figmaTokenMeta.resolvedStyleCount} resolved.
          </p>
        }
        title="Token families"
      >
        <Table
          headers={['Family', 'Storybook source', 'Figma reference']}
          rows={[
            ['Color', `${sourceStatus('color').count} code-backed styles`, <a href={references.color.url}>Color</a>],
            ['Typography', `${sourceStatus('text').count} code-backed styles`, <a href={references.typography.url}>Typography</a>],
            ['Spacing', 'Figma source linked, no exported spacing token values yet', <a href={references.spacing.url}>Spacing</a>],
            ['Layout grid', `${sourceStatus('grid').count} code-backed styles`, <a href={references.layoutGrid.url}>Layout grid</a>],
            ['Radius and stroke', 'Figma source linked, no exported radius/stroke token values yet', <a href={references.radiusStroke.url}>Radius and Stroke</a>],
            ['Icons', 'Local Icon component gallery plus Figma source', <a href={references.icons.url}>Icons</a>],
            ['Elevations', `${sourceStatus('effect').count} code-backed effect styles`, <a href={references.elevations.url}>Elevations</a>],
            ['Illustrations', 'Local usage guidance plus Figma source', <a href={references.illustrations.url}>Illustrations</a>],
            ['Logo', 'Local Logo component preview plus Figma source', <a href={references.logo.url}>Logo</a>],
          ]}
        />
      </TokenSection>
    </TokenDocPage>
  );
}

export function ColorTokensPage() {
  const accentColor = colorStyleByPath('primary', 'base_90') ?? colorStyleByPath('primary', '100');

  return (
    <TokenDocPage
      description="This document outlines the default color tokens in the Gra design system. Core UI colors stay on this page; heavier decorative palettes live in the color reference page."
      references={[references.gutenberg, references.color]}
      title="Color tokens"
    >
      <ColorTokenSection
        description={
          <p style={{ margin: 0 }}>
            Gra components use the brand teal family as the primary accent. When a product context needs a focused action color, use the brand accent before introducing a one-off value.
          </p>
        }
        rows={[{ name: 'Brand Teal', styles: accentColor ? [accentColor] : [] }]}
        title="Accent"
      />

      <ColorTokenSection
        rows={[
          { name: 'Black & White', styles: [colorStyleByPath('grey_scale', '100'), colorStyleByPath('grey_scale', '00')].filter(Boolean) as TokenStyle[] },
          { name: 'Grey Tones', styles: colorStylesByPath('grey_scale').filter((style) => !['100', '00'].includes(style.path?.[1] ?? '')) },
          { name: 'Primary', styles: colorStylesByPath('primary') },
          { name: 'Secondary', styles: colorStylesByPath('secondary') },
          { name: 'Semantic Green', styles: colorStylesByPath('semantic', 'green') },
          { name: 'Semantic Red', styles: colorStylesByPath('semantic', 'red') },
          { name: 'Semantic Orange', styles: colorStylesByPath('semantic', 'orange') },
          { name: 'Semantic Yellow', styles: colorStylesByPath('semantic', 'yellow') },
        ]}
        title="Colors"
      />

      <section style={{ ...panelStyle, display: 'grid', gap: 8 }}>
        <h2 style={{ color: '#111827', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 20, lineHeight: 1.25, margin: 0 }}>Extended Palettes</h2>
        <p style={{ ...introStyle, color: '#111827', fontSize: 14, maxWidth: 'none' }}>
          Illustration, card decoration, and gradient palettes are separated from the core scale so this page loads faster and stays focused on product UI colors.
        </p>
        <a href="/?path=/docs/tokens-color-reference--docs" style={{ color: '#0C6466', fontSize: 14, fontWeight: 700 }} target="_top">
          Open extended color reference
        </a>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h2 style={{ borderBottom: '1px solid #D3D3D3', color: '#111827', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 26, lineHeight: 1.25, margin: 0, paddingBottom: 6 }}>
          Contrast
        </h2>
        <p style={{ ...introStyle, color: '#111827', maxWidth: 'none' }}>
          Ensure proper contrast between text, icons, UI, and backgrounds. Text should meet a 4.5:1 ratio for WCAG AA, while large text and UI boundaries should meet 3:1.
        </p>
        <p style={{ ...introStyle, color: '#111827', maxWidth: 'none' }}>Against a white background:</p>
        <ul style={{ color: '#111827', display: 'grid', fontSize: 15, gap: 10, lineHeight: 1.6, margin: 0, paddingLeft: 22 }}>
          <li>
            <strong>Grey Scale 70 and darker</strong> are preferred for body text and high-emphasis content.
          </li>
          <li>
            <strong>Primary 90 and Primary 100</strong> are preferred for branded text, selected states, and primary actions.
          </li>
          <li>
            <strong>Semantic 80 and darker</strong> should be used for status text that must remain readable without relying on color alone.
          </li>
        </ul>
      </section>
    </TokenDocPage>
  );
}

export function ColorReferenceTokensPage() {
  return (
    <TokenDocPage
      description="Extended color palettes are available for illustrations, decorative surfaces, and gradient backgrounds. Keep core interface colors on the main Color page and use these values intentionally."
      references={[references.gutenberg, references.color]}
      title="Color reference tokens"
    >
      <ColorTokenSection
        rows={[
          { name: 'Card Decoration', styles: colorStylesByPath('card_decoration') },
          ...colorRowsBySecondPath('illustrative', 'Illustrative'),
          { name: 'Gradients', styles: colorStylesByPath('gradient') },
        ]}
        title="Extended Colors"
      />
    </TokenDocPage>
  );
}

function typographyValue(style: TokenStyle) {
  return getObject(style.value);
}

function typographyFontFamily(style: TokenStyle) {
  const value = typographyValue(style);
  return typeof value?.fontFamily === 'string' ? value.fontFamily : 'Unresolved';
}

function typographyNumber(style: TokenStyle, key: 'fontSize' | 'lineHeightPx' | 'fontWeight' | 'letterSpacing') {
  const value = typographyValue(style);
  return typeof value?.[key] === 'number' ? value[key] : null;
}

function preferTypographyStyle(current: TokenStyle | undefined, candidate: TokenStyle) {
  if (!current) {
    return candidate;
  }

  if (!current.resolved && candidate.resolved) {
    return candidate;
  }

  if (typographyFontFamily(current) === 'Unresolved' && typographyFontFamily(candidate) !== 'Unresolved') {
    return candidate;
  }

  if (current.remote && !candidate.remote) {
    return candidate;
  }

  return (candidate.referenceCount ?? 0) > (current.referenceCount ?? 0) ? candidate : current;
}

function canonicalTypographyStyles(tokenStyles: TokenStyle[]) {
  const byPathAndFamily = new Map<string, TokenStyle>();

  tokenStyles.forEach((style) => {
    const key = `${typographyFontFamily(style)}-${pathName(style)}`;
    byPathAndFamily.set(key, preferTypographyStyle(byPathAndFamily.get(key), style));
  });

  return [...byPathAndFamily.values()];
}

function weightLabel(weight: number | null) {
  switch (weight) {
    case 300:
      return 'Light';
    case 400:
      return 'Regular';
    case 500:
      return 'Medium';
    case 600:
      return 'Semibold';
    case 700:
      return 'Bold';
    default:
      return weight ? String(weight) : 'Unresolved';
  }
}

function titleCaseToken(value: string) {
  return value
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

function typographyType(style: TokenStyle) {
  const path = style.path ?? [];
  const [category, size] = path;

  if (!category) {
    return 'Text';
  }

  if ((category === 'display' || category === 'body' || category === 'sub_heading') && size && !['regular', 'medium', 'semi_bold', 'semibold', 'bold', 'light'].includes(size)) {
    return `${titleCaseToken(category)} ${titleCaseToken(size)}`;
  }

  return titleCaseToken(category);
}

function typographyName(style: TokenStyle) {
  const type = typographyType(style);
  const path = style.path ?? [];
  const styleName = path[path.length - 1] ?? style.name;
  const isDecorated = styleName.includes('italic') || styleName.includes('underline');
  const weight = isDecorated ? titleCaseToken(styleName) : weightLabel(typographyNumber(style, 'fontWeight'));

  return `${type} ${weight}`;
}

function typographySortValue(style: TokenStyle) {
  const path = style.path ?? [];
  const categoryOrder: Record<string, number> = {
    display: 0,
    heading: 1,
    sub_heading: 2,
    body: 3,
    caption: 4,
    typography: 5,
  };
  const sizeOrder: Record<string, number> = {
    medium: 0,
    small: 1,
    regular: 2,
  };
  const weightOrder: Record<string, number> = {
    light: 0,
    regular: 1,
    medium: 2,
    semi_bold: 3,
    semibold: 3,
    bold: 4,
    bold_italic: 5,
    bold_underline: 6,
  };

  return [
    categoryOrder[path[0] ?? ''] ?? 99,
    sizeOrder[path[1] ?? 'regular'] ?? 2,
    weightOrder[path[path.length - 1] ?? ''] ?? 99,
    pathName(style),
  ] as const;
}

function compareTypography(a: TokenStyle, b: TokenStyle) {
  const aSort = typographySortValue(a);
  const bSort = typographySortValue(b);

  for (let index = 0; index < aSort.length; index += 1) {
    if (aSort[index] < bSort[index]) {
      return -1;
    }

    if (aSort[index] > bSort[index]) {
      return 1;
    }
  }

  return 0;
}

function typographyStylesByFamily(fontFamily: string) {
  return canonicalTypographyStyles(getCategory('text'))
    .filter((style) => typographyFontFamily(style) === fontFamily)
    .sort(compareTypography);
}

function TypographySpecimen({ fontFamily }: { fontFamily: string }) {
  return (
    <div style={{ display: 'grid', gap: 14, minWidth: 220 }}>
      <h2 style={{ color: '#313131', fontFamily, fontSize: 16, fontWeight: 700, margin: 0 }}>{fontFamily}</h2>
      <div style={{ color: '#313131', display: 'grid', fontFamily, gap: 10 }}>
        <strong style={{ fontSize: 13, letterSpacing: 2, lineHeight: 1.5 }}>A B C D E F G H I J K L M N O P<br />Q R S T U V W X Y Z</strong>
        <strong style={{ fontSize: 13, letterSpacing: 2, lineHeight: 1.5, textTransform: 'lowercase' }}>A B C D E F G H I J K L M N O P<br />Q R S T U V W X Y Z</strong>
        <strong style={{ fontSize: 13, letterSpacing: 0, lineHeight: 1.5 }}>1234567890</strong>
      </div>
    </div>
  );
}

function TypographyScaleTable({ fontFamily, tokenStyles }: { fontFamily: string; tokenStyles: TokenStyle[] }) {
  return (
    <div style={{ minWidth: 0, overflowX: 'auto' }}>
      <table style={{ ...tableStyle, minWidth: 520 }}>
        <thead>
          <tr>
            {['Font', 'Name', 'Type', 'Properties'].map((header) => (
              <th
                key={header}
                style={{
                  ...thStyle,
                  backgroundColor: '#0C6466',
                  borderBottom: 0,
                  color: '#FFFFFF',
                  textTransform: 'none',
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tokenStyles.map((style, index) => {
            const fontSize = typographyNumber(style, 'fontSize');
            const lineHeight = typographyNumber(style, 'lineHeightPx');
            const fontWeight = typographyNumber(style, 'fontWeight');
            const letterSpacing = typographyNumber(style, 'letterSpacing');

            return (
              <tr key={`${fontFamily}-${pathName(style)}`}>
                <td style={{ ...tdStyle, color: '#5C5C5C', fontSize: 11, width: 64 }}>{index === 0 ? fontFamily : ''}</td>
                <td style={{ ...tdStyle, width: '42%' }}>
                  <span
                    style={{
                      color: '#313131',
                      display: 'block',
                      fontFamily,
                      fontSize: fontSize ?? 14,
                      fontWeight: fontWeight ?? 400,
                      letterSpacing: letterSpacing ? `${letterSpacing}px` : 0,
                      lineHeight: lineHeight ? `${lineHeight}px` : undefined,
                    }}
                  >
                    {typographyName(style)}
                  </span>
                </td>
                <td style={{ ...tdStyle, color: '#5C5C5C', fontSize: 11 }}>{typographyType(style)}</td>
                <td style={{ ...tdStyle, color: '#5C5C5C', fontSize: 11, lineHeight: 1.45 }}>
                  Weight: {weightLabel(fontWeight)}
                  <br />
                  Font Size: {fontSize ? `${fontSize}px` : 'Unresolved'}
                  <br />
                  Line Height: {lineHeight ? `${Number(lineHeight.toFixed(2))}px` : 'Unresolved'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function TypographyTokensPage() {
  const ralewayStyles = typographyStylesByFamily('Raleway');
  const openSansStyles = typographyStylesByFamily('Open Sans');

  return (
    <TokenDocPage
      description="Typography is critical for communicating the hierarchy of a page. Use typography to present design and content as clearly and efficiently as possible."
      references={[references.typography]}
      title="Typography tokens"
    >
      <TokenSection
        description={
          <>
            <p style={{ margin: 0 }}>Semantic typography tokens compose font family, weight, size, and line height into reusable text styles.</p>
            <p style={{ margin: '12px 0 0' }}>In product code these styles should be consumed as shared text styles or component-level typography decisions, not one-off font declarations.</p>
          </>
        }
        title="Semantic tokens"
      >
        <TokenExamplePanel>
          <pre style={{ color: '#111827', fontFamily: 'Menlo, Consolas, monospace', fontSize: 13, lineHeight: 1.6, margin: 0, whiteSpace: 'pre-wrap' }}>
{`.page-title {
  font-family: Raleway, Open Sans, Arial, sans-serif;
  font-size: 34px;
  line-height: 42.5px;
  font-weight: 700;
}`}
          </pre>
        </TokenExamplePanel>
      </TokenSection>

      <TokenSection title="Brand fonts">
        <TokenExamplePanel>
          <div style={{ alignItems: 'center', display: 'grid', gap: 32, gridTemplateColumns: '96px repeat(auto-fit, minmax(220px, 1fr))' }}>
            <strong style={{ color: '#0C6466', fontSize: 12 }}>Brand Fonts</strong>
            <TypographySpecimen fontFamily="Raleway" />
            <TypographySpecimen fontFamily="Open Sans" />
          </div>
        </TokenExamplePanel>
      </TokenSection>

      <TokenSection title="Type styles">
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}>
          <section style={{ display: 'grid', gap: 12, minWidth: 0 }}>
            <h3 style={tokenH3Style}>Raleway</h3>
            <TypographyScaleTable fontFamily="Raleway" tokenStyles={ralewayStyles} />
          </section>
          <section style={{ display: 'grid', gap: 12, minWidth: 0 }}>
            <h3 style={tokenH3Style}>Open Sans</h3>
            <TypographyScaleTable fontFamily="Open Sans" tokenStyles={openSansStyles} />
          </section>
        </div>
      </TokenSection>
    </TokenDocPage>
  );
}

function effectToCss(value: unknown): string {
  const effects = Array.isArray(value) ? value : [value];

  return effects
    .map((effect) => {
      const record = getObject(effect);
      const type = String(record?.type ?? 'EFFECT');
      const radius = typeof record?.radius === 'number' ? record.radius : 0;
      const spread = typeof record?.spread === 'number' ? record.spread : 0;
      const offset = getObject(record?.offset);
      const color = getColorHex(record) ?? 'rgba(0, 0, 0, 0.16)';
      const x = typeof offset?.x === 'number' ? offset.x : 0;
      const y = typeof offset?.y === 'number' ? offset.y : 0;

      if (type === 'BACKGROUND_BLUR' || type === 'LAYER_BLUR') {
        return `blur(${radius}px)`;
      }

      if (type === 'INNER_SHADOW') {
        return `inset ${x}px ${y}px ${radius}px ${spread}px ${color}`;
      }

      return `${x}px ${y}px ${radius}px ${spread}px ${color}`;
    })
    .join(', ');
}

export function ElevationTokensPage() {
  const effectStyles = getCategory('effect').sort(sortByName);

  return (
    <TokenDocPage
      description="Elevation styles separate surfaces, overlays, and interactive layers. These values render the exported Figma effects as shadows and blurs."
      references={[references.elevations]}
      title="Elevation tokens"
    >
      <TokenSection
        description={<p style={{ margin: 0 }}>Elevation tokens compose shadow and blur primitives into reusable surface styles.</p>}
        title="Semantic tokens"
      >
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {effectStyles.map((style) => {
            const css = effectToCss(style.value);
            const isBlur = css.startsWith('blur');

            return (
              <TokenExamplePanel key={`${style.id}-${style.name}`}>
                <div
                  aria-hidden="true"
                  style={{
                    alignItems: 'center',
                    backgroundColor: isBlur ? 'rgba(12, 100, 102, 0.12)' : '#FFFFFF',
                    border: '1px solid #E6E6E6',
                    borderRadius: 8,
                    boxShadow: isBlur ? undefined : css,
                    color: '#0C6466',
                    display: 'flex',
                    height: 96,
                    justifyContent: 'center',
                    marginBottom: 16,
                    overflow: 'hidden',
                  }}
                >
                  <span style={{ backdropFilter: isBlur ? css : undefined, backgroundColor: isBlur ? 'rgba(255, 255, 255, 0.55)' : undefined, borderRadius: 6, padding: '8px 12px' }}>
                    Preview
                  </span>
                </div>
                <strong style={{ display: 'block' }}>{style.name}</strong>
                <span style={codeStyle}>{pathName(style)}</span>
                <p style={{ color: '#5C5C5C', fontSize: 13, lineHeight: 1.5 }}>{css}</p>
              </TokenExamplePanel>
            );
          })}
        </div>
      </TokenSection>
    </TokenDocPage>
  );
}

function gridDescription(value: unknown) {
  const grids = Array.isArray(value) ? value : [value];

  return grids
    .map((grid) => {
      const record = getObject(grid);
      const pattern = String(record?.pattern ?? 'GRID');
      const count = typeof record?.count === 'number' ? record.count : '-';
      const section = typeof record?.sectionSize === 'number' ? `${Number(record.sectionSize).toFixed(2)}px` : '-';
      const gutter = typeof record?.gutterSize === 'number' ? `${record.gutterSize}px` : '-';
      const offset = typeof record?.offset === 'number' ? `${record.offset}px` : '-';
      return `${pattern}: ${count} columns/rows, ${section} section, ${gutter} gutter, ${offset} offset`;
    })
    .join(' | ');
}

export function LayoutGridTokensPage() {
  const gridStyles = getCategory('grid').sort(sortByName);

  return (
    <TokenDocPage
      description="Layout grid styles define the structural columns, gutters, and offsets used for mobile, tablet, desktop, and icon guidelines."
      references={[references.layoutGrid]}
      title="Layout grid tokens"
    >
      <TokenSection
        description={<p style={{ margin: 0 }}>Grid tokens document the layout primitives available from the Figma export.</p>}
        title="Primitive tokens"
      >
        <Table
          headers={['Token', 'Type', 'Grid values', 'Figma style id']}
          rows={gridStyles.map((style) => [<span style={codeStyle}>{pathName(style)}</span>, style.styleType, gridDescription(style.value), style.id])}
        />
      </TokenSection>
    </TokenDocPage>
  );
}

const localIconNames: IconName[] = [
  'arrowLeft',
  'arrowRight',
  'bell',
  'chevronDown',
  'check',
  'document',
  'externalLink',
  'helpCircle',
  'info',
  'menu',
  'minus',
  'plus',
  'search',
  'settings',
  'upload',
];

export function IconsTokensPage() {
  return (
    <TokenDocPage
      description="Icons provide compact visual support for familiar actions and statuses. The local set below is backed by the shared Icon component."
      references={[references.icons]}
      title="Icon tokens"
    >
      <TokenSection
        description={<p style={{ margin: 0 }}>The local Icon component exposes the names below. Continue to use Figma as the source for icon additions and naming reviews.</p>}
        title="Semantic tokens"
      >
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
          {localIconNames.map((name) => (
            <TokenExamplePanel key={name}>
              <div style={{ alignItems: 'center', display: 'grid', gap: 10, justifyItems: 'center' }}>
                <Icon name={name} title={name} width={28} height={28} />
                <span style={codeStyle}>{name}</span>
              </div>
            </TokenExamplePanel>
          ))}
        </div>
      </TokenSection>
    </TokenDocPage>
  );
}

export function LogoTokensPage() {
  return (
    <TokenDocPage
      description="Logo styles represent the core brand mark and lockup. This page shows the local logo component variants and links back to the source frame."
      references={[references.logo]}
      title="Logo tokens"
    >
      <TokenSection
        description={<p style={{ margin: 0 }}>The Logo component currently supports icon-only and full logo presentations.</p>}
        title="Semantic tokens"
      >
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <TokenExamplePanel>
            <strong style={{ display: 'block', marginBottom: 16 }}>Icon only</strong>
            <Logo type="iconOnly" />
          </TokenExamplePanel>
          <TokenExamplePanel>
            <strong style={{ display: 'block', marginBottom: 16 }}>Full</strong>
            <Logo type="full" />
          </TokenExamplePanel>
        </div>
      </TokenSection>
    </TokenDocPage>
  );
}

export function SpacingTokensPage() {
  return (
    <TokenDocPage
      description="Spacing and padding styles set the rhythm between interface elements. The current Storybook page keeps the Figma source visible until numeric values are exported to code."
      references={[references.spacing]}
      title="Spacing tokens"
    >
      <TokenSection
        description={<p style={{ margin: 0 }}>No spacing token category is present in <span style={codeStyle}>src/tokens/figma-tokens.json</span> yet. This page keeps the gap visible until spacing values are exported.</p>}
        title="Primitive tokens"
      >
        <Table
          headers={['Expected documentation', 'Current status', 'Next action']}
          rows={[
            ['Spacing scale', 'Linked to Figma only', 'Export numeric spacing variables into src/tokens'],
            ['Padding usage', 'Linked to Figma only', 'Map Figma padding tokens to component layout rules'],
            ['Component examples', 'Pending token export', 'Add usage examples once values are code-backed'],
          ]}
        />
      </TokenSection>
    </TokenDocPage>
  );
}

export function RadiusStrokeTokensPage() {
  return (
    <TokenDocPage
      description="Radius and stroke styles define shape, borders, and outline consistency. Dedicated code-backed values are still pending export from Figma."
      references={[references.radiusStroke]}
      title="Radius and stroke tokens"
    >
      <TokenSection
        description={<p style={{ margin: 0 }}>Dedicated radius and stroke tokens still need to be exported before this page can render a code-backed value table.</p>}
        title="Primitive tokens"
      >
        <Table
          headers={['Expected token', 'Current status', 'Storybook behavior']}
          rows={[
            ['Radius scale', 'Linked to Figma only', 'Visible as a documented gap'],
            ['Stroke widths', 'Linked to Figma only', 'Visible as a documented gap'],
            ['Stroke colors', 'Partially represented through color styles', 'Use Color Tokens for current color values'],
          ]}
        />
      </TokenSection>
    </TokenDocPage>
  );
}

export function IllustrationsTokensPage() {
  return (
    <TokenDocPage
      description="Illustrations are brand assets used for guidance, feedback, and empty states. This page links the Figma source and documents the current export gap."
      references={[references.illustrations]}
      title="Illustration tokens"
    >
      <TokenSection
        description={<p style={{ margin: 0 }}>No exported illustration asset manifest is available yet. Add a manifest before documenting individual illustration names, sizes, and usage rules as code-backed tokens.</p>}
        title="Semantic tokens"
      >
        <Table
          headers={['Asset area', 'Current status', 'Expected documentation']}
          rows={[
            ['Figma illustrations', 'Source linked', 'Asset name, intended use, dimensions, and export format'],
            ['Local illustration components', 'Available in component stories', 'Cross-link each component to its Figma asset source'],
            ['Brand usage rules', 'Pending asset manifest', 'Document when to use full illustrations versus icons or avatars'],
          ]}
        />
      </TokenSection>
    </TokenDocPage>
  );
}

export function TokenReferencesPage() {
  return (
    <TokenDocPage description="Reference links used to shape and validate the Storybook token documentation." title="Token references">
      <TokenSection title="Source references">
        <Table
          headers={['Reference', 'Purpose', 'Link']}
          rows={[
            ['Gutenberg token docs', 'Storybook documentation structure reference', <a href={references.gutenberg.url}>{references.gutenberg.url}</a>],
            ['Color', 'Figma source', <a href={references.color.url}>{references.color.url}</a>],
            ['Typography', 'Figma source', <a href={references.typography.url}>{references.typography.url}</a>],
            ['Spacing', 'Figma source', <a href={references.spacing.url}>{references.spacing.url}</a>],
            ['Layout grid', 'Figma source', <a href={references.layoutGrid.url}>{references.layoutGrid.url}</a>],
            ['Radius and Stroke', 'Figma source', <a href={references.radiusStroke.url}>{references.radiusStroke.url}</a>],
            ['Icons', 'Figma source', <a href={references.icons.url}>{references.icons.url}</a>],
            ['Elevations', 'Figma source', <a href={references.elevations.url}>{references.elevations.url}</a>],
            ['Illustrations', 'Figma source', <a href={references.illustrations.url}>{references.illustrations.url}</a>],
            ['Logo', 'Figma source', <a href={references.logo.url}>{references.logo.url}</a>],
          ]}
        />
      </TokenSection>
    </TokenDocPage>
  );
}
