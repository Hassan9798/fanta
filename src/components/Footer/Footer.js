import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { images } from '../../constants/images';
import EmptyComponent from '../EmptyComponent';

export default function Footer() {
    const faltListRef=useRef(0)
    const arr=[
        images.footerImg1,
        images.footerImg2
    ];
  return (
    <View style={style.container}>
     <FlatList
     data={arr}
     showsHorizontalScrollIndicator={false}
    ref={faltListRef}
    horizontal
    keyExtractor={(_, index) => index}
    ListHeaderComponent={()=><EmptyComponent width={20}/>}
     renderItem={({item})=>(
        <Image source={item} resizeMode='cover' height={350} width={275} style={{marginRight:20}} />
     )}
     />
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:"rgba(178, 178, 178, 0.20)",
         flexDirection:'row',
         height:420,
         alignItems:'center',
         justifyContent:'center'
    }
})