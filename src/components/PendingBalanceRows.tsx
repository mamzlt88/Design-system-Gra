import type { HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type PendingBalanceRowsType = 'paymentContent' | 'header' | 'interestContent';

export type PendingBalanceRowsProps = {
  type?: PendingBalanceRowsType;
  label?: string;
  dueDate?: string;
  amount?: string;
  semantic?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function PendingBalanceRows({
  type = 'paymentContent',
  label = 'Pending payment',
  dueDate = 'May 20',
  amount = '$125.00',
  semantic = false,
  style,
  ...divProps
}: PendingBalanceRowsProps) {
  const header = type === 'header';
  const interest = type === 'interestContent';
  const cellRole = semantic ? (header ? 'columnheader' : 'cell') : undefined;

  return (
    <div
      role={semantic ? 'row' : undefined}
      data-figma-node-id="7489:926"
      style={{
        backgroundColor: header ? tokens.color.grey05 : interest ? tokens.color.yellow05 : tokens.color.grey00,
        borderBottom: `1px solid ${tokens.color.grey10}`,
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
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
      <span role={cellRole}>{header ? 'Balance' : interest ? 'Interest balance' : label}</span>
      <span role={cellRole}>{header ? 'Due date' : dueDate}</span>
      <span role={cellRole}>{header ? 'Amount' : amount}</span>
    </div>
  );
}
