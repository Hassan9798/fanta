import 'react-native-gesture-handler';
import {SafeAreaView, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
const App=()=> {
  return (
    <NavigationContainer> 
      <SafeAreaView style={{flex:1}}>
      <MainNavigation/>
    </SafeAreaView>
    </NavigationContainer>  
   
  );
}

export default App;
