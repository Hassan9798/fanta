import {View} from 'react-native';
import {useSelector} from 'react-redux';

const RTLView = ({children, ...props}) => {
  const direction = useSelector(state => state.languageSupport.direction);
  return (
    <View
      {...props}
      style={[
        props.style,
        {
          flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
        },
      ]}>
      {children}
    </View>
  );
};

export default RTLView;
