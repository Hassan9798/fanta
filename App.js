import 'react-native-gesture-handler';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import Translate from './src/components/Animation/Translate';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <MainNavigation />
            {/* <Translate /> */}
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
