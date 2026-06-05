import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';

import { nativeTokens } from '../tokens';
import type { IconName } from './nativeComponentTypes';

export type NativeIconProps = {
  name: IconName;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  title?: string;
};

const iconGlyphs: Record<IconName, string> = {
  arrowLeft: '<',
  arrowRight: '>',
  bell: '!',
  chevronDown: 'v',
  check: 'OK',
  document: '[]',
  externalLink: 'NE',
  globe: 'o',
  helpCircle: '?',
  info: 'i',
  menu: '=',
  minus: '-',
  person: '@',
  plus: '+',
  search: '?',
  settings: '*',
  upload: '^',
};

export function NativeIcon({
  name,
  color = nativeTokens.color.grey60,
  size = 18,
  style,
  title,
}: NativeIconProps) {
  return (
    <Text
      accessibilityElementsHidden={!title}
      accessibilityLabel={title}
      accessibilityRole={title ? 'image' : 'none'}
      allowFontScaling={false}
      importantForAccessibility={title ? 'auto' : 'no'}
      style={[
        styles.icon,
        {
          color,
          fontSize: size,
          lineHeight: size,
          minWidth: size,
        },
        style,
      ]}
    >
      {iconGlyphs[name]}
    </Text>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontFamily: nativeTokens.typography.bodySemiBold.fontFamily,
    fontWeight: 700,
    textAlign: 'center',
  },
});
