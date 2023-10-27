import {View} from 'react-native';
import Header from '../../components/Header/Header';
import Brands from '../../components/Brands/Brands';
import {style} from './styles';
import StrokedText from '../../components/StrokedText/StrokedText';

const Home = ({navigation}) => {
  return (
    <View>
      <Header isHome />
      <View style={style.brandSlider}>
        <Brands />
      </View>
    </View>
  );
};

export default Home;
