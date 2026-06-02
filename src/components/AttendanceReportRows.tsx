import type { HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type AttendanceReportRowsType = 'content' | 'header';

export type AttendanceReportRowsProps = {
  type?: AttendanceReportRowsType;
  memberName?: string;
  attendedLabel?: string;
  missedLabel?: string;
  semantic?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function AttendanceReportRows({
  type = 'content',
  memberName = 'Member name',
  attendedLabel = '8',
  missedLabel = '1',
  semantic = false,
  style,
  ...divProps
}: AttendanceReportRowsProps) {
  const header = type === 'header';
  const cellRole = semantic ? (header ? 'columnheader' : 'cell') : undefined;

  return (
    <div
      role={semantic ? 'row' : undefined}
      data-figma-node-id="7486:956"
      style={{
        backgroundColor: header ? tokens.color.grey05 : tokens.color.grey00,
        borderBottom: `1px solid ${tokens.color.grey10}`,
        boxSizing: 'border-box',
        color: tokens.color.grey60,
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        fontSize: header ? 12 : 14,
        fontWeight: header ? 700 : 400,
        gridTemplateColumns: '1fr 80px 80px',
        minHeight: 48,
        padding: '12px 16px',
        textTransform: header ? 'uppercase' : undefined,
        width: '100%',
        ...style,
      }}
      {...divProps}
    >
      <span role={cellRole}>{header ? 'Member' : memberName}</span>
      <span role={cellRole}>{header ? 'Attended' : attendedLabel}</span>
      <span role={cellRole}>{header ? 'Missed' : missedLabel}</span>
    </div>
  );
}
