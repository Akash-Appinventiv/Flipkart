import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import StackNavigator from '../StackNavigator';
import Notifications from '../Notifications';
import DrawerContent from '../DrawerContent';
import TabNavigator from '../TabNavigator';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (

      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
        }}
        drawerContent={() => <DrawerContent />}
      >
        <Drawer.Screen
          name="Stack"
          component={StackNavigator}
          options={{title: 'Home'}}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: 'Notifications',
        }}
        />
      </Drawer.Navigator>

  );
}