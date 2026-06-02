import type { HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type PaymentStateRowsTableHeaderProps = {
  firstColumn?: string;
  secondColumn?: string;
  thirdColumn?: string;
  semantic?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function PaymentStateRowsTableHeader({
  firstColumn = 'Payment',
  secondColumn = 'Due date',
  thirdColumn = 'Status',
  semantic = false,
  style,
  ...divProps
}: PaymentStateRowsTableHeaderProps) {
  return (
    <div
      role={semantic ? 'row' : undefined}
      data-figma-node-id="7483:6447"
      style={{
        backgroundColor: tokens.color.grey05,
        borderBottom: `1px solid ${tokens.color.grey20}`,
        color: tokens.color.grey60,
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        fontSize: tokens.typography.bodySmallRegular.fontSize,
        fontWeight: 700,
        gridTemplateColumns: '1fr 110px 100px',
        minHeight: 44,
        padding: '12px 16px',
        textTransform: 'uppercase',
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span role={semantic ? 'columnheader' : undefined}>{firstColumn}</span>
      <span role={semantic ? 'columnheader' : undefined}>{secondColumn}</span>
      <span role={semantic ? 'columnheader' : undefined}>{thirdColumn}</span>
    </div>
  );
}
