import type { HTMLAttributes } from 'react';

import { StatusBadge } from './StatusBadge';

export type PastLoansRowsType = 'content' | 'header';

export type PastLoansRowsProps = {
  type?: PastLoansRowsType;
  loanLabel?: string;
  amount?: string;
  statusLabel?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function PastLoansRows({
  type = 'content',
  loanLabel = 'Loan 2048',
  amount = '$500.00',
  statusLabel = 'CLOSED',
  style,
  ...divProps
}: PastLoansRowsProps) {
  const header = type === 'header';

  return (
    <div
      role="row"
      data-figma-node-id="7484:1084"
      style={{
        backgroundColor: header ? '#F5F5F5' : '#FFFFFF',
        borderBottom: '1px solid #E6E6E6',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
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
      <span role="cell">{header ? 'Loan' : loanLabel}</span>
      <span role="cell">{header ? 'Amount' : amount}</span>
      <span role="cell">{header ? 'Status' : <StatusBadge label={statusLabel} status="progress" />}</span>
    </div>
  );
}
