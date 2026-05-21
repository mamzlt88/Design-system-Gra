import type { HTMLAttributes } from 'react';

export type PendingBalanceRowsType = 'paymentContent' | 'header' | 'interestContent';

export type PendingBalanceRowsProps = {
  type?: PendingBalanceRowsType;
  label?: string;
  dueDate?: string;
  amount?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function PendingBalanceRows({
  type = 'paymentContent',
  label = 'Pending payment',
  dueDate = 'May 20',
  amount = '$125.00',
  style,
  ...divProps
}: PendingBalanceRowsProps) {
  const header = type === 'header';
  const interest = type === 'interestContent';

  return (
    <div
      role="row"
      data-figma-node-id="7489:926"
      style={{
        backgroundColor: header ? '#F5F5F5' : interest ? '#FFF6DC' : '#FFFFFF',
        borderBottom: '1px solid #E6E6E6',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: header ? 12 : 14,
        fontWeight: header ? 700 : interest ? 600 : 400,
        gridTemplateColumns: '1fr 100px 100px',
        minHeight: 48,
        padding: '12px 16px',
        textTransform: header ? 'uppercase' : undefined,
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span role={header ? 'columnheader' : 'cell'}>{header ? 'Balance' : interest ? 'Interest balance' : label}</span>
      <span role={header ? 'columnheader' : 'cell'}>{header ? 'Due date' : dueDate}</span>
      <span role={header ? 'columnheader' : 'cell'}>{header ? 'Amount' : amount}</span>
    </div>
  );
}
