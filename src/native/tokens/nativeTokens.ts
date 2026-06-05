import { componentTokens } from '../../tokens/componentTokens';

function px(value: number | string) {
  if (typeof value === 'number') {
    return value;
  }

  return Number(value.replace('px', ''));
}

function firstFont(value: string) {
  return value.split(',')[0].trim();
}

function textStyle(style: (typeof componentTokens.typography)[keyof typeof componentTokens.typography]) {
  return {
    fontFamily: firstFont(style.fontFamily),
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    letterSpacing: px(style.letterSpacing),
    lineHeight: px(style.lineHeight),
  } as const;
}

export const nativeTokens = {
  color: componentTokens.color,
  effect: componentTokens.effect,
  gradient: componentTokens.gradient,
  radius: componentTokens.radius,
  spacing: componentTokens.spacing,
  typography: {
    displayLargeSemiBold: textStyle(componentTokens.typography.displayLargeSemiBold),
    displayMediumSemiBold: textStyle(componentTokens.typography.displayMediumSemiBold),
    displaySmallBold: textStyle(componentTokens.typography.displaySmallBold),
    headingBold: textStyle(componentTokens.typography.headingBold),
    headingSemiBold: textStyle(componentTokens.typography.headingSemiBold),
    subHeadingBold: textStyle(componentTokens.typography.subHeadingBold),
    subHeadingSemiBold: textStyle(componentTokens.typography.subHeadingSemiBold),
    subHeadingSmallBold: textStyle(componentTokens.typography.subHeadingSmallBold),
    bodyRegular: textStyle(componentTokens.typography.bodyRegular),
    bodySemiBold: textStyle(componentTokens.typography.bodySemiBold),
    bodySmallRegular: textStyle(componentTokens.typography.bodySmallRegular),
    bodySmallSemiBold: textStyle(componentTokens.typography.bodySmallSemiBold),
    captionRegular: textStyle(componentTokens.typography.captionRegular),
  },
} as const;

export type NativeTokens = typeof nativeTokens;
