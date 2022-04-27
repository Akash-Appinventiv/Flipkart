import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import {
  BottomTabBarHeightContext,
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Categories from '../Categories';
import Notifications from '../Notifications';
import Account from '../Account';
import Cart from '../Cart';

const {height: screenHeight} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? screenHeight / 12 : screenHeight / 15,
          paddingTop: 3,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontWeight: '600',
          marginBottom: Platform.OS === 'android' ? 10 : 0,
        },
        tabBarInactiveTintColor: '#3F3F3F',
        tabBarActiveTintColor: '#027CD5',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('../../assets/icons/home_active.png')
                  : require('../../assets/icons/home.png')
              }
            />
          ),
          // tabBarInactiveTintColor: '#3F3F3F',
          // tabBarActiveTintColor: '#027CD5',
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('../../assets/icons/category_active.png')
                  : require('../../assets/icons/category.png')
              }
            />
          ),
          // tabBarInactiveTintColor: '#3F3F3F',
          // tabBarActiveTintColor: '#027CD5',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('../../assets/icons/bell_active.png')
                  : require('../../assets/icons/bell.png')
              }
            />
          ),
          // tabBarInactiveTintColor: '#3F3F3F',
          // tabBarActiveTintColor: '#027CD5',
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('../../assets/icons/user_active.png')
                  : require('../../assets/icons/user.png')
              }
            />
          ),
          // tabBarInactiveTintColor: '#3F3F3F',
          // tabBarActiveTintColor: '#027CD5',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('../../assets/icons/cart_active.png')
                  : require('../../assets/icons/cart.png')
              }
            />
          ),
          // tabBarInactiveTintColor: '#3F3F3F',
          // tabBarActiveTintColor: '#027CD5',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
  },
});
