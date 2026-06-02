import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import { componentTokens as tokens } from '../tokens/componentTokens';

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
  grey00: tokens.color.grey00,
  grey10: tokens.color.grey10,
  grey20: tokens.color.grey20,
  grey30: tokens.color.grey30,
  grey60: tokens.color.grey60,
  primary00: tokens.color.primary00,
  primary80: tokens.color.primary80,
  semanticRed80: tokens.color.red80,
};

const baseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: colors.grey00,
  border: 0,
  borderTop: `1px solid ${colors.grey20}`,
  boxSizing: 'border-box',
  color: colors.grey60,
  cursor: 'pointer',
  display: 'grid',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  gap: tokens.spacing.xxs,
  height: 66,
  justifyItems: 'center',
  lineHeight: 1,
  maxHeight: 66,
  minWidth: 0,
  padding: tokens.spacing.xxs,
  position: 'relative',
  width: 78,
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
      backgroundColor: colors.primary00,
      borderTop: state === 'selected' ? `3px solid ${colors.primary80}` : `1px solid ${colors.grey20}`,
      color: colors.primary80,
      fontWeight: 600,
    };
  }

  if (state === 'selected') {
    return {
      backgroundColor: colors.primary00,
      borderTop: `3px solid ${colors.primary80}`,
      color: colors.primary80,
      fontWeight: 600,
    };
  }

  return {};
}

function SectionIcon({ icon }: { icon: SectionBarIcon }) {
  if (icon === 'loan') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 7h14v12H5z" />
        <path d="M8 7V5h8v2" />
        <path d="M8 12h8" />
      </svg>
    );
  }

  if (icon === 'payments') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
        <path d="M8 15h4" />
      </svg>
    );
  }

  if (icon === 'newLoan') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }

  if (icon === 'approvals') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 12.5 11 15l4.5-5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
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
              backgroundColor: colors.semanticRed80,
              border: `2px solid ${colors.grey00}`,
              borderRadius: tokens.radius.pill,
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
          fontSize: tokens.typography.bodySmallRegular.fontSize,
          lineHeight: tokens.typography.bodySmallRegular.lineHeight,
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
