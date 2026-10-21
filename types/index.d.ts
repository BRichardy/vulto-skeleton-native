import type { ComponentProps, ReactElement } from 'react';
import type { StyleProp, View, ViewStyle } from 'react-native';

export type SkeletonAnimation = 'none' | 'pulse';

export interface SkeletonProps {
  /** Width in React Native layout units or a percentage string. */
  width?: ViewStyle['width'];
  /** Height in React Native layout units or a percentage string. */
  height?: ViewStyle['height'];
  /** Border radius. Use a large value such as 9999 for a circular shape. */
  radius?: ViewStyle['borderRadius'];
  /** Base fill color. */
  color?: ViewStyle['backgroundColor'];
  /** Static by default; pulse is disabled when reduced motion is enabled. */
  animation?: SkeletonAnimation;
  /** Duration of each pulse phase, in milliseconds. */
  duration?: number;
  /** Additional React Native view styles. */
  style?: StyleProp<ViewStyle>;
  /** React Native test identifier. */
  testID?: ComponentProps<typeof View>['testID'];
}

export declare function Skeleton(props: SkeletonProps): ReactElement;
export default Skeleton;
