import type { HTMLAttributes } from 'react';

export type MambuWebviewTableType = 'content' | 'header' | 'total';
export type MambuWebviewTableSize = 'small' | 'medium';

export type MambuWebviewTableProps = {
  type?: MambuWebviewTableType;
  size?: MambuWebviewTableSize;
  label?: string;
  value?: string;
  balance?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function MambuWebviewTable({
  type = 'content',
  size = 'medium',
  label = 'Principal',
  value = '$200.00',
  balance = '$1,250.00',
  style,
  ...divProps
}: MambuWebviewTableProps) {
  const header = type === 'header';
  const total = type === 'total';
  const compact = size === 'small';

  return (
    <div
      role="row"
      data-figma-node-id="8066:5933"
      style={{
        backgroundColor: header ? '#F5F5F5' : total ? '#EDF6F6' : '#FFFFFF',
        borderBottom: '1px solid #E6E6E6',
        color: '#313131',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: compact ? 12 : 14,
        fontWeight: header || total ? 700 : 400,
        gridTemplateColumns: '1fr 100px 100px',
        minHeight: compact ? 40 : 48,
        padding: compact ? '10px 12px' : '12px 16px',
        textTransform: header ? 'uppercase' : undefined,
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span role="cell">{header ? 'Label' : total ? 'Total' : label}</span>
      <span role="cell">{header ? 'Value' : value}</span>
      <span role="cell">{header ? 'Balance' : balance}</span>
    </div>
  );
}
