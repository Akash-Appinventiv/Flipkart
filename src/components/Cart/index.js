import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function Cart({navigation}) {
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{'My Cart'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  header: {
    height: Platform.OS === 'ios' ? screenHeight / 10 : screenHeight / 12,
    backgroundColor: '#1669EF',
    justifyContent: 'flex-end',
    padding: 15,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
  },
})