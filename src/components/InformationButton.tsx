import { useId, type ButtonHTMLAttributes, type CSSProperties } from 'react';

import { Icon } from './Icon';
import { Tooltip } from './Tooltip';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type InformationButtonState = 'enabled' | 'pressed' | 'tooltipOpen';
export type InformationButtonTextSize = 'medium' | 'small';

export type InformationButtonProps = {
  label: string;
  state?: InformationButtonState;
  textSize?: InformationButtonTextSize;
  tooltipText?: string;
  tooltipId?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const colors = {
  grey00: tokens.color.grey00,
  grey05: tokens.color.grey05,
  grey10: tokens.color.grey10,
  grey40: tokens.color.grey40,
  grey60: tokens.color.grey60,
  primary05: tokens.color.primary05,
  primary20: tokens.color.primary20,
  primary90: tokens.color.primary90,
  primary100: tokens.color.primary100,
};

const wrapperStyle: CSSProperties = {
  display: 'inline-grid',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  position: 'relative',
};

const buttonBaseStyle: CSSProperties = {
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: tokens.radius.pill,
  color: colors.primary90,
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  fontWeight: 600,
  gap: tokens.spacing.sm,
  justifyContent: 'center',
  lineHeight: 1.25,
  minHeight: 36,
  padding: '8px 12px',
  transition: 'background-color 120ms ease-in-out, color 120ms ease-in-out',
  whiteSpace: 'nowrap',
};

const tooltipLayerStyle: CSSProperties = {
  left: 0,
  position: 'absolute',
  top: 'calc(100% + 8px)',
  zIndex: 2,
};

function getButtonStyle(state: InformationButtonState, textSize: InformationButtonTextSize): CSSProperties {
  const open = state === 'tooltipOpen';
  const pressed = state === 'pressed';

  return {
    backgroundColor: open ? colors.primary20 : pressed ? colors.primary05 : 'transparent',
    borderColor: open ? colors.primary90 : 'transparent',
    color: pressed ? colors.primary100 : colors.primary90,
    fontSize: textSize === 'medium' ? 14 : 12,
  };
}

export function InformationButton({
  label,
  state = 'enabled',
  textSize = 'medium',
  tooltipText = 'Additional information',
  tooltipId,
  style,
  disabled = false,
  ...buttonProps
}: InformationButtonProps) {
  const generatedTooltipId = useId();
  const resolvedTooltipId = tooltipId ?? generatedTooltipId;
  const tooltipOpen = state === 'tooltipOpen';

  return (
    <span data-figma-node-id="7521:7432" style={{ ...wrapperStyle, ...style }}>
      <button
        type="button"
        aria-describedby={tooltipOpen ? resolvedTooltipId : undefined}
        aria-expanded={tooltipOpen}
        disabled={disabled}
        style={{
          ...buttonBaseStyle,
          ...getButtonStyle(state, textSize),
          backgroundColor: disabled ? colors.grey05 : getButtonStyle(state, textSize).backgroundColor,
          color: disabled ? colors.grey40 : getButtonStyle(state, textSize).color,
          cursor: disabled ? 'not-allowed' : buttonBaseStyle.cursor,
          pointerEvents: disabled ? 'none' : undefined,
        }}
        {...buttonProps}
      >
        <Icon name="info" width={textSize === 'medium' ? 18 : 16} height={textSize === 'medium' ? 18 : 16} />
        <span>{label}</span>
      </button>
      {tooltipOpen ? (
        <span style={tooltipLayerStyle}>
          <Tooltip id={resolvedTooltipId} text={tooltipText} arrowPlacement="top" arrowAlignment="left" />
        </span>
      ) : null}
    </span>
  );
}
