import React, { useEffect, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Animated,
  View,
} from 'react-native';

const DEFAULT_COLOR = '#E5E7EB';
const DEFAULT_DURATION = 900;
const MIN_DURATION = 100;
const MAX_DURATION = 60_000;

function useReducedMotion(enabled) {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    if (!enabled) {
      setReduceMotion(true);
      return undefined;
    }

    let isMounted = true;
    const subscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      setReduceMotion,
    );

    AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        if (isMounted) setReduceMotion(enabled);
      })
      .catch(() => {
        // Keep the safer static appearance if the platform query is unavailable.
        if (isMounted) setReduceMotion(true);
      });

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, [enabled]);

  return reduceMotion;
}

/**
 * A single visual placeholder. The host app owns loading state and data.
 */
export function Skeleton({
  width = '100%',
  height = 16,
  radius = 4,
  color = DEFAULT_COLOR,
  animation = 'none',
  duration = DEFAULT_DURATION,
  style,
  testID,
}) {
  const reduceMotion = useReducedMotion(animation === 'pulse');
  const opacity = useRef(new Animated.Value(1)).current;
  const requestedDuration = Number.isFinite(duration) ? duration : DEFAULT_DURATION;
  const safeDuration = Math.min(MAX_DURATION, Math.max(MIN_DURATION, requestedDuration));
  const shouldPulse = animation === 'pulse' && reduceMotion === false;

  useEffect(() => {
    if (!shouldPulse) {
      opacity.stopAnimation();
      opacity.setValue(1);
      return undefined;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.48,
          duration: safeDuration,
          useNativeDriver: true,
          isInteraction: false,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: safeDuration,
          useNativeDriver: true,
          isInteraction: false,
        }),
      ]),
    );

    loop.start();
    return () => loop.stop();
  }, [opacity, safeDuration, shouldPulse]);

  const placeholderStyle = {
    width,
    height,
    borderRadius: radius,
    backgroundColor: color,
  };

  const accessibilityProps = {
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: 'no-hide-descendants',
    pointerEvents: 'none',
    testID,
  };

  if (shouldPulse) {
    return React.createElement(Animated.View, {
      ...accessibilityProps,
      style: [placeholderStyle, style, { opacity }],
    });
  }

  return React.createElement(View, {
    ...accessibilityProps,
    style: [placeholderStyle, style],
  });
}

export default Skeleton;
