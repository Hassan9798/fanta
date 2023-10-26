import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './Drawer';
import Products from '../screens/Products';
import BrandProducts from '../screens/BrandProducts';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="BrandProducts" component={BrandProducts} />
    </Stack.Navigator>
  );
};

export default MainNavigation;