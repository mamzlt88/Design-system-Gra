import type { HTMLAttributes } from 'react';

export type SavingsGoalType = 'inProgress' | 'completed';

export type SavingsGoalProps = {
  type?: SavingsGoalType;
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;

export function SavingsGoal({ type = 'inProgress', label, style, ...spanProps }: SavingsGoalProps) {
  const completed = type === 'completed';
  const accessibleLabel = label ?? (completed ? 'Savings goal completed' : 'Savings goal in progress');

  return (
    <span
      aria-label={accessibleLabel}
      data-figma-node-id="8550:10588"
      role="img"
      style={{
        display: 'inline-flex',
        height: 58,
        width: 69,
        ...style,
      }}
      {...spanProps}
    >
      <svg aria-hidden="true" focusable="false" height="58" viewBox="0 0 69 58" width="69">
        <path d="M14 43c0-14 10-25 23-25s23 11 23 25H14Z" fill="#D0DEEA" />
        <path d="M35 7 42 21H28L35 7Z" fill="#F7C04A" />
        <circle cx="35" cy="34" fill="#0C6466" r="17" />
        <circle cx="35" cy="34" fill="#EDF6F6" r="10" />
        <circle cx="35" cy="34" fill={completed ? '#3A7D1D' : '#0C6466'} r="4" />
        {completed ? (
          <circle cx="52" cy="17" fill="#3A7D1D" r="10" />
        ) : (
          <path d="M49 11h13v13H49z" fill="#FFF6DC" rx="4" />
        )}
        {completed ? (
          <path d="m47 17 3 3 7-7" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        ) : (
          <path d="M55.5 14v7M52 17.5h7" stroke="#735425" strokeLinecap="round" strokeWidth="2" />
        )}
      </svg>
    </span>
  );
}
