import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Cart = ({open,setOpen}) => {
   
  return (
    <View  >

    <Modal
    animationType='slide'
    visible={open}
    onRequestClose={()=>setOpen(!open)}
    style={styles.centeredView}
    >
      <Text>Cart</Text>
    </Modal>
        </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    centeredView: {
        // flex: 0.5,
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
})