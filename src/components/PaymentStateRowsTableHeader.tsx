import type { HTMLAttributes } from 'react';

export type PaymentStateRowsTableHeaderProps = {
  firstColumn?: string;
  secondColumn?: string;
  thirdColumn?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function PaymentStateRowsTableHeader({
  firstColumn = 'Payment',
  secondColumn = 'Due date',
  thirdColumn = 'Status',
  style,
  ...divProps
}: PaymentStateRowsTableHeaderProps) {
  return (
    <div
      role="row"
      data-figma-node-id="7483:6447"
      style={{
        backgroundColor: '#F5F5F5',
        borderBottom: '1px solid #D3D3D3',
        color: '#313131',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: 12,
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
      <span role="columnheader">{firstColumn}</span>
      <span role="columnheader">{secondColumn}</span>
      <span role="columnheader">{thirdColumn}</span>
    </div>
  );
}
