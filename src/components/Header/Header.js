import {
  View,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {icons, images} from '../../constants/images';
import {colors} from '../../constants/colors';
import IconCircleButton from '../IconCircleButton/IconCircleButton';
import {useGetTranslation} from '../../languageSupport/translation';
import RTLView from '../RTLComponents/RTLView';
import Cart from '../Cart';

const HeaderImage = ({source}) => {
  return <Image source={source} style={styles.headerImage} />;
};

const Header = ({
  isHome,
  text = 'Product',
  color = colors.blue,
  noCart,
  titleSlider,
  titleData = [],
}) => {
  const [open,setOpen]=useState(false);
  const tl = useGetTranslation();
  const headerImages = [
    images.coldDrinkGif,
    images.headerImage2,
    images.headerImage3,
  ];
  const navigation = useNavigation();
  const flatListRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('');

  const handleDrawer = () => {
    isHome ? navigation.openDrawer() : navigation.navigate('Home');
  };
  const changeItem = () => {
    flatListRef.current.scrollToIndex({
      index: currentIndex < headerImages.length - 1 ? currentIndex + 1 : 0,
      animated: false,
    });
    setCurrentIndex(prevState =>
      prevState < headerImages.length - 1 ? prevState + 1 : 0,
    );
  };
  const changeActiveSliderItem = item => {
    flatListRef.current.scrollToItem({
      item,
      viewPosition: 0.5,
      animated: true,
    });
    setActiveCategory(item);
  };

  useEffect(() => {
    if (titleSlider) setActiveCategory(titleData[0]);
  }, []);
  console.log(open)
  return (
    <View style={styles.container}>
      <RTLView style={styles.top}>
        <Pressable onPress={handleDrawer}>
          <RTLView style={[styles.menu, isHome ? {} : styles.whiteBg]}>
            <Image
              source={isHome ? icons.menu : icons.back}
              style={[styles.menuIcon, isHome ? {} : styles.backIcon]}
            />
            <Text style={[styles.menuText, isHome ? {} : styles.blueText]}>
              {isHome ? tl('menu') : tl('home')}
            </Text>
          </RTLView>
        </Pressable>
        {!noCart && <IconCircleButton icon={icons.cart} onPress={()=>setOpen(true)}/>}
      </RTLView>
      {isHome && (
        <Pressable onPress={changeItem}>
          <FlatList
            ref={flatListRef}
            data={headerImages}
            keyExtractor={(_, index) => index}
            renderItem={({item}) => <HeaderImage source={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            scrollEnabled={false}
          />
        </Pressable>
      )}
      {!isHome && (
        <View style={[styles.content, {backgroundColor: color}]}>
          {!titleSlider ? (
            <Text  numberOfLines={1} style={styles.title}>{text}</Text>
          ) : (
            <FlatList
              data={titleData}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => changeActiveSliderItem(item)}>
                    <Text
                      style={[
                        styles.title,
                        activeCategory !== item ? styles.disabled : {},
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              numColumns={2}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.titleSlider}
              ref={flatListRef}
              scrollEnabled={false}
              pagingEnabled
            />
          )}
        </View>
      )}
      <Cart open={open} setOpen={setOpen}/>
    </View>
  );
};

export default Header;
