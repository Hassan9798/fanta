import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { images} from '../../constants/images'
import { useRef } from 'react'
import { style } from './styles'
import EmptyComponent from '../EmptyComponent'
const Brands = ({navigation,marginTop}) => {
    const flatListRef=useRef(0)
    const brands=[
        {id:1,brand:images.UPBrand,name:"7UP"},
        {id:2,brand:images.dewBrand,name:"DEW"},
        {id:3,brand:images.liptonBrand,name:"LIPTON"},
        {id:5,brand:images.shaniBrand,name:"SHANI"},
        {id:6,brand:images.marindaBrand,name:"MARINDA"},
        {id:7,brand:images.liptonBrand,name:"LIPTON"},
        {id:8,brand:images.shaniBrand,name:"SHANI"},
        {id:9,brand:images.marindaBrand,name:"MARINDA"},
        ];
        return(
        <View style={[style.brandsContainer,{marginTop:marginTop}]}>
          <FlatList
          data={brands}
          keyExtractor={(item)=>item.id}
          horizontal
          ListHeaderComponent={()=><EmptyComponent width={24}/>}
          ListFooterComponent={()=><EmptyComponent width={12}/>}
          ItemSeparatorComponent={()=><EmptyComponent width={12}/>}
          renderItem={({item,index})=>{
            return(
              <Pressable onPress={()=>navigation.navigate("BrandProduct",{brandName:item.name})}>
            <View style={[style.brandsWrapper]}>
              <Image source={item.brand} resizeMode='cover' style={{height:60,borderRadius:10,width:60}} />
            </View>
              </Pressable>
          )}}
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          />
       </View>
        );
}

export default Brands