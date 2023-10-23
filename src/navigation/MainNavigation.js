import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
  )
}

export default MainNavigation