import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {fonts} from '../../constants/fonts';

const Translate = () => {
  const translate = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: translate.value}, {translateY: translate.value}],
  }));
  const handleTranslation = () => {
    console.log(translate.value);
    translate.value = withSpring(translate.value + 16);
  };
  return (
    <View style={{flex: 1, padding: 8, backgroundColor: 'yellow'}}>
      <Pressable style={{position: 'absolute'}}>
        <View
          style={{
            backgroundColor: 'blue',
            paddingHorizontal: 24,
            paddingVertical: 8,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: fonts.montreal,
              fontSize: 16,
            }}>
            Filter
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Translate;
