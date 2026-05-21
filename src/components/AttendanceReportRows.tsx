import type { HTMLAttributes } from 'react';

export type AttendanceReportRowsType = 'content' | 'header';

export type AttendanceReportRowsProps = {
  type?: AttendanceReportRowsType;
  memberName?: string;
  attendedLabel?: string;
  missedLabel?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function AttendanceReportRows({
  type = 'content',
  memberName = 'Member name',
  attendedLabel = '8',
  missedLabel = '1',
  style,
  ...divProps
}: AttendanceReportRowsProps) {
  const header = type === 'header';

  return (
    <div
      role="row"
      data-figma-node-id="7486:956"
      style={{
        backgroundColor: header ? '#F5F5F5' : '#FFFFFF',
        borderBottom: '1px solid #E6E6E6',
        boxSizing: 'border-box',
        color: '#313131',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
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
      <span role="cell">{header ? 'Member' : memberName}</span>
      <span role="cell">{header ? 'Attended' : attendedLabel}</span>
      <span role="cell">{header ? 'Missed' : missedLabel}</span>
    </div>
  );
}
