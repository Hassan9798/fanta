import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const Home = ({navigation}) => {
    console.log("screen")
  return (
    <View style={{flex:1,backgroundColor:"red"}}>
        <Text style={{color:'black',paddingTop:50,fontSize:30}}>
        Home
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
        <Text style={{color:'black',paddingTop:50,fontSize:30}}>
        cart
        </Text>
        </TouchableOpacity>
    </View>
)
}

export default Home