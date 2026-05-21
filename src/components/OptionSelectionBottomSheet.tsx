import type { HTMLAttributes } from 'react';

export type OptionSelectionBottomSheetProps = {
  optionCount?: 1 | 2 | 3 | 4;
  titleText?: string;
  subtitleText?: string;
  optionLabelPrefix?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function OptionSelectionBottomSheet({
  optionCount = 1,
  titleText = 'Modal Title - Instructional message about user decision',
  subtitleText = 'Modal SubTitle:',
  optionLabelPrefix = 'Option',
  style,
  ...divProps
}: OptionSelectionBottomSheetProps) {
  return (
    <section
      aria-label={titleText}
      data-figma-node-id="7622:5376"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px 24px 0 0',
        boxShadow: '0 -8px 24px rgba(20, 20, 20, 0.16)',
        boxSizing: 'border-box',
        color: '#141414',
        display: 'inline-grid',
        fontFamily: 'Open Sans, Arial, sans-serif',
        gap: 16,
        padding: '24px 24px 12px',
        width: 390,
        ...style,
      }}
      {...divProps}
    >
      <header style={{ display: 'grid', gap: 8 }}>
        <h2 style={{ fontSize: 18, lineHeight: '23px', margin: 0 }}>{titleText}</h2>
        <p style={{ color: '#5C5C5C', fontSize: 14, lineHeight: '18px', margin: 0 }}>{subtitleText}</p>
      </header>
      <div style={{ display: 'grid', gap: 8 }}>
        {Array.from({ length: optionCount }).map((_, index) => (
          <button
            key={index}
            style={{
              alignItems: 'center',
              backgroundColor: '#F7F7F7',
              border: '1px solid #E6E6E6',
              borderRadius: 12,
              color: '#141414',
              cursor: 'pointer',
              display: 'flex',
              font: 'inherit',
              fontWeight: 600,
              height: 56,
              justifyContent: 'space-between',
              padding: '0 16px',
            }}
            type="button"
          >
            {`${optionLabelPrefix} ${index + 1}`}
            <span aria-hidden="true">&gt;</span>
          </button>
        ))}
      </div>
      <span
        aria-hidden="true"
        style={{ backgroundColor: '#141414', borderRadius: 100, height: 5, justifySelf: 'center', marginTop: 8, width: 134 }}
      />
    </section>
  );
}
