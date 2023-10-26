import {View, Text, Button} from 'react-native';
import React from 'react';

const BrandProducts = ({navigation}) => {
  return (
    <View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default BrandProducts;
