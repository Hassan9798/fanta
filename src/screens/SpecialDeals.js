import { View, Text, FlatList, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Product from '../components/Product/Product'
import { images } from '../constants/images';
import Header from '../components/Header/Header';

const {width} = Dimensions.get('window');
const SpecialDeals = () => {
  const deals=[
    {id:1,img:images.specialDeals,name:"7UP"},
    {id:2,img:images.specialDeals,name:"MARINDA"},
    {id:2,img:images.specialDeals,name:"MARINDA"},
  ]
  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}}>
     <Header text={"Special Deals"} color='#000'/>
     <View style={{marginBottom:20,marginTop:10}}>
     <FlatList
     data={deals}
     style={{
      marginHorizontal:5,
     }}
     renderItem={({item,index})=>
     <Product 
     item={item} 
     index={index} 
     length={deals.length} 
     style={{
      borderWidth:2,
      paddingTop:10,
      // // marginLeft:index===0 || Number.isInteger(index/2)?6:"",
      // borderLeftWidth:index===0 || Number.isInteger(index/2)?2:0,
      borderBottomWidth:index===deals.length-1 ?2:0,
      // // width:(width/2)-5,
      // // marginRight:!Number.isInteger(index/2)?5:0
      }
      }
      bottomWidth={(width/2)-15}
      height={200}
      width={"98%"}
     />
    }
    
    numColumns={1}
    keyExtractor={(_,index)=>index}
     /> 
     
     </View>
    </ScrollView>
  )
}

export default SpecialDeals