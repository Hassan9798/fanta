import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import { fonts } from '../../constants/fonts';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  headerImage: {
    width,
    height: 320,
    objectFit: 'fill',
  },
  top: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    zIndex: 1000,
    top: 20,
  },
  menu: {
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    columnGap: 20,
  },
  whiteBg: {
    backgroundColor: colors.white,
  },
  menuIcon: {
    width: 20,
    height: 18,
  },
  backIcon: {
    width: 13,
  },
  menuText: {
    fontFamily: fonts.montreal,
    color: colors.white,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  blueText: {
    color: '#092445',
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 190,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 45,
    color: colors.white,
    fontFamily: fonts.montreal,
    textTransform: 'uppercase',
    marginRight: 20,
  },
  disabled: {
    opacity: 0.5,
  },
  titleSlider: {
    alignItems: 'flex-end',
  },
});
