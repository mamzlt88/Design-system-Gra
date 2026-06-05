declare module 'react-native' {
  import type { ComponentType, ReactNode } from 'react';

  export type ColorValue = string;
  export type DimensionValue = number | string;
  export type FontWeight = '400' | '500' | '600' | '700' | 400 | 500 | 600 | 700;
  export type AccessibilityRole = 'button' | 'image' | 'text' | 'progressbar' | 'none';
  export type StyleProp<T> = T | false | null | undefined | ReadonlyArray<StyleProp<T>>;

  export type AccessibilityState = {
    disabled?: boolean;
    selected?: boolean;
    checked?: boolean | 'mixed';
    busy?: boolean;
    expanded?: boolean;
  };

  export type ViewStyle = {
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    alignSelf?: 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    backgroundColor?: ColorValue;
    borderColor?: ColorValue;
    borderRadius?: number;
    borderWidth?: number;
    display?: 'none' | 'flex';
    flex?: number;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flexShrink?: number;
    gap?: number;
    height?: DimensionValue;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    marginLeft?: number;
    minHeight?: number;
    minWidth?: number;
    opacity?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    width?: DimensionValue;
    [key: string]: unknown;
  };

  export type TextStyle = ViewStyle & {
    color?: ColorValue;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: FontWeight;
    letterSpacing?: number;
    lineHeight?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  };

  export type PressableStateCallbackType = {
    pressed: boolean;
    hovered?: boolean;
    focused?: boolean;
  };

  export type ViewProps = {
    accessibilityElementsHidden?: boolean;
    accessibilityLabel?: string;
    accessibilityRole?: AccessibilityRole;
    accessibilityState?: AccessibilityState;
    children?: ReactNode;
    importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants';
    nativeID?: string;
    style?: StyleProp<ViewStyle>;
    testID?: string;
  };

  export type TextProps = Omit<ViewProps, 'style'> & {
    allowFontScaling?: boolean;
    numberOfLines?: number;
    style?: StyleProp<TextStyle>;
  };

  export type PressableProps = Omit<ViewProps, 'children' | 'style'> & {
    children?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
    disabled?: boolean;
    onPress?: (event: unknown) => void;
    style?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  };

  export const Pressable: ComponentType<PressableProps>;
  export const Text: ComponentType<TextProps>;
  export const View: ComponentType<ViewProps>;

  export const StyleSheet: {
    create<T extends Record<string, ViewStyle | TextStyle>>(styles: T): T;
    flatten<T>(style: StyleProp<T>): T;
    hairlineWidth: number;
  };
}
