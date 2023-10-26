import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IconCircleButton from '../IconCircleButton/IconCircleButton';
import {icons} from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';

const Drawer = ({navigation}) => {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };
  return (
    <LinearGradient
      colors={['#215DBC', '#09274A', '#184A92']}
      start={{x: 0.5, y: 0}}
      end={{x: 0, y: 1.4}}
      style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.rtl}>العربية</Text>
        <IconCircleButton icon={icons.close} onPress={closeDrawer} />
      </View>
      <View style={styles.content}>
        <View style={styles.userInfo}>
          <Text style={[styles.largeText, styles.text]}>Hey</Text>
          <Text style={[styles.largeText, styles.text]}>Mashael</Text>
          <TouchableOpacity>
            <Text style={[styles.smallText, styles.text, styles.settings]}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItems}>
          <TouchableOpacity>
            <Text style={[styles.largeText, styles.text]}>SPECIAL DEALS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.largeText, styles.text]}>YOUR ORDERS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.largeText, styles.text]}>CONTACT US</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity>
            <Text style={[styles.smallText, styles.text]}>
              TERMS & CONDITIONS
            </Text>
          </TouchableOpacity>
          <Text style={[styles.smallText, styles.text, styles.lightBlueText]}>
            2023 MENABEV
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Drawer;
