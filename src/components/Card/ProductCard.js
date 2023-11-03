import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ProductCard = ({
    topText,
    bottomText,
    img,
    width,
    height
}) => {
  return (
    <View style={style.container}>
        {topText && <Text style={style.topText}>{topText}</Text>}
     <Image source={img} resizeMode='cover' style={{width: width??275,height: height??350}}  />
     {bottomText && <Text style={[style.bottomtext]}>{bottomText}</Text>}
    </View>
  )
}
const style = StyleSheet.create({
    bottomtext:{
        textAlign:'center',
        fontFamily:'Montreal',
        fontSize:30,
        color:'#B2B2B2',
    },
    topText:{
        textAlign:'center',
        fontFamily:'Montreal',
        fontSize:30,
        color:'#FFF',
        textShadowColor:"gray",
        textShadowRadius:2,
        textShadowOffset:{
            width:1,
            height:1
        }
    },
    container:{
        width:275,
        height:350,
        alignItems:'center',
        justifyContent:'space-evenly'
    }
})

export default ProductCard