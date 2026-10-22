# Vulto

A small visual placeholder for React Native apps while content is loading.

Vulto handles the placeholder shape. Your app stays in control of its data, loading state, and the message that tells people content is on the way.

## Status

The package is still in development and has not been published to npm. Its API may change before the first stable release.

## Try it with Expo

The app in [`example/`](./example/README.md) shows the primitive in a profile and content card. Use the controls to switch between placeholders and real content and to enable pulse.

```sh
cd example
npm install
npm start
```

Scan the QR code with Expo Go 58. Keep your computer and phone on the same Wi-Fi network.

## Usage

Once the package is published, install it with `npm install vulto-skeleton-native`.

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

## Props

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `width` | `ViewStyle['width']` | `'100%'` | Shape width |
| `height` | `ViewStyle['height']` | `16` | Shape height |
| `radius` | `ViewStyle['borderRadius']` | `4` | Corner radius |
| `color` | `ViewStyle['backgroundColor']` | `'#E5E7EB'` | Shape color |
| `animation` | `'none' \| 'pulse'` | `'none'` | Static appearance or pulse |
| `duration` | `number` | `900` | Duration of each pulse phase in milliseconds |
| `style` | `ViewStyle` | — | Additional React Native styles |
| `testID` | `string` | — | Test identifier for the consuming app |

## Animation and themes

Animation is off by default. Set `animation="pulse"` to enable it. Pulse respects the system reduced-motion preference.

There is no provider or global theme. Set `color` or `style` on each shape using the colors already used by your app. `shimmer` is not included in this version.

## Use in lists

Vulto does not replace or configure your list. Render the primitive in the `renderItem` of the list your app already uses, such as `FlatList` or `FlashList`:

```tsx
<FlatList
  data={[0, 1, 2]}
  keyExtractor={(item) => String(item)}
  renderItem={() => <Skeleton height={18} style={{ marginVertical: 8 }} />}
/>
```

The package does not include list helpers or ready-made avatar, text, or card components.

## Accessibility

Shapes are decorative and hidden from screen readers. The app screen should provide its own accessible loading text or announcement.

## License

MIT. See [LICENSE](./LICENSE).

Português: [README.md](./README.md).
