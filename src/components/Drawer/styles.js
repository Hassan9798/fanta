import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkblue',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  top: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rtl: {
    color: colors.white,
    fontFamily: 'Montreal',
    fontSize: 22,
  },
  userInfo: {
    // backgroundColor: 'yellow',
  },
  largeText: {
    fontFamily: 'Montreal',
    color: colors.white,
  },
  smallText: {
    fontFamily: 'Montreal',
    color: colors.white,
  },
});
