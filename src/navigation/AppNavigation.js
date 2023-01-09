import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import AddTaskScreen from '../features/app/tasks/screens/AddTaskScreen';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={TabNavigation} />
      <Drawer.Screen name="AddTask" component={AddTaskScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
