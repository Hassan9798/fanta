import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons, images } from '../constants/images'
import AppButton from './AppButton'

const Cart = ({open,setOpen}) => {
   
  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => 
        setOpen(!open)
      }>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <EmptyCart onPress={()=>setOpen(!open)}/>
        </View>
      </View>
    </Modal>
  </View>
  )
}
const EmptyCart=({onPress})=>{
  return(
  <View style={{width:"100%"}}>
    <Pressable onPress={onPress}>
          <View style={{alignItems:"flex-end",marginBottom:20}} >
            <Image source={icons.closeIcon} style={{height:44,width:44}}/>
          </View>
          <Image source={images.emptyCart} resizeMode='cover' style={{height:354,width:354}}/>
          </Pressable>
          <View style={styles.textView} >
            <Text style={styles.textStyle1}>
            NOTHING TO SEE HERE
            </Text>
            <Text style={styles.textStyle2}>
            YOUR CART IS EMPTY
            </Text>
          </View>
         <AppButton text='OKAY' onPress={onPress}/>
  </View>
  );
}
export default Cart

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex:1,
    width:"100%",
    marginTop: 100,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    alignItems:'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  textView:{
    marginTop:50,
    alignItems:'center',
    gap:14,marginBottom:40
  },
  textStyle1: {
    color: '#184A92',
    fontFamily:"Montreal",
    fontSize:30,
  },
  textStyle2: {
    color: '#B2B2B2',
    fontFamily:"Montreal",
    fontSize:20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})