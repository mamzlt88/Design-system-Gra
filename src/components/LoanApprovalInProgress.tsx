import type { CSSProperties, HTMLAttributes } from 'react';

import { Button } from './Button';
import { IconContainer } from './IconContainer';

export type LoanApprovalInProgressType =
  | 'centerApprovalInProgress'
  | 'centerApprovalOnHold'
  | 'amountNeedsApproval'
  | 'resubmitDocuments';

export type LoanApprovalInProgressProps = {
  type?: LoanApprovalInProgressType;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'title'>;

const contentByType: Record<LoanApprovalInProgressType, { title: string; description: string; color: 'brand' | 'yellow' | 'blue' | 'red'; action: string }> = {
  centerApprovalInProgress: {
    title: 'Approval in progress',
    description: 'The center approval is being reviewed. The user can check back later for the next step.',
    color: 'brand',
    action: 'View status',
  },
  centerApprovalOnHold: {
    title: 'Approval on hold',
    description: 'The review is paused until the required center information is available.',
    color: 'yellow',
    action: 'Review details',
  },
  amountNeedsApproval: {
    title: 'Amount needs approval',
    description: 'The requested amount needs an approval step before the loan can continue.',
    color: 'blue',
    action: 'Continue',
  },
  resubmitDocuments: {
    title: 'Resubmit documents',
    description: 'Some documents need to be uploaded again before approval can continue.',
    color: 'red',
    action: 'Upload documents',
  },
};

export function LoanApprovalInProgress({
  type = 'centerApprovalInProgress',
  title,
  description,
  actionLabel,
  onAction,
  style,
  ...sectionProps
}: LoanApprovalInProgressProps) {
  const content = contentByType[type];

  return (
    <section
      data-figma-node-id="7575:11565"
      style={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E6E6E6',
        borderRadius: 8,
        boxSizing: 'border-box',
        display: 'grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        gap: 16,
        justifyItems: 'center',
        maxWidth: 390,
        padding: 28,
        textAlign: 'center',
        ...style,
      }}
      {...sectionProps}
    >
      <IconContainer color={content.color} icon={type === 'resubmitDocuments' ? 'upload' : 'check'} size={72} />
      <div style={{ display: 'grid', gap: 8 }}>
        <h3 style={{ color: '#141414', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 22, lineHeight: '28px', margin: 0 }}>
          {title ?? content.title}
        </h3>
        <p style={{ color: '#434343', fontSize: 14, lineHeight: '20px', margin: 0 }}>{description ?? content.description}</p>
      </div>
      <Button label={actionLabel ?? content.action} onClick={onAction} />
    </section>
  );
}
