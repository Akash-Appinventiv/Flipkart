import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator'
import ProductList from '../ProductList';

const Stack = createNativeStackNavigator()

export default function StackNavigator({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='TabNav' component={TabNavigator}/>
        <Stack.Screen name='List' component={ProductList}/>
    </Stack.Navigator>
  )
}
