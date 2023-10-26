import {View} from 'react-native';
import Header from '../../components/Header/Header';
import Brands from '../../components/Brands/Brands';
import { style } from './styles';


const Home = ({navigation}) => {
  return (
    <View >
      <Header isHome />
      <View style={style.brandSlider}>
      <Brands/>
      </View>
      {/* <Button
        title="Products"
        onPress={() => navigation.navigate('Products')}
      /> */}
    </View>
  );
};

export default Home;
