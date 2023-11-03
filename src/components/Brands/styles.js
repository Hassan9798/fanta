import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export const style = StyleSheet.create({
  brandsContainer: {
    width,

    // paddingLeft:24,
  },
  brandsWrapper: {
    height: 80,
    width: 80,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
