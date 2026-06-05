import { StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

import type { StatusBadgeStatus, StatusBadgeStyle } from '../../components/StatusBadge';
import { nativeTokens } from '../tokens';

export type NativeStatusBadgeProps = {
  label?: string;
  status?: StatusBadgeStatus;
  style?: StyleProp<ViewStyle>;
  styleVariant?: StatusBadgeStyle;
  textStyle?: StyleProp<TextStyle>;
};

const statusColors: Record<Exclude<StatusBadgeStatus, 'loading'>, { background: string; text: string }> = {
  attention: {
    background: nativeTokens.color.orange40,
    text: nativeTokens.color.orange90,
  },
  critical: {
    background: nativeTokens.color.red50,
    text: nativeTokens.color.red80,
  },
  informative: {
    background: nativeTokens.color.primary00,
    text: nativeTokens.color.primary90,
  },
  progress: {
    background: nativeTokens.color.secondary60,
    text: nativeTokens.color.secondary90,
  },
  success: {
    background: nativeTokens.color.green10,
    text: nativeTokens.color.green90,
  },
  warning: {
    background: nativeTokens.color.yellow05,
    text: nativeTokens.color.yellow60,
  },
};

function readableStatus(status: StatusBadgeStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function NativeStatusBadge({
  label = 'STATUS',
  status = 'informative',
  style,
  styleVariant = 'default',
  textStyle,
}: NativeStatusBadgeProps) {
  if (status === 'loading') {
    return (
      <View
        accessibilityLabel="Loading status"
        accessibilityRole="progressbar"
        style={[styles.badge, styles.loading, style]}
      />
    );
  }

  const colors = statusColors[status];

  return (
    <View
      accessibilityLabel={`${readableStatus(status)} status: ${label}`}
      accessibilityRole="text"
      style={[styles.badge, { backgroundColor: colors.background }, style]}
    >
      <Text
        style={[
          styles.text,
          {
            color: colors.text,
            fontWeight: styleVariant === 'emphasized' ? 600 : 400,
          },
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    borderRadius: nativeTokens.radius.xl,
    flexShrink: 0,
    justifyContent: 'center',
    minHeight: 23,
    minWidth: 40,
    paddingHorizontal: nativeTokens.spacing.sm,
    paddingVertical: nativeTokens.spacing.xxs,
  },
  loading: {
    backgroundColor: nativeTokens.color.grey10,
    width: 77,
  },
  text: {
    ...nativeTokens.typography.bodySmallRegular,
    textAlign: 'center',
  },
});
