import { View, Text, ScrollView } from 'react-native'
import Header from '../../components/Header/Header';
import React from 'react'
import Brands from '../../components/Brands/Brands';
import Product from '../../components/Product/Product';
import { images } from '../../constants/images';
import { FlatList } from 'react-native';

const BrandProduct = ({route,navigation}) => {
  const {brandName}=route.params;
  const products=[
    {id:1,img:images.product1,name:"7UP"},
    {id:2,img:images.product1,name:"MARINDA"},
    {id:2,img:images.product1,name:"MARINDA"},
  ]
  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}}>
     <Header text={brandName}/>
     <Brands navigation={navigation} marginTop={5}/>
     <View style={{marginBottom:20}}>
     <FlatList
     data={products}
     renderItem={({item,index})=>
     <Product 
     item={item} 
     index={index} 
     length={products.length} 
     style={{
      marginLeft:index===0 || Number.isInteger(index/2)?6:"",
      borderLeftWidth:index===0 || Number.isInteger(index/2)?2:0,
      borderBottomWidth:index===products.length-1 ||index === products.length-2?2:0,
      marginRight:!Number.isInteger(index/2)?5:0
      }
      }
      height={220}
      width={180}
     />
    }
    
    numColumns={2}
    keyExtractor={(_,index)=>index}
     /> 
     
     </View>
    </ScrollView>
  )
}

export default BrandProduct