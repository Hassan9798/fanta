import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useEffect, useState} from 'react';
import {images} from '../../constants/images';
import EmptyComponent from '../EmptyComponent';

const Filter = () => {
  const [open, setOpen] = useState(true);
  const translateY = useSharedValue(70);
  const textOpacity = useSharedValue(1);

  const animationContainerStyles = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));
  const animationTextStyles = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));
  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 700,
    });
  }, []);
  const onButtonPress = () => {
    textOpacity.value = withTiming(0, {
      duration: 100,
      easing: Easing.linear,
    });
  };
  return (
    // <TouchableOpacity onPress={onButtonPress} activeOpacity={1}>
    <Animated.View
      style={[
        styles.buttonContainer,
        open ? styles.filterContainer : {},
        animationContainerStyles,
      ]}>
      {!open ? (
        <Animated.Text style={[styles.buttonText, animationTextStyles]}>
          Filter
        </Animated.Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={new Array(6).fill(1)}
          keyExtractor={(_, index) => index}
          renderItem={() => (
            <View style={styles.filterItem}>
              <Image source={images.bottle25L} style={styles.filterItemImage} />
              <Text style={styles.bottleTitle}>Bottle</Text>
              <Text style={styles.bottleSize}>2.25 Litre</Text>
            </View>
          )}
          // ItemSeparatorComponent={() => <EmptyComponent width={20} />}
        />
      )}
    </Animated.View>
    // </TouchableOpacity>
  );
};

export default Filter;
