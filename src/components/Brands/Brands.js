import {View, Image} from 'react-native';
import {images} from '../../constants/images';
import {useRef} from 'react';
import {style} from './styles';
import EmptyComponent from '../EmptyComponent';
import RTLHorizontalFlatlist from '../RTLComponents/HorizontalFlatlist';

const Brands = () => {
  const flatListRef = useRef(0);
  const brands = [
    {id: 1, brand: images.UPBrand},
    {id: 2, brand: images.dewBrand},
    {id: 3, brand: images.liptonBrand},
    {id: 5, brand: images.shaniBrand},
    {id: 6, brand: images.marindaBrand},
    {id: 7, brand: images.liptonBrand},
    {id: 8, brand: images.shaniBrand},
    {id: 9, brand: images.marindaBrand},
  ];
  return (
    <View style={style.brandsContainer}>
      <RTLHorizontalFlatlist
        data={brands}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <EmptyComponent width={24} />}
        ListFooterComponent={() => <EmptyComponent width={12} />}
        ItemSeparatorComponent={() => <EmptyComponent width={12} />}
        renderItem={({item}) => {
          return (
            <View style={[style.brandsWrapper]}>
              <Image
                source={item.brand}
                resizeMode="cover"
                style={{height: 60, borderRadius: 10, width: 60}}
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        listRef={flatListRef}
      />
    </View>
  );
};

export default Brands;
