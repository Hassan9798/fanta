import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

// forced : apply both on ltr and rtl
// ltr : only apply on ltr and not rtl
// default : only apply on rtl

const RTLText = ({children, forced, ltr, ...props}) => {
  const direction = useSelector(state => state.languageSupport.direction);

  return (
    <Text
      {...props}
      style={[
        props.style,
        (direction === 'rtl' && !ltr) || (ltr && direction !== 'rtl') || forced
          ? styles.text
          : {},
      ]}>
      {children}
    </Text>
  );
};

export default RTLText;
