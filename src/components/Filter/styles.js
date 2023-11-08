import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

export const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 54,
    paddingVertical: 12,
    backgroundColor: colors.darkBlue,
    alignSelf: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 10,
  },
  filterContainer: {
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.montreal,
    fontSize: 20,
    letterSpacing: 1,
  },
  filterItem: {
    // backgroundColor: 'yellow',
  },
  filterItemImage: {
    transform: [{scale: 0.4}],
  },
});
