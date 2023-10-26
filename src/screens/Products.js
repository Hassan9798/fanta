import {View, Text, Button} from 'react-native';
import React from 'react';

const Products = ({navigation}) => {
  return (
    <View>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button
        title="Brand Products"
        onPress={() => navigation.navigate('BrandProducts')}
      />
    </View>
  );
};

export default Products;
