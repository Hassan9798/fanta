import {View, Image, Pressable} from 'react-native';
import {images} from '../../constants/images';
import {useRef} from 'react';
import {style} from './styles';
import EmptyComponent from '../EmptyComponent';
import RTLHorizontalFlatlist from '../RTLComponents/HorizontalFlatlist';

const Brands = ({navigation,marginTop}) => {
  const flatListRef = useRef(0);
  const brands = [
    {id: 1, brand: images.UPBrand,name:"7UP"},
    {id: 2, brand: images.dewBrand,name:"dew"},
    {id: 3, brand: images.liptonBrand,name:"lipton"},
    {id: 5, brand: images.shaniBrand,name:"shani"},
    {id: 6, brand: images.marindaBrand,name:"marinda"},
    {id: 7, brand: images.liptonBrand,name:"lipton"},
    {id: 8, brand: images.shaniBrand,name:"shani"},
    {id: 9, brand: images.marindaBrand,name:"marinda"},
  ];
  return (
    <View style={[style.brandsContainer,{marginTop:marginTop??0}]}>
      <RTLHorizontalFlatlist
        data={brands}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <EmptyComponent width={24} />}
        ListFooterComponent={() => <EmptyComponent width={12} />}
        ItemSeparatorComponent={() => <EmptyComponent width={12} />}
        renderItem={({item}) => {
          return (
            <Pressable onPress={()=>navigation.navigate("BrandProduct",{brandName:item.name})}>
            <View style={[style.brandsWrapper]}>
              <Image
                source={item.brand}
                resizeMode="cover"
                style={{height: 60, borderRadius: 10, width: 60}}
                />
            </View>
                </Pressable>
          );
        }}
        showsHorizontalScrollIndicator={false}
        listRef={flatListRef}
      />
    </View>
  );
};

export default Brands;
