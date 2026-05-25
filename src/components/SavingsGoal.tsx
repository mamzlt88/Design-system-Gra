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
        <path d="M5.3 3.3 21 18.6l-4.4 2.2L7.8 12.3Z" fill="#FBB811" />
        <rect fill="#A4C1DA" height="4.2" rx="1" transform="rotate(45 23.9 2.1)" width="4.2" x="21.8" />
        <rect fill={completed ? '#0D7779' : '#E85801'} height="4.2" rx="1" transform="rotate(45 3.2 21.3)" width="4.2" x="1.1" y="19.2" />
        {completed ? (
          <>
            <circle cx="35" cy="28" fill="#0B7639" r="21.7" />
            <path
              d="m25.2 28.1 6.5 6.5 13.1-14.1"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4.8"
            />
          </>
        ) : (
          <>
            <ellipse cx="34.3" cy="28.5" fill="#0C989A" rx="22.8" ry="23" />
            <ellipse cx="34.3" cy="28.6" fill="#FFFFFF" rx="16.7" ry="16.9" />
            <ellipse cx="34.2" cy="28.5" fill="#0C989A" rx="11.1" ry="11.2" />
            <ellipse cx="34.2" cy="28.5" fill="#FFFFFF" rx="4.5" ry="4.5" />
            <path d="M36.4 14.4 57.6 6l3.4 8.7-21.3 8.4Z" fill="#E85801" />
            <path d="m53.6 3.4 14 4.8-10.7 8.8Z" fill="#BF4315" />
          </>
        )}
        <path d="M61.2 37.2 45.5 53.7l4.4-16.7Z" fill="#FBB811" />
        <rect fill={completed ? '#0D7779' : '#E85801'} height="4.2" rx="1" transform="rotate(45 63.3 35.8)" width="4.2" x="61.2" y="33.7" />
        <rect fill="#A4C1DA" height="4.2" rx="1" transform="rotate(45 44.1 55.1)" width="4.2" x="42" y="53" />
      </svg>
    </span>
  );
}
