import {TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const IconCircleButton = ({icon}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default IconCircleButton;
