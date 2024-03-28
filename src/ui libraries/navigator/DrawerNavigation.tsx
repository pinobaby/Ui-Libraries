import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';
import Tab2 from '../screens/tabs/Tab2';
import Tab1 from '../screens/tabs/Tab1';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Tab1" component={Tab1} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation