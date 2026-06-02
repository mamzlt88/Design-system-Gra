import type { CSSProperties, HTMLAttributes } from 'react';

import { Button } from './Button';
import { IconContainer } from './IconContainer';
import { componentTokens as tokens } from '../tokens/componentTokens';

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
        backgroundColor: tokens.color.grey00,
        border: `1px solid ${tokens.color.grey10}`,
        borderRadius: tokens.radius.md,
        boxSizing: 'border-box',
        display: 'grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        gap: tokens.spacing.xxl,
        justifyItems: 'center',
        maxWidth: 390,
        padding: tokens.spacing['3xl'] + tokens.spacing.xxs,
        textAlign: 'center',
        ...style,
      }}
      {...sectionProps}
    >
      <IconContainer color={content.color} icon={type === 'resubmitDocuments' ? 'upload' : 'check'} size={72} />
      <div style={{ display: 'grid', gap: tokens.spacing.sm }}>
        <h3 style={{ color: tokens.color.grey80, fontFamily: tokens.typography.subHeadingSemiBold.fontFamily, fontSize: 22, lineHeight: '28px', margin: 0 }}>
          {title ?? content.title}
        </h3>
        <p style={{ color: tokens.color.grey50, fontSize: tokens.typography.bodyRegular.fontSize, lineHeight: tokens.typography.subHeadingSemiBold.lineHeight, margin: 0 }}>{description ?? content.description}</p>
      </div>
      <Button label={actionLabel ?? content.action} onClick={onAction} />
    </section>
  );
}
