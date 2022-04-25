import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBarHeightContext, createBottomTabNavigator, useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Categories from '../Categories';
import Notifications from '../Notifications';
import Account from '../Account';
import Cart from '../Cart';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle:{
        height: 68,
        paddingTop: 3,
      }
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
          tabBarLabelStyle: {
            fontWeight: '600',
          },
          tabBarInactiveTintColor: '#3F3F3F',
          tabBarActiveTintColor: '#027CD5',
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
          tabBarLabelStyle: {
            fontWeight: '600',
          },
          tabBarInactiveTintColor: '#3F3F3F',
          tabBarActiveTintColor: '#027CD5',
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
          tabBarLabelStyle: {
            fontWeight: '600',
          },
          tabBarInactiveTintColor: '#3F3F3F',
          tabBarActiveTintColor: '#027CD5',
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
          tabBarLabelStyle: {
            fontWeight: '600',
          },
          tabBarInactiveTintColor: '#3F3F3F',
          tabBarActiveTintColor: '#027CD5',
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
          tabBarLabelStyle: {
            fontWeight: '600',
          },
          tabBarInactiveTintColor: '#3F3F3F',
          tabBarActiveTintColor: '#027CD5',
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
