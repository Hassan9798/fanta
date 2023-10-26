import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import SpecialDeals from '../screens/SpecialDeals';
import CustomDrawer from '../components/Drawer/Drawer';

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
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
