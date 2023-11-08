import {View, Text, ScrollView, Dimensions} from 'react-native';
import Header from '../../components/Header/Header';
import React from 'react';
import Brands from '../../components/Brands/Brands';
import Product from '../../components/Product/Product';
import {images} from '../../constants/images';
import {FlatList} from 'react-native';

const BrandProduct = ({route, navigation}) => {
  const {width} = Dimensions.get('window');
  const {brandName} = route.params;
  const products = [
    {id: 1, img: images.product1, name: '7UP'},
    {id: 2, img: images.product1, name: 'MARINDA'},
    {id: 2, img: images.product1, name: 'MARINDA'},
  ];
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <Header text={brandName} />
      <Brands navigation={navigation} marginTop={5} />
      <View style={{marginBottom: 20}}>
        <FlatList
          scrollEnabled={false}
          data={products}
          style={{
            marginHorizontal: 5,
          }}
          renderItem={({item, index}) => (
            <Product
              item={item}
              index={index}
              length={products.length}
              style={{
                // marginLeft:index===0 || Number.isInteger(index/2)?6:"",
                borderLeftWidth:
                  index === 0 || Number.isInteger(index / 2) ? 2 : 0,
                borderBottomWidth:
                  index === products.length - 1 || index === products.length - 2
                    ? 2
                    : 0,
                width: width / 2 - 5,
                // marginRight:!Number.isInteger(index/2)?5:0
              }}
              bottomWidth={(width / 2 - 5) / 2 - 12}
              height={200}
              width={'90%'}
            />
          )}
          numColumns={2}
          keyExtractor={(_, index) => index}
        />
      </View>
    </ScrollView>
  );
};

export default BrandProduct;
