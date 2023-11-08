import {ScrollView, View} from 'react-native';
import Header from '../../components/Header/Header';
import Brands from '../../components/Brands/Brands';
import {style} from './styles';
import {images} from '../../constants/images';
import HomeSlider from '../../components/HomeSlider';
import Footer from '../../components/Footer/Footer';
import {useGetTranslation} from '../../languageSupport/translation';
import {colors} from '../../constants/colors';

const Home = ({navigation}) => {
  const tl = useGetTranslation();
  const categories = [
    {img: images.specialOffer, name: tl('softDrinks')},
    {img: images.category1, name: tl('softDrinks')},
    {img: images.category2, name: tl('energyDrinks')},
    {img: images.category3, name: tl('iceTea')},
    {img: images.category4, name: tl('sportDrinks')},
  ];
  const snacks = [
    {img: images.snack, name: tl('snacks')},
    {img: images.snack1, name: tl('snacks')},
    {img: images.snack2, name: tl('snacks')},
    {img: images.snack3, name: tl('snacks')},
    {img: images.snack4, name: tl('snacks')},
  ];
  return (
    <ScrollView
      style={{
        backgroundColor: colors.white,
      }}>
      <View>
        <Header isHome />
        <View style={style.brandSlider}>
          <Brands navigation={navigation} />
        </View>
      </View>
      <HomeSlider
        data={categories}
        bottomText={true}
        marginTop={50}
        slider1={true}
        categories={true}
        navigation={navigation}
      />
      <HomeSlider data={snacks} topText={true} />
      <Footer />
    </ScrollView>
  );
};

export default Home;
