import type { HTMLAttributes } from 'react';

import { StatusBadge } from './StatusBadge';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type PaymentStatusRowState = 'open' | 'closed';

export type PaymentStatusRowProps = {
  state?: PaymentStatusRowState;
  paymentLabel?: string;
  dueDate?: string;
  amount?: string;
  semantic?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function PaymentStatusRow({
  state = 'open',
  paymentLabel = 'Payment 1',
  dueDate = 'May 20',
  amount = '$125.00',
  semantic = false,
  style,
  ...divProps
}: PaymentStatusRowProps) {
  const open = state === 'open';

  return (
    <div
      role={semantic ? 'row' : undefined}
      data-figma-node-id="7484:1012"
      style={{
        backgroundColor: tokens.color.grey00,
        borderBottom: `1px solid ${tokens.color.grey10}`,
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        fontSize: tokens.typography.bodyRegular.fontSize,
        gridTemplateColumns: '1fr 96px 90px 96px',
        minHeight: 52,
        padding: '12px 16px',
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span role={semantic ? 'cell' : undefined}>{paymentLabel}</span>
      <span role={semantic ? 'cell' : undefined}>{dueDate}</span>
      <span role={semantic ? 'cell' : undefined}>{amount}</span>
      <span role={semantic ? 'cell' : undefined}><StatusBadge label={open ? 'OPEN' : 'CLOSED'} status={open ? 'attention' : 'success'} /></span>
    </div>
  );
}
