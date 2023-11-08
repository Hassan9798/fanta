import { View, Text, Image, StyleSheet } from 'react-native'
import {fonts} from "../../constants/fonts"
import RTLText from '../RTLComponents/RTLText'

const ProductCard = ({
    topText,
    bottomText,
    img,
    width,
    height
}) => {
  return (
    <View style={style.container}>
        {topText && <RTLText style={style.topText}>{topText}</RTLText>}
     <Image source={img} resizeMode='cover' style={{width: width??275,height: height??350}}  />
     {bottomText && <RTLText style={[style.bottomtext]}>{bottomText}</RTLText>}
    </View>
  )
}
const style = StyleSheet.create({
    bottomtext:{
        textAlign:'center',
        fontFamily:fonts.montreal,
        fontSize:30,
        color:'#B2B2B2',
    },
    topText:{
        textAlign:'center',
        fontFamily:fonts.montreal,
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