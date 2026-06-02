import type { HTMLAttributes } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type OptionSelectionOption = {
  id: string;
  label: string;
  disabled?: boolean;
};

export type OptionSelectionBottomSheetProps = {
  options?: OptionSelectionOption[];
  onOptionSelect?: (id: string) => void;
  /** @deprecated Use options instead. Kept for Figma snapshot compatibility. */
  optionCount?: 1 | 2 | 3 | 4;
  titleText?: string;
  subtitleText?: string;
  /** @deprecated Use options[].label instead. Kept for Figma snapshot compatibility. */
  optionLabelPrefix?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function OptionSelectionBottomSheet({
  options,
  onOptionSelect,
  optionCount = 1,
  titleText = 'Modal Title - Instructional message about user decision',
  subtitleText = 'Modal SubTitle:',
  optionLabelPrefix = 'Option',
  style,
  ...divProps
}: OptionSelectionBottomSheetProps) {
  const resolvedOptions: OptionSelectionOption[] = options ?? Array.from({ length: optionCount }, (_, index) => ({
    id: `option-${index + 1}`,
    label: `${optionLabelPrefix} ${index + 1}`,
  }));

  return (
    <section
      aria-label={titleText}
      data-figma-node-id="7622:5376"
      style={{
        backgroundColor: tokens.color.grey00,
        borderRadius: '24px 24px 0 0',
        boxShadow: tokens.effect.optionSheetElevation,
        boxSizing: 'border-box',
        color: tokens.color.grey80,
        display: 'inline-grid',
        fontFamily: tokens.typography.bodyRegular.fontFamily,
        gap: tokens.spacing.xxl,
        padding: '24px 24px 12px',
        width: 390,
        ...style,
      }}
      {...divProps}
    >
      <header style={{ display: 'grid', gap: tokens.spacing.sm }}>
        <h2 style={{ fontSize: 18, lineHeight: '23px', margin: 0 }}>{titleText}</h2>
        <p style={{ color: tokens.color.grey40, fontSize: tokens.typography.bodyRegular.fontSize, lineHeight: '18px', margin: 0 }}>{subtitleText}</p>
      </header>
      <div style={{ display: 'grid', gap: tokens.spacing.sm }}>
        {resolvedOptions.map((option) => (
          <button
            disabled={option.disabled}
            key={option.id}
            onClick={() => onOptionSelect?.(option.id)}
            style={{
              alignItems: 'center',
              backgroundColor: tokens.color.optionSheetSurface,
              border: `1px solid ${tokens.color.grey10}`,
              borderRadius: tokens.radius.lg,
              color: option.disabled ? tokens.color.grey40 : tokens.color.grey80,
              cursor: option.disabled ? 'not-allowed' : 'pointer',
              display: 'flex',
              font: 'inherit',
              fontWeight: 600,
              height: 56,
              justifyContent: 'space-between',
              opacity: option.disabled ? 0.6 : 1,
              padding: '0 16px',
            }}
            type="button"
          >
            {option.label}
            <span aria-hidden="true">&gt;</span>
          </button>
        ))}
      </div>
      <span
        aria-hidden="true"
        style={{ backgroundColor: tokens.color.grey80, borderRadius: tokens.radius.pill, height: 5, justifySelf: 'center', marginTop: tokens.spacing.sm, width: 134 }}
      />
    </section>
  );
}
