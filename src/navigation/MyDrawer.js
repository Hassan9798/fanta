import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator defaultStatus='closed'>
      <Text>Hello Hassan</Text>
  </Drawer.Navigator>
  )
}

export default MyDrawer