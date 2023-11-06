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
          <Text style={styles.rtl}>{tl('languageToggle')}</Text>
        </TouchableOpacity>
        <IconCircleButton icon={icons.close} onPress={closeDrawer} />
      </View>
      <View style={styles.content}>
        <View style={styles.userInfo}>
          <Text style={[styles.largeText, styles.text]}>{tl('hey')}</Text>
          <Text style={[styles.largeText, styles.text]}>{tl('mashael')}</Text>
          <TouchableOpacity>
            <Text style={[styles.smallText, styles.text, styles.settings]}>
              {tl('settings')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItems}>
          <TouchableOpacity>
            <Text style={[styles.largeText, styles.text]}>
              {tl('specialDeals')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.largeText, styles.text]}>
              {tl('yourOrders')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.largeText, styles.text]}>
              {tl('contactUs')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity>
            <Text style={[styles.smallText, styles.text]}>
              {tl('termsAndConditions')}
            </Text>
          </TouchableOpacity>
          <Text style={[styles.smallText, styles.text, styles.lightBlueText]}>
            {tl('2023Menabev')}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Drawer;
