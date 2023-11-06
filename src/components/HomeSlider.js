import {Pressable, View} from 'react-native';
import {useRef} from 'react';
import ProductCard from './Card/ProductCard';
import EmptyComponent from './EmptyComponent';
import RTLHorizontalFlatlist from './RTLComponents/HorizontalFlatlist';

const HomeSlider = ({navigation,data, marginTop, bottomText, topText, slider1,categories}) => {
  const categoriesRef = useRef(0);
  return (
    <View style={{marginTop: marginTop}}>
      <RTLHorizontalFlatlist
        data={data}
        showsHorizontalScrollIndicator={false}
        listref={categoriesRef}
        horizontal
        keyExtractor={(_, index) => index}
        ListHeaderComponent={() => <EmptyComponent width={10} />}
        renderItem={({item, index}) =>
          index === 0 && slider1 === true ? (
            <Pressable onPress={()=>navigation.navigate("SpecialDeals")}>
            <ProductCard img={item.img} />
            </Pressable>
          ) : (
            <ProductCard
              img={item.img}
              height={240}
              width={200}
              bottomText={bottomText && item.name}
              topText={topText && item.name}
            />
          )
        }
      />
    </View>
  );
};

export default HomeSlider;
