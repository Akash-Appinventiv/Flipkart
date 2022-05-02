import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator'
import DrawerNav from '../DrawerNav';
import SplashScreen from '../SplashScreen';
import Language from '../Language';
import Login from '../Login';






const Route = createNativeStackNavigator()

export default function RouteNav({navigation}) {
  return (
    <Route.Navigator screenOptions={{headerShown:false}}>
        <Route.Screen name='Splash' component={SplashScreen}/>
        <Route.Screen name='Language' component={Language}/>
        <Route.Screen name='Login' component={Login}/>
        <Route.Screen name='Drawer' component={DrawerNav}/>
        
    </Route.Navigator>
  )
}
