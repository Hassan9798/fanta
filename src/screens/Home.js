import {View} from 'react-native';
import Header from '../components/Header/Header';

const Home = ({navigation}) => {
  return (
    <View>
      <Header isHome />
      {/* <Button
        title="Products"
        onPress={() => navigation.navigate('Products')}
      /> */}
    </View>
  );
};

export default Home;
