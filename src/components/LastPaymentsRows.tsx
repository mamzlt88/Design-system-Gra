import type { HTMLAttributes } from 'react';

import { StatusBadge } from './StatusBadge';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type LastPaymentsRowsType = 'title' | 'header' | 'content';

export type LastPaymentsRowsProps = {
  type?: LastPaymentsRowsType;
  title?: string;
  dueDate?: string;
  amount?: string;
  statusLabel?: string;
  semantic?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'>;

export function LastPaymentsRows({
  type = 'content',
  title = 'Last payments',
  dueDate = 'May 20',
  amount = '$125.00',
  statusLabel = 'PAID',
  semantic = false,
  style,
  ...divProps
}: LastPaymentsRowsProps) {
  if (type === 'title') {
    return (
      <div data-figma-node-id="8745:10511" style={{ color: tokens.color.grey80, fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: tokens.typography.headingBold.fontSize, fontWeight: 700, padding: '12px 0', ...style }} {...divProps}>
        {title}
      </div>
    );
  }

  const header = type === 'header';
  const cellRole = semantic ? (header ? 'columnheader' : 'cell') : undefined;

  return (
    <div
      role={semantic ? 'row' : undefined}
      data-figma-node-id="8745:10511"
      style={{
        backgroundColor: header ? tokens.color.grey05 : tokens.color.grey00,
        borderBottom: `1px solid ${tokens.color.grey10}`,
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
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
      <span role={cellRole}>{header ? 'Date' : dueDate}</span>
      <span role={cellRole}>{header ? 'Amount' : amount}</span>
      <span role={cellRole}>{header ? 'Status' : <StatusBadge label={statusLabel} status="success" />}</span>
    </div>
  );
}
