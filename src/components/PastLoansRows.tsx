import type { HTMLAttributes } from 'react';

import { StatusBadge } from './StatusBadge';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type PastLoansRowsType = 'content' | 'header';

export type PastLoansRowsProps = {
  type?: PastLoansRowsType;
  loanLabel?: string;
  amount?: string;
  statusLabel?: string;
  semantic?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function PastLoansRows({
  type = 'content',
  loanLabel = 'Loan 2048',
  amount = '$500.00',
  statusLabel = 'CLOSED',
  semantic = false,
  style,
  ...divProps
}: PastLoansRowsProps) {
  const header = type === 'header';
  const cellRole = semantic ? (header ? 'columnheader' : 'cell') : undefined;

  return (
    <div
      role={semantic ? 'row' : undefined}
      data-figma-node-id="7484:1084"
      style={{
        backgroundColor: header ? tokens.color.grey05 : tokens.color.grey00,
        borderBottom: `1px solid ${tokens.color.grey10}`,
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        fontSize: header ? 12 : 14,
        fontWeight: header ? 700 : 400,
        gridTemplateColumns: '1fr 100px 100px',
        minHeight: 48,
        padding: '12px 16px',
        textTransform: header ? 'uppercase' : undefined,
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span role={cellRole}>{header ? 'Loan' : loanLabel}</span>
      <span role={cellRole}>{header ? 'Amount' : amount}</span>
      <span role={cellRole}>{header ? 'Status' : <StatusBadge label={statusLabel} status="progress" />}</span>
    </div>
  );
}
