import type { HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type MambuWebviewTableType = 'content' | 'header' | 'total';
export type MambuWebviewTableSize = 'small' | 'medium';

export type MambuWebviewTableProps = {
  type?: MambuWebviewTableType;
  size?: MambuWebviewTableSize;
  label?: string;
  value?: string;
  balance?: string;
  semantic?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function MambuWebviewTable({
  type = 'content',
  size = 'medium',
  label = 'Principal',
  value = '$200.00',
  balance = '$1,250.00',
  semantic = false,
  style,
  ...divProps
}: MambuWebviewTableProps) {
  const header = type === 'header';
  const total = type === 'total';
  const compact = size === 'small';
  const cellRole = semantic ? (header ? 'columnheader' : 'cell') : undefined;

  return (
    <div
      role={semantic ? 'row' : undefined}
      data-figma-node-id="8066:5933"
      style={{
        backgroundColor: header ? tokens.color.grey05 : total ? tokens.color.primary00 : tokens.color.grey00,
        borderBottom: `1px solid ${tokens.color.grey10}`,
        color: tokens.color.grey60,
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
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
      <span role={cellRole}>{header ? 'Label' : total ? 'Total' : label}</span>
      <span role={cellRole}>{header ? 'Value' : value}</span>
      <span role={cellRole}>{header ? 'Balance' : balance}</span>
    </div>
  );
}
