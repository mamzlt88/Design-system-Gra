import type { HTMLAttributes } from 'react';

import { StatusBadge } from './StatusBadge';

export type PaymentStatusRowState = 'open' | 'closed';

export type PaymentStatusRowProps = {
  state?: PaymentStatusRowState;
  paymentLabel?: string;
  dueDate?: string;
  amount?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function PaymentStatusRow({
  state = 'open',
  paymentLabel = 'Payment 1',
  dueDate = 'May 20',
  amount = '$125.00',
  style,
  ...divProps
}: PaymentStatusRowProps) {
  const open = state === 'open';

  return (
    <div
      role="row"
      data-figma-node-id="7484:1012"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E6E6E6',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: 14,
        gridTemplateColumns: '1fr 96px 90px 96px',
        minHeight: 52,
        padding: '12px 16px',
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span role="cell">{paymentLabel}</span>
      <span role="cell">{dueDate}</span>
      <span role="cell">{amount}</span>
      <span role="cell"><StatusBadge label={open ? 'OPEN' : 'CLOSED'} status={open ? 'attention' : 'success'} /></span>
    </div>
  );
}
