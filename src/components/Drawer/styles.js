import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkblue',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  scroll: {
    backgroundColor: 'yellow',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rtl: {
    color: colors.white,
    fontFamily: 'Montreal',
    fontSize: 22,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  userInfo: {
    marginTop: 40,
  },
  navItems: {
    marginVertical: 16,
    rowGap: 24,
  },
  bottom: {
    marginVertical: 16,
  },
  text: {
    fontFamily: 'Montreal',
    color: colors.white,
    textTransform: 'uppercase',
  },
  largeText: {
    fontSize: 42,
  },
  smallText: {
    fontSize: 22,
  },
  settings: {
    marginTop: 8,
  },
  lightBlueText: {
    color: colors.lightBlue,
  },
});
