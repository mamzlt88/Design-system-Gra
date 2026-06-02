import type { HTMLAttributes } from 'react';

import { NavigationalListItem } from './NavigationalListItem';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type NavigationalListItemCount = 2 | 3 | 4 | 5 | 6 | 7;

export type NavigationalListProps = {
  numberOfItems?: NavigationalListItemCount;
  activeIndex?: number;
  firstLabel?: string;
  secondLabel?: string;
  thirdLabel?: string;
  fourthLabel?: string;
  fifthLabel?: string;
  sixthLabel?: string;
  seventhLabel?: string;
  onItemSelect?: (index: number) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

const fallbackLabels = ['My loan', 'Payments', 'New loan', 'Approvals', 'Resources', 'Settings', 'Support'];

export function NavigationalList({
  numberOfItems = 4,
  activeIndex = 0,
  firstLabel = fallbackLabels[0],
  secondLabel = fallbackLabels[1],
  thirdLabel = fallbackLabels[2],
  fourthLabel = fallbackLabels[3],
  fifthLabel = fallbackLabels[4],
  sixthLabel = fallbackLabels[5],
  seventhLabel = fallbackLabels[6],
  onItemSelect,
  style,
  ...divProps
}: NavigationalListProps) {
  const labels = [firstLabel, secondLabel, thirdLabel, fourthLabel, fifthLabel, sixthLabel, seventhLabel].slice(0, numberOfItems);

  return (
    <div
      data-figma-node-id="9229:6313"
      style={{ display: 'grid', fontFamily: tokens.typography.bodyRegular.fontFamily, gap: tokens.spacing.sm, maxWidth: 390, width: '100%', ...style }}
      {...divProps}
    >
      {labels.map((label, index) => (
        <NavigationalListItem
          key={`${label}-${index}`}
          label={label}
          onClick={() => onItemSelect?.(index)}
          state={activeIndex === index ? 'pressed' : 'default'}
          supportingText={`Item ${index + 1}`}
        />
      ))}
    </div>
  );
}
