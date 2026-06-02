import type { CSSProperties, HTMLAttributes } from 'react';

import { CheckboxButton } from './CheckboxButton';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type CheckboxListItem = {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  supportiveText?: string;
};

export type CheckboxListProps = {
  items?: CheckboxListItem[];
  onItemChange?: (id: string, checked: boolean) => void;
  /** @deprecated Use items instead. Kept for Figma snapshot compatibility. */
  itemCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** @deprecated Use items[].checked instead. Kept for Figma snapshot compatibility. */
  selectedCount?: number;
  /** @deprecated Use items[].label instead. Kept for Figma snapshot compatibility. */
  itemLabelPrefix?: string;
  showTopScrollIndicator?: boolean;
  showBottomScrollIndicator?: boolean;
  showTextField?: boolean;
  textFieldLabel?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

const scrollIndicatorStyle: CSSProperties = {
  background: tokens.gradient.checkboxListFade,
  height: 18,
  left: 0,
  pointerEvents: 'none',
  position: 'absolute',
  right: 0,
  zIndex: 1,
};

export function CheckboxList({
  items,
  onItemChange,
  itemCount = 1,
  selectedCount = 0,
  itemLabelPrefix = 'Item',
  showTopScrollIndicator = true,
  showBottomScrollIndicator = true,
  showTextField = false,
  textFieldLabel = 'Other',
  style,
  ...divProps
}: CheckboxListProps) {
  const resolvedItems: CheckboxListItem[] = items ?? Array.from({ length: itemCount }, (_, index) => ({
    checked: index < selectedCount,
    id: `item-${index + 1}`,
    label: `${itemLabelPrefix} ${index + 1}`,
  }));
  const showScrollIndicators = resolvedItems.length >= 6;

  return (
    <div
      data-figma-node-id="7673:5287"
      role="group"
      style={{
        display: 'inline-grid',
        gap: tokens.spacing.sm,
        maxHeight: showScrollIndicators ? 328 : undefined,
        overflow: showScrollIndicators ? 'hidden' : undefined,
        padding: tokens.spacing.none,
        position: 'relative',
        width: 350,
        ...style,
      }}
      {...divProps}
    >
      {showScrollIndicators && showTopScrollIndicator ? <span aria-hidden="true" style={{ ...scrollIndicatorStyle, top: 0 }} /> : null}
      {resolvedItems.map((item) => (
        <CheckboxButton
          disabled={item.disabled}
          itemText={item.label}
          key={item.id}
          onChange={(event) => onItemChange?.(item.id, event.currentTarget.checked)}
          showSupportiveText={Boolean(item.supportiveText)}
          state={item.disabled ? 'disabled' : item.checked ? 'selected' : 'default'}
          supportiveText={item.supportiveText}
        />
      ))}
      {showTextField ? (
        <label style={{ color: tokens.color.grey40, display: 'grid', fontFamily: tokens.typography.bodyRegular.fontFamily, fontSize: tokens.typography.bodySmallRegular.fontSize, gap: tokens.spacing.xxs }}>
          {textFieldLabel}
          <input
            style={{
              border: `1px solid ${tokens.color.grey20}`,
              borderRadius: tokens.radius.md,
              font: 'inherit',
              height: 40,
              padding: '0 12px',
            }}
            type="text"
          />
        </label>
      ) : null}
      {showScrollIndicators && showBottomScrollIndicator ? (
        <span
          aria-hidden="true"
          style={{
            ...scrollIndicatorStyle,
            bottom: 0,
            transform: 'rotate(180deg)',
          }}
        />
      ) : null}
    </div>
  );
}
