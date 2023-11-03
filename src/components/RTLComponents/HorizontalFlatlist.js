import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const RTLHorizontalFlatlist = ({listRef, ...props}) => {
  const direction = useSelector(state => state.languageSupport.direction);
  const isInverted = direction === 'rtl';

  return <FlatList horizontal {...props} inverted={isInverted} ref={listRef} />;
};

export default RTLHorizontalFlatlist;
