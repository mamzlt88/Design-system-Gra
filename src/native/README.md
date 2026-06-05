# React Native Layer

This folder is the first native adapter layer for the design system.

It intentionally stays separate from the web React components in `src/components` so the current Vite Storybook and web exports remain stable. Native apps should import from `src/native` and provide the real `react-native` runtime.

Current first-pass coverage includes native exports for the public web component catalog. Small primitives such as `NativeButton`, `NativeIcon`, and `NativeStatusBadge` are hand-built foundations. The rest are adapter/surface components that preserve the web component names with a `Native` prefix and expose production-friendly props for React Native screens.

The temporary `src/native/types/react-native.d.ts` declaration lets this repository type-check before React Native dependencies are installed here. A real iOS/Android app should use the official `react-native` package and its platform tooling.

Next candidates:

- Native Storybook or Expo Storybook setup
- Platform QA for iOS and Android touch states
- Replacing any remaining illustrative text fallbacks with product copy from app screens
