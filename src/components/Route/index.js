import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator'
import DrawerNav from '../DrawerNav';
import SplashScreen from '../SplashScreen';
import ProductList from '../ProductList';




const Route = createNativeStackNavigator()

export default function RouteNav({navigation}) {
  return (
    <Route.Navigator screenOptions={{headerShown:false}}>
        <Route.Screen name='Splash' component={SplashScreen}/>
        <Route.Screen name='Drawer' component={DrawerNav}/>
        
    </Route.Navigator>
  )
}
