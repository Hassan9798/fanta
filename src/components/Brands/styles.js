import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export const style= StyleSheet.create({
    brandsContainer:{
        width,
        height:100
        // paddingLeft:24,
    },
    brandsWrapper:{
        height:80,
        width:80,
        elevation:5,
        backgroundColor:"#FFFFFF",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    }
})