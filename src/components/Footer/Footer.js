import {View, Image, StyleSheet} from 'react-native';
import {useRef} from 'react';
import {images} from '../../constants/images';
import EmptyComponent from '../EmptyComponent';
import RTLHorizontalFlatlist from '../RTLComponents/HorizontalFlatlist';

export default function Footer() {
  const faltListRef = useRef(0);
  const arr = [images.footerImg1, images.footerImg2];
  return (
    <View style={style.container}>
      <RTLHorizontalFlatlist
        data={arr}
        showsHorizontalScrollIndicator={false}
        listRef={faltListRef}
        keyExtractor={(_, index) => index}
        ListHeaderComponent={() => <EmptyComponent width={20} />}
        ListFooterComponent={() => <EmptyComponent width={20} />}
        ItemSeparatorComponent={() => <EmptyComponent width={20} />}
        renderItem={({item}) => (
          <Image source={item} resizeMode="cover" height={350} width={275} />
        )}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(178, 178, 178, 0.20)',
    flexDirection: 'row',
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
