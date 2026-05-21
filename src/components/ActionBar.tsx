import type { HTMLAttributes } from 'react';

import { Button } from './Button';

export type ActionBarType = 'dualActions' | 'singleAction';
export type ActionBarButtonState = 'enabled' | 'pressed' | 'disabled';

export type ActionBarProps = {
  type?: ActionBarType;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryState?: ActionBarButtonState;
  secondaryState?: ActionBarButtonState;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function ActionBar({
  type = 'dualActions',
  primaryLabel = 'Continue',
  secondaryLabel = 'Back',
  primaryState = 'enabled',
  secondaryState = 'enabled',
  onPrimaryClick,
  onSecondaryClick,
  style,
  ...divProps
}: ActionBarProps) {
  return (
    <div
      data-figma-node-id="8387:10564"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 -1px 0 #E6E6E6',
        display: 'inline-grid',
        padding: '12px 16px',
        width: 390,
        ...style,
      }}
      {...divProps}
    >
      <div style={{ display: 'flex', gap: 12 }}>
        {type === 'dualActions' ? (
          <Button label={secondaryLabel} onClick={onSecondaryClick} state={secondaryState} style={{ flex: 1 }} variant="outlined" />
        ) : null}
        <Button label={primaryLabel} onClick={onPrimaryClick} state={primaryState} style={{ flex: 1 }} variant="filled" />
      </div>
    </div>
  );
}
