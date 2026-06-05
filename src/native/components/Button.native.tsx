import type { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { NativeIcon } from './Icon.native';
import { nativeTokens } from '../tokens';

export type NativeButtonVariant = 'filled' | 'outlined' | 'text';
export type NativeButtonTone = 'primary' | 'secondary' | 'red' | 'warning' | 'green' | 'standard';
export type NativeButtonState = 'enabled' | 'pressed' | 'disabled';

export type NativeButtonProps = {
  children?: ReactNode;
  darkMode?: boolean;
  fullWidth?: boolean;
  label?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  state?: NativeButtonState;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  tone?: NativeButtonTone;
  variant?: NativeButtonVariant;
} & Omit<PressableProps, 'children' | 'disabled' | 'style'>;

const colors = nativeTokens.color;

const toneColors: Record<NativeButtonTone, { light: string; pressed: string; dark: string; text: string }> = {
  primary: {
    light: colors.primary90,
    pressed: colors.primary100,
    dark: colors.primary10,
    text: colors.grey00,
  },
  secondary: {
    light: colors.secondary80,
    pressed: colors.primary70,
    dark: colors.primary20,
    text: colors.grey00,
  },
  red: {
    light: colors.red80,
    pressed: colors.red90,
    dark: colors.red50,
    text: colors.grey00,
  },
  warning: {
    light: colors.orange80,
    pressed: colors.orange90,
    dark: colors.orange40,
    text: colors.grey00,
  },
  green: {
    light: colors.green80,
    pressed: colors.green90,
    dark: colors.green10,
    text: colors.grey00,
  },
  standard: {
    light: colors.grey40,
    pressed: colors.grey60,
    dark: colors.grey05,
    text: colors.grey00,
  },
};

function getNativeButtonStyle(
  variant: NativeButtonVariant,
  tone: NativeButtonTone,
  state: NativeButtonState,
  darkMode: boolean,
): { container: ViewStyle; text: TextStyle } {
  const disabled = state === 'disabled';
  const pressed = state === 'pressed';
  const toneColor = toneColors[tone];
  const activeColor = darkMode ? toneColor.dark : pressed ? toneColor.pressed : toneColor.light;
  const activeText = darkMode && variant === 'filled' ? colors.primary90 : toneColor.text;

  if (disabled) {
    return {
      container: {
        backgroundColor: darkMode ? colors.primary80 : colors.grey10,
        borderColor: variant === 'outlined' ? colors.grey30 : 'transparent',
      },
      text: {
        color: darkMode ? colors.primary50 : colors.grey30,
      },
    };
  }

  if (variant === 'outlined') {
    return {
      container: {
        backgroundColor: pressed ? (darkMode ? colors.primary100 : colors.grey05) : 'transparent',
        borderColor: darkMode ? colors.grey00 : colors.grey30,
      },
      text: {
        color: darkMode ? colors.primary20 : tone === 'standard' ? colors.grey50 : colors.primary90,
      },
    };
  }

  if (variant === 'text') {
    return {
      container: {
        backgroundColor: pressed ? (darkMode ? colors.grey60 : colors.grey05) : 'transparent',
        borderColor: 'transparent',
      },
      text: {
        color: darkMode ? colors.grey00 : tone === 'standard' ? colors.grey50 : colors.primary90,
      },
    };
  }

  return {
    container: {
      backgroundColor: activeColor,
      borderColor: 'transparent',
    },
    text: {
      color: tone === 'standard' && darkMode ? colors.grey90 : activeText,
    },
  };
}

export function NativeButton({
  children,
  darkMode = false,
  fullWidth = false,
  label,
  leftIcon = false,
  rightIcon = false,
  state = 'enabled',
  style,
  textStyle,
  tone = 'primary',
  variant = 'filled',
  ...pressableProps
}: NativeButtonProps) {
  const isDisabled = state === 'disabled';
  const resolvedStyle = getNativeButtonStyle(variant, tone, state, darkMode);
  const iconColor = resolvedStyle.text.color;
  const content = label ?? children;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button,
        resolvedStyle.container,
        fullWidth ? styles.fullWidth : null,
        pressed && !isDisabled ? styles.interactionPressed : null,
        style,
      ]}
      {...pressableProps}
    >
      {leftIcon ? (
        <View style={styles.iconWrap}>
          <NativeIcon color={iconColor} name="plus" size={16} />
        </View>
      ) : null}
      <Text style={[styles.text, resolvedStyle.text, textStyle]}>{content}</Text>
      {rightIcon ? (
        <View style={styles.iconWrap}>
          <NativeIcon color={iconColor} name="plus" size={16} />
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: nativeTokens.radius.pill,
    borderWidth: 1,
    flexDirection: 'row',
    gap: nativeTokens.spacing.xxs,
    justifyContent: 'center',
    minHeight: 44,
    paddingHorizontal: nativeTokens.spacing['3xl'],
    paddingVertical: nativeTokens.spacing.lg,
  },
  fullWidth: {
    alignSelf: 'stretch',
    width: '100%',
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  interactionPressed: {
    opacity: 0.88,
  },
  text: {
    ...nativeTokens.typography.subHeadingSemiBold,
    textAlign: 'center',
  },
});
