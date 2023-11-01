import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../../constants/images'

const Product = ({item,height,width,style}) => {
  const arr=[
    icons.removeIcon,
    icons.addIcon
  ]
  return (
    <View style={[styles.container,style]}>
    <Image source={item.img} resizeMode='cover' style={{height:height??"100%",width:width??"100%"}} />
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.desc}>{"250ml"}</Text>
    <View style={styles.price}>
    <Text style={[styles.desc,{fontFamily:"Inter-600",fontSize:18}]}>{"SR 22.51"}</Text>
    <Text style={[styles.desc,{fontFamily:"Inter-300",color:"#808080",fontSize:18,textDecorationLine:"line-through" }]}>{"SR 22.51"}</Text>
    </View>
    <View style={{flexDirection:'row'}}>
    {arr.map((item,index)=>
    <View style={[styles.bottom,{borderLeftWidth:index === 0?2:0}]}>
      <Image source={item} resizeMode='cover' style={{height:30,width:30}}/>
    </View>
    )  
  }
  </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        borderRightWidth:2,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:"#DEDEDE",
        height:450,
        width:200,
        borderRadius:2,
        paddingLeft:10,
        justifyContent:'flex-start',
        
        // paddingRight:10,
        gap:10
    },
    title:{
      fontFamily:"Montreal",
      fontSize:30,
      color:"black"
    },
    desc:{
      fontFamily:"Inter-300",
      fontSize:20,
      color:"#000"
    },
    price:{
      justifyContent:'center',
      marginBottom:5
    },
    bottom:{
      height:50,
      width:88,
      borderColor:"#DEDEDE",
      borderRightWidth:2,
      borderTopWidth:2,
      borderBottomWidth:2,
      alignItems:'center',
      justifyContent:'center'
    }
})