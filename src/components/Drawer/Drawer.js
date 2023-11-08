import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IconCircleButton from '../IconCircleButton/IconCircleButton';
import {icons} from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {useGetTranslation} from '../../languageSupport/translation';
import {allowedLanguages} from '../../languageSupport/allowedLanguages';
import {setLanguage} from '../../redux/slices/languageSlice';
import RTLText from '../RTLComponents/RTLText';

const Drawer = ({navigation}) => {
  const tl = useGetTranslation();
  const language = useSelector(state => state.languageSupport.language);
  const dispatch = useDispatch();
  const closeDrawer = () => {
    navigation.closeDrawer();
  };
  const onLanguageChange = () => {
    if (language === allowedLanguages.en)
      dispatch(setLanguage({language: allowedLanguages.ar, direction: 'rtl'}));
    else if (language === allowedLanguages.ar)
      dispatch(setLanguage({language: allowedLanguages.en, direction: 'ltr'}));

    closeDrawer();
  };
  return (
    <LinearGradient
      colors={['#215DBC', '#09274A', '#184A92']}
      start={{x: 0.5, y: 0}}
      end={{x: 0, y: 1.4}}
      style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={onLanguageChange}>
          <RTLText style={styles.rtl} ltr>{tl('languageToggle')}</RTLText>
        </TouchableOpacity>
        <IconCircleButton icon={icons.close} onPress={closeDrawer} />
      </View>
      <View style={styles.content}>
        <View style={styles.userInfo}>
          <RTLText style={[styles.largeText, styles.text]}>{tl('hey')}</RTLText>
          <RTLText style={[styles.largeText, styles.text]}>{tl('mashael')}</RTLText>
          <TouchableOpacity>
            <RTLText style={[styles.smallText, styles.text, styles.settings]}>
              {tl('settings')}
            </RTLText>
          </TouchableOpacity>
        </View>
        <View style={styles.navItems}>
          <TouchableOpacity>
            <RTLText style={[styles.largeText, styles.text]}>
              {tl('specialDeals')}
            </RTLText>
          </TouchableOpacity>
          <TouchableOpacity>
            <RTLText style={[styles.largeText, styles.text]}>
              {tl('yourOrders')}
            </RTLText>
          </TouchableOpacity>
          <TouchableOpacity>
            <RTLText style={[styles.largeText, styles.text]}>
              {tl('contactUs')}
            </RTLText>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity>
            <RTLText style={[styles.smallText, styles.text]}>
              {tl('termsAndConditions')}
            </RTLText>
          </TouchableOpacity>
          <RTLText style={[styles.smallText, styles.text, styles.lightBlueText]}>
            {tl('2023Menabev')}
          </RTLText>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Drawer;
