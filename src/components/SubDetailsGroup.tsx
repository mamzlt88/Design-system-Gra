import type { CSSProperties, HTMLAttributes } from 'react';

export type SubDetailsGroupProps = {
  rows?: 1 | 2 | 3;
  labelPrefix?: string;
  valuePrefix?: string;
} & Omit<HTMLAttributes<HTMLDListElement>, 'children'>;

const rowStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  fontFamily: 'Open Sans, Arial, sans-serif',
  fontSize: 12,
  gap: 12,
  justifyContent: 'space-between',
  lineHeight: '15px',
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
        gap: 4,
        margin: 0,
        width: 302,
        ...style,
      }}
      {...listProps}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} style={rowStyle}>
          <dt style={{ color: '#5C5C5C', margin: 0 }}>{`${labelPrefix} ${index + 1}`}</dt>
          <dd style={{ color: '#141414', fontWeight: 600, margin: 0 }}>{`${valuePrefix} ${index + 1}`}</dd>
        </div>
      ))}
    </dl>
  );
}
