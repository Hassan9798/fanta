import { View, Text, FlatList } from 'react-native'
import React, { useRef } from 'react'
import ProductCard from './Card/ProductCard'
import EmptyComponent from './EmptyComponent'

const HomeSlider = ({data,marginTop,bottomText,topText,slider1}) => {
    const categoriesRef =useRef(0)
  return (
    <View style={{marginTop:marginTop}}>
    <FlatList
    data={data}
    showsHorizontalScrollIndicator={false}
    ref={categoriesRef}
    horizontal
    keyExtractor={(_, index) => index}
    ListHeaderComponent={()=><EmptyComponent width={10}/>}
    renderItem={({item,index})=>
     index === 0 && slider1 === true ? (
    <ProductCard img={item.img} />
    ) : (
      <ProductCard img={item.img} height={240} width={200} bottomText={ bottomText && item.name} topText={topText && item.name}/>
    )
    }
    />
  </View>
  )
}

export default HomeSlider