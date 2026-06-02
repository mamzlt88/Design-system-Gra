import type { CSSProperties, ReactNode } from 'react';

import { componentTokens as tokens, figmaTokenMeta, figmaTokens, figmaTokenStyles } from '../../tokens';

type TokenLeaf = {
  name: string;
  path: string[];
  value: unknown;
};

type TokenStyle = {
  category: string;
  name: string;
  path?: string[];
  resolved?: boolean;
  styleType?: string;
  value?: unknown;
};

type PaintValue = {
  color?: { hex?: string };
  gradientStops?: Array<{ color?: { hex?: string }; position?: number }>;
};

type TextValue = {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeightPx?: number;
};

type EffectValue = {
  color?: { rgba?: { r: number; g: number; b: number; a: number } };
  offset?: { x?: number; y?: number };
  radius?: number;
  spread?: number;
  type?: string;
  visible?: boolean;
};

const pageStyle: CSSProperties = {
  color: tokens.color.grey80,
  display: 'grid',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  gap: tokens.spacing['3xl'],
  padding: tokens.spacing['3xl'],
};

const gridStyle: CSSProperties = {
  display: 'grid',
  gap: tokens.spacing.lg,
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
};

const cardStyle: CSSProperties = {
  background: tokens.color.grey00,
  border: `1px solid ${tokens.color.grey10}`,
  borderRadius: tokens.radius.md,
  display: 'grid',
  gap: tokens.spacing.sm,
  padding: tokens.spacing.lg,
};

const labelStyle: CSSProperties = {
  color: tokens.color.grey50,
  fontSize: tokens.typography.bodySmallRegular.fontSize,
  lineHeight: tokens.typography.bodySmallRegular.lineHeight,
  margin: 0,
};

const styles = figmaTokenStyles as unknown as TokenStyle[];

function firstValue<T>(value: unknown) {
  return (Array.isArray(value) ? value[0] : value) as T | undefined;
}

function flattenTokens(source: unknown, path: string[] = []): TokenLeaf[] {
  if (!source || typeof source !== 'object') {
    return [];
  }

  if ('value' in source) {
    return [{ name: path.join('/'), path, value: (source as { value: unknown }).value }];
  }

  return Object.entries(source).flatMap(([key, value]) => flattenTokens(value, [...path, key]));
}

function titleFromPath(path: string[]) {
  return path.join(' / ').split('_').join(' ');
}

function colorToCss(value: unknown) {
  const paint = firstValue<PaintValue>(value);
  if (paint?.color?.hex) {
    return paint.color.hex;
  }

  if (paint?.gradientStops?.length) {
    const stops = paint.gradientStops
      .map((stop) => `${stop.color?.hex ?? tokens.color.grey20} ${Math.round((stop.position ?? 0) * 100)}%`)
      .join(', ');
    return `linear-gradient(90deg, ${stops})`;
  }

  return tokens.color.grey10;
}

function shadowToCss(value: unknown) {
  const layers = (Array.isArray(value) ? value : [value]).filter(
    (layer): layer is EffectValue => Boolean(layer && typeof layer === 'object' && (layer as EffectValue).visible !== false),
  );

  if (!layers.length) {
    return undefined;
  }

  return layers
    .map((layer) => {
      const inset = layer.type === 'INNER_SHADOW' ? 'inset ' : '';
      const color = layer.color?.rgba;
      const shadowColor = color ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : 'rgba(0, 0, 0, 0.16)';
      return `${inset}${layer.offset?.x ?? 0}px ${layer.offset?.y ?? 0}px ${layer.radius ?? 0}px ${layer.spread ? `${layer.spread}px ` : ''}${shadowColor}`;
    })
    .join(', ');
}

function Page({ children, intro, title }: { children: ReactNode; intro: string; title: string }) {
  return (
    <section style={pageStyle}>
      <header style={{ display: 'grid', gap: tokens.spacing.sm }}>
        <p style={{ ...labelStyle, color: tokens.color.primary90, fontWeight: 700, textTransform: 'uppercase' }}>Tokens</p>
        <h1 style={{ ...tokens.typography.headingBold, margin: 0 }}>{title}</h1>
        <p style={{ ...tokens.typography.bodyRegular, color: tokens.color.grey50, margin: 0, maxWidth: 720 }}>{intro}</p>
      </header>
      {children}
    </section>
  );
}

function TokenCard({ children, title }: { children?: ReactNode; title: string }) {
  return (
    <article style={cardStyle}>
      <strong style={{ ...tokens.typography.bodySemiBold, color: tokens.color.grey80 }}>{title}</strong>
      {children}
    </article>
  );
}

export function ColorTokensPage() {
  const colorTokens = flattenTokens(figmaTokens.color);

  return (
    <Page intro={`${figmaTokenMeta.categories.color} color styles imported from the Figma token snapshot.`} title="Color">
      <div style={gridStyle}>
        {colorTokens.map((token) => (
          <TokenCard key={token.name} title={titleFromPath(token.path)}>
            <span aria-hidden="true" style={{ background: colorToCss(token.value), border: `1px solid ${tokens.color.grey10}`, borderRadius: tokens.radius.sm, height: 64 }} />
            <code style={labelStyle}>{colorToCss(token.value)}</code>
          </TokenCard>
        ))}
      </div>
    </Page>
  );
}

export function ColorReferenceTokensPage() {
  const grouped = ['grey_scale', 'primary', 'secondary', 'semantic', 'illustrative'] as const;

  return (
    <Page intro="Reference groups used by component color aliases." title="Color Reference">
      <div style={gridStyle}>
        {grouped.map((group) => (
          <TokenCard key={group} title={group.split('_').join(' ')}>
            <div style={{ display: 'grid', gap: tokens.spacing.xs }}>
              {flattenTokens(figmaTokens.color[group]).map((token) => (
                <span key={token.name} style={{ alignItems: 'center', display: 'grid', gap: tokens.spacing.sm, gridTemplateColumns: '32px 1fr' }}>
                  <span aria-hidden="true" style={{ background: colorToCss(token.value), border: `1px solid ${tokens.color.grey10}`, borderRadius: tokens.radius.xs, height: 32 }} />
                  <code style={labelStyle}>{titleFromPath(token.path)}</code>
                </span>
              ))}
            </div>
          </TokenCard>
        ))}
      </div>
    </Page>
  );
}

export function TypographyTokensPage() {
  const textTokens = flattenTokens(figmaTokens.text);

  return (
    <Page intro={`${figmaTokenMeta.categories.text} text styles imported from the Figma token snapshot.`} title="Typography">
      <div style={gridStyle}>
        {textTokens.map((token) => {
          const value = firstValue<TextValue>(token.value) ?? {};
          return (
            <TokenCard key={token.name} title={titleFromPath(token.path)}>
              <span
                style={{
                  fontFamily: `${value.fontFamily ?? 'Open Sans'}, Arial, sans-serif`,
                  fontSize: value.fontSize,
                  fontWeight: value.fontWeight,
                  lineHeight: value.lineHeightPx ? `${value.lineHeightPx}px` : undefined,
                }}
              >
                Grameen America
              </span>
              <code style={labelStyle}>
                {value.fontFamily} {value.fontWeight} {value.fontSize}/{value.lineHeightPx}
              </code>
            </TokenCard>
          );
        })}
      </div>
    </Page>
  );
}

export function ElevationTokensPage() {
  const effectTokens = flattenTokens(figmaTokens.effect).filter((token) => shadowToCss(token.value));

  return (
    <Page intro={`${figmaTokenMeta.categories.effect} elevation and shadow styles imported from the Figma token snapshot.`} title="Elevations">
      <div style={gridStyle}>
        {effectTokens.map((token) => (
          <TokenCard key={token.name} title={titleFromPath(token.path)}>
            <span aria-hidden="true" style={{ background: tokens.color.grey00, borderRadius: tokens.radius.md, boxShadow: shadowToCss(token.value), height: 72 }} />
            <code style={labelStyle}>{shadowToCss(token.value)}</code>
          </TokenCard>
        ))}
      </div>
    </Page>
  );
}

export function RadiusStrokeTokensPage() {
  const radii = Object.entries(tokens.radius);

  return (
    <Page intro="Radius and stroke primitives shared by component surfaces, controls, and indicators." title="Radius Stroke">
      <div style={gridStyle}>
        {radii.map(([name, value]) => (
          <TokenCard key={name} title={name}>
            <span aria-hidden="true" style={{ background: tokens.color.primary00, border: `1px solid ${tokens.color.primary20}`, borderRadius: value, height: 72 }} />
            <code style={labelStyle}>{String(value)}px</code>
          </TokenCard>
        ))}
      </div>
    </Page>
  );
}

export function SpacingTokensPage() {
  const spacing = Object.entries(tokens.spacing);

  return (
    <Page intro="Spacing primitives used across component gaps, padding, and layout rhythm." title="Spacing">
      <div style={gridStyle}>
        {spacing.map(([name, value]) => (
          <TokenCard key={name} title={name}>
            <span aria-hidden="true" style={{ background: tokens.color.primary20, borderRadius: tokens.radius.xs, display: 'block', height: 16, width: value }} />
            <code style={labelStyle}>{value}px</code>
          </TokenCard>
        ))}
      </div>
    </Page>
  );
}

export function LayoutGridTokensPage() {
  const grids = styles.filter((style) => style.category === 'grid');

  return (
    <Page intro={`${figmaTokenMeta.categories.grid} grid styles imported from the Figma token snapshot.`} title="Layout Grid">
      <div style={gridStyle}>
        {grids.map((grid) => (
          <TokenCard key={grid.name} title={grid.name}>
            <code style={labelStyle}>{JSON.stringify(grid.value)}</code>
          </TokenCard>
        ))}
      </div>
    </Page>
  );
}

export function IconsTokensPage() {
  return (
    <Page intro="Icon assets are exposed as typed component names in the Icon component and referenced by atom/organism stories." title="Icons">
      <TokenCard title="Icon component">
        <code style={labelStyle}>src/components/Icon.tsx</code>
      </TokenCard>
    </Page>
  );
}

export function LogoTokensPage() {
  return (
    <Page intro="Logo assets are exposed through the Logo and SavingsProgramLogo components." title="Logo">
      <TokenCard title="Logo components">
        <code style={labelStyle}>Logo / SavingsProgramLogo</code>
      </TokenCard>
    </Page>
  );
}

export function IllustrationsTokensPage() {
  return (
    <Page intro="Illustration assets are stored under src/assets/illustrations and consumed by the illustration stories." title="Illustrations">
      <TokenCard title="Illustration assets">
        <code style={labelStyle}>src/assets/illustrations</code>
      </TokenCard>
    </Page>
  );
}
