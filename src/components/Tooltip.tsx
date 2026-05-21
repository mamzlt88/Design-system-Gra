import type { HTMLAttributes } from 'react';

export type TooltipArrowPlacement = 'top' | 'bottom';
export type TooltipArrowAlignment = 'left' | 'middle' | 'right';

export type TooltipProps = {
  text?: string;
  arrowPlacement?: TooltipArrowPlacement;
  arrowAlignment?: TooltipArrowAlignment;
  showRightIcon?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

const alignmentMap: Record<TooltipArrowAlignment, string> = {
  left: '24px',
  middle: '50%',
  right: 'calc(100% - 32px)',
};

export function Tooltip({
  text = 'Tooltip Text',
  arrowPlacement = 'top',
  arrowAlignment = 'left',
  showRightIcon = true,
  style,
  ...divProps
}: TooltipProps) {
  const arrow = (
    <span
      aria-hidden="true"
      style={{
        backgroundColor: '#244555',
        height: 12,
        left: alignmentMap[arrowAlignment],
        position: 'absolute',
        top: arrowPlacement === 'top' ? -5 : undefined,
        bottom: arrowPlacement === 'bottom' ? -5 : undefined,
        transform: 'translateX(-50%) rotate(45deg)',
        width: 12,
      }}
    />
  );

  return (
    <div
      data-figma-node-id="7443:9977"
      role="tooltip"
      style={{
        color: '#FFFFFF',
        display: 'inline-block',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: 14,
        lineHeight: '18px',
        padding: arrowPlacement === 'top' ? '10px 0 0' : '0 0 10px',
        position: 'relative',
        width: 347,
        ...style,
      }}
      {...divProps}
    >
      {arrow}
      <div
        style={{
          alignItems: 'center',
          backgroundColor: '#244555',
          borderRadius: 8,
          display: 'flex',
          gap: 8,
          minHeight: 48,
          padding: '0 16px',
        }}
      >
        <span aria-hidden="true">i</span>
        <span style={{ flex: 1 }}>{text}</span>
        {showRightIcon ? <span aria-hidden="true">x</span> : null}
      </div>
    </div>
  );
}
