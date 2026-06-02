import type { CSSProperties, HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type SubDetailsGroupProps = {
  rows?: 1 | 2 | 3;
  labelPrefix?: string;
  valuePrefix?: string;
} & Omit<HTMLAttributes<HTMLDListElement>, 'children'>;

const rowStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  fontSize: tokens.typography.bodySmallRegular.fontSize,
  gap: tokens.spacing.lg,
  justifyContent: 'space-between',
  lineHeight: tokens.typography.bodySmallRegular.lineHeight,
  width: 302,
};

export function SubDetailsGroup({
  rows = 1,
  labelPrefix = 'Label',
  valuePrefix = 'Value',
  style,
  ...listProps
}: SubDetailsGroupProps) {
  return (
    <dl
      data-figma-node-id="7538:3968"
      style={{
        display: 'inline-grid',
        gap: tokens.spacing.xxs,
        margin: 0,
        width: 302,
        ...style,
      }}
      {...listProps}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} style={rowStyle}>
          <dt style={{ color: tokens.color.grey40, margin: 0 }}>{`${labelPrefix} ${index + 1}`}</dt>
          <dd style={{ color: tokens.color.grey80, fontWeight: 600, margin: 0 }}>{`${valuePrefix} ${index + 1}`}</dd>
        </div>
      ))}
    </dl>
  );
}
