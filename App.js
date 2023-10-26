import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import React from 'react';

export const navigationRef = React.createRef();
export function openDrawer(routeName, params) {
  navigationRef.current.dispatch(DrawerActions.openDrawer());
}

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{flex: 1}}>
        <MainNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
