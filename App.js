import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNav from './src/components/DrawerNav'
import { NavigationContainer } from '@react-navigation/native'
import RouteNav from './src/components/Route'



export default function App() {
  return (
    <NavigationContainer>
      <RouteNav/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})