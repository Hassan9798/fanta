import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  headerImage: {
    width,
    height: 360,
    objectFit: 'fill',
  },
  top: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    zIndex: 100,
    top: 20,
  },
  menu: {
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  whiteBg: {
    backgroundColor: colors.white,
  },
  menuIcon: {
    width: 20,
    height: 18,
    marginRight: 22,
  },
  backIcon: {
    width: 13,
    marginRight: 16,
  },
  menuText: {
    fontFamily: 'Montreal',
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
    fontSize: 50,
    color: colors.white,
    fontFamily: 'Montreal',
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
