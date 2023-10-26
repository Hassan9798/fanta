import {TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const IconCircleButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default IconCircleButton;
