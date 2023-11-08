import {Dimensions, StyleSheet} from 'react-native';
import {colors} from "../../constants/colors"

const {width} = Dimensions.get('window');
export const style= StyleSheet.create({
    brandsContainer:{
        width,
        height:100,
    },
    brandsWrapper:{
        height:80,
        width:80,
        elevation:5,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    }
})