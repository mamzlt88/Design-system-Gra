import type { HTMLAttributes } from 'react';

import { StatusBadge } from './StatusBadge';

export type LastPaymentsRowsType = 'title' | 'header' | 'content';

export type LastPaymentsRowsProps = {
  type?: LastPaymentsRowsType;
  title?: string;
  dueDate?: string;
  amount?: string;
  statusLabel?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'>;

export function LastPaymentsRows({
  type = 'content',
  title = 'Last payments',
  dueDate = 'May 20',
  amount = '$125.00',
  statusLabel = 'PAID',
  style,
  ...divProps
}: LastPaymentsRowsProps) {
  if (type === 'title') {
    return (
      <div data-figma-node-id="8745:10511" style={{ color: '#141414', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 20, fontWeight: 700, padding: '12px 0', ...style }} {...divProps}>
        {title}
      </div>
    );
  }

  const header = type === 'header';

  return (
    <div
      role="row"
      data-figma-node-id="8745:10511"
      style={{
        backgroundColor: header ? '#F5F5F5' : '#FFFFFF',
        borderBottom: '1px solid #E6E6E6',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: header ? 12 : 14,
        fontWeight: header ? 700 : 400,
        gridTemplateColumns: '1fr 100px 92px',
        minHeight: 48,
        padding: '12px 16px',
        textTransform: header ? 'uppercase' : undefined,
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span role="cell">{header ? 'Date' : dueDate}</span>
      <span role="cell">{header ? 'Amount' : amount}</span>
      <span role="cell">{header ? 'Status' : <StatusBadge label={statusLabel} status="success" />}</span>
    </div>
  );
}
