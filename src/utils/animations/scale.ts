import { Animated } from 'react-native';

export function scaleAnimation(
  initialValue: number,
  toValue: number,
  duration: number,
) {
  const animated = new Animated.Value(initialValue);

  const onPressIn = () => {
    Animated.timing(animated, {
      toValue,
      useNativeDriver: true,
      duration,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(animated, {
      toValue: initialValue,
      useNativeDriver: true,
      duration,
    }).start();
  };

  const style = {
    transform: [{ scale: animated }],
  };

  return {
    onPressIn,
    onPressOut,
    style,
  };
}
