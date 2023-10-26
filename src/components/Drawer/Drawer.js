import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IconCircleButton from '../IconCircleButton/IconCircleButton';
import {icons} from '../../constants/images';

const Drawer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.rtl}>العربية</Text>
        <IconCircleButton icon={icons.cart} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.largeText}>Hey</Text>
        <Text style={styles.largeText}>Mashael</Text>
        <Text style={styles.smallText}>Settings</Text>
      </View>
    </View>
  );
};

export default Drawer;
