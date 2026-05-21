import type { ButtonHTMLAttributes, CSSProperties } from 'react';

export type SectionBarState = 'default' | 'selected';
export type SectionBarInteraction = 'default' | 'pressed';
export type SectionBarIcon = 'loan' | 'payments' | 'newLoan' | 'approvals' | 'resources' | 'document';

export type SectionBarProps = {
  label?: string;
  icon?: SectionBarIcon;
  state?: SectionBarState;
  interaction?: SectionBarInteraction;
  showBadge?: boolean;
  badgeLabel?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const colors = {
  grey00: '#FFFFFF',
  grey10: '#E6E6E6',
  grey30: '#A4A4A4',
  grey40: '#5C5C5C',
  primary05: '#DBEBEB',
  primary20: '#CDFEFF',
  primary90: '#0C6466',
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: colors.grey00,
  border: 0,
  borderTop: '3px solid transparent',
  boxSizing: 'border-box',
  color: colors.grey40,
  cursor: 'pointer',
  display: 'grid',
  fontFamily: 'Open Sans, Arial, sans-serif',
  gap: 3,
  justifyItems: 'center',
  lineHeight: 1,
  minHeight: 72,
  minWidth: 0,
  padding: '8px 4px 6px',
  position: 'relative',
};

function getSectionBarStyle(state: SectionBarState, interaction: SectionBarInteraction, disabled: boolean): CSSProperties {
  if (disabled) {
    return {
      backgroundColor: colors.grey10,
      color: colors.grey30,
      cursor: 'not-allowed',
    };
  }

  if (interaction === 'pressed') {
    return {
      backgroundColor: colors.primary20,
      borderTopColor: state === 'selected' ? colors.primary90 : 'transparent',
      color: colors.primary90,
      fontWeight: state === 'selected' ? 700 : 600,
    };
  }

  if (state === 'selected') {
    return {
      backgroundColor: colors.primary05,
      borderTopColor: colors.primary90,
      color: colors.primary90,
      fontWeight: 700,
    };
  }

  return {};
}

function SectionIcon({ icon }: { icon: SectionBarIcon }) {
  if (icon === 'loan') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 7h14v12H5z" />
        <path d="M8 7V5h8v2" />
        <path d="M8 12h8" />
      </svg>
    );
  }

  if (icon === 'payments') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
        <path d="M8 15h4" />
      </svg>
    );
  }

  if (icon === 'newLoan') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }

  if (icon === 'approvals') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 12.5 11 15l4.5-5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 5h9l3 3v11H6z" />
      <path d="M15 5v4h4" />
      <path d="M9 13h6M9 16h5" />
    </svg>
  );
}

export function SectionBar({
  label = 'Section',
  icon = 'document',
  state = 'default',
  interaction = 'default',
  showBadge = false,
  badgeLabel = 'New activity',
  disabled = false,
  style,
  ...buttonProps
}: SectionBarProps) {
  return (
    <button
      type="button"
      aria-current={state === 'selected' ? 'page' : undefined}
      disabled={disabled}
      data-figma-node-id="7752:2780"
      data-interaction={interaction}
      style={{
        ...baseStyle,
        ...getSectionBarStyle(state, interaction, disabled),
        ...style,
      }}
      {...buttonProps}
    >
      <span style={{ display: 'inline-flex', position: 'relative' }}>
        <SectionIcon icon={icon} />
        {showBadge ? (
          <span
            aria-label={badgeLabel}
            style={{
              backgroundColor: colors.primary90,
              border: `2px solid ${colors.grey00}`,
              borderRadius: 100,
              height: 9,
              position: 'absolute',
              right: -4,
              top: -4,
              width: 9,
            }}
          />
        ) : null}
      </span>
      <span
        style={{
          fontSize: 11,
          lineHeight: '14px',
          maxWidth: '100%',
          overflowWrap: 'anywhere',
          textAlign: 'center',
        }}
      >
        {label}
      </span>
    </button>
  );
}
