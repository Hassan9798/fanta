import 'react-native-gesture-handler';
import {Button, SafeAreaView,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <MainNavigation />
          </SafeAreaView>
          </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
