import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './Drawer';
import Products from '../screens/Products';
import BrandProducts from '../screens/BrandProducts';
import BrandProduct from '../screens/BrandProduct/BrandProduct';
import SpecialDeals from '../screens/SpecialDeals';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="BrandProduct" component={BrandProduct} />
      <Stack.Screen name="SpecialDeals" component={SpecialDeals} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
