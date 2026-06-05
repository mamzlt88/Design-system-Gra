# Native Storybook

This package is a dedicated Expo catalog for the React Native layer in `../src/native`.

It follows the React Native Storybook entry-point swapping setup: when `STORYBOOK_ENABLED=true`, Metro swaps the Expo app entry to Storybook. When that variable is absent, `App.tsx` renders the same catalog screen directly.

## Install

From the workspace root:

```bash
npm run native:install
```

## Run

```bash
npm run native:storybook
npm run native:storybook:ios
npm run native:storybook:android
```

You can also run the fallback Expo catalog screen without Storybook:

```bash
npm --prefix native-storybook run start
```

## Files

- `.rnstorybook/main.ts` configures React Native Storybook story discovery.
- `.rnstorybook/preview.tsx` sets the native preview background.
- `stories/NativeComponents.stories.tsx` exposes the full native catalog.
- `catalog/NativeCatalogScreen.tsx` renders every public `Native*` component exported from `src/native`.
