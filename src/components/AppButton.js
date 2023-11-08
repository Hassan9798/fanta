import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppButton = ({backgroundColor="#09274A",text="ENTER TEXT",onPress}) => {
  return (
    <Pressable
            style={[styles.button, {backgroundColor:backgroundColor}]}
            onPress={onPress}>
            <Text style={styles.textStyle}>{text}</Text>
          </Pressable> 
  )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        height:70,
        width:"100%",
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
      },
      textStyle:{
        fontSize:22,
        fontFamily:"Montreal",
        color:"#FFF"
      }
})