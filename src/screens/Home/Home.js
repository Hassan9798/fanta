import {ScrollView, View} from 'react-native';
import Header from '../../components/Header/Header';
import Brands from '../../components/Brands/Brands';
import { style } from './styles';
import { images } from '../../constants/images';
import HomeSlider from '../../components/HomeSlider';
import Footer from '../../components/Footer/Footer';



const Home = ({navigation}) => {

  const categories=[
    {img:images.specialOffer,name:"SOFT DRINKS"},
    {img:images.category1,name:"SOFT DRINKS"},
    {img:images.category2,name:"ENERGY DRINKS"},
    {img:images.category3,name:"ICE TEA"},
    {img:images.category4,name:"SPORT DRINKS"}
  ]
  const snacks=[
    {img:images.snack,name:"SNACKS"},
    {img:images.snack1,name:"SNACKS"},
    {img:images.snack2,name:"SNACKS"},
    {img:images.snack3,name:"SNACKS"},
    {img:images.snack4,name:"SNACKS"}
  ];
  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}} >
      <Header isHome />
      <View style={style.brandSlider}>
      <Brands navigation={navigation}/>
      </View>
      <HomeSlider data={categories} bottomText={true} marginTop={50} slider1={true}/>
      <HomeSlider data={snacks} topText={true} />
      <Footer/>
    </ScrollView>
  );
};

export default Home;
