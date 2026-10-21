# Vulto Skeleton

A small loading placeholder for React Native apps. Blocks and lines hold space on screen while real content is on its way.

I'm building Vulto as a focused open source package for one visual job. It does not fetch data, decide when a screen is loading, or ask the app to configure a provider.

## Project status

The code is in development and has not been published to npm yet. The API may change before the first stable release.

## Try it with Expo

The app in [`example/`](./example/README.md) shows the primitive in a profile and content card, with controls to switch between placeholders and content and to enable pulse.

```sh
cd example
npm install
npm start
```

Scan the QR code with Expo Go 58. Keep your phone and computer on the same Wi-Fi network.

## Intended use

```tsx
import { View } from 'react-native';
import { Skeleton } from 'vulto-skeleton-native';

function ProfileLoading() {
  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Skeleton width={56} height={56} radius={28} />
      <View style={{ flex: 1, gap: 8 }}>
        <Skeleton width="72%" height={16} />
        <Skeleton width="48%" height={12} />
      </View>
    </View>
  );
}
```

Once the package is published, install it with `npm install vulto-skeleton-native`.

## What the first version includes

- One configurable primitive for blocks and lines.
- Static appearance by default, with optional pulse animation.
- Respect for the system reduced-motion preference.
- No runtime dependencies beyond React and React Native peer dependencies.

The app using the library remains responsible for loading state, data, layouts, and accessible status messages. Ready-made avatar, text, and card templates can come later.

## License

MIT. See [LICENSE](./LICENSE).

Português: [README.pt-BR.md](./README.pt-BR.md).
