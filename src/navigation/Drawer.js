import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import SpecialDeals from '../screens/SpecialDeals';
import CustomDrawer from '../components/Drawer/Drawer';
import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  const direction = useSelector(state => state.languageSupport.direction);
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: direction === 'rtl' ? 'right' : 'left',
        drawerStyle: {
          width: '100%',
        },
      }}>
      <Drawer.Screen component={Home} name="Home" />
      <Drawer.Screen component={SpecialDeals} name="SpecialDeals" />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
