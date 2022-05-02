import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SplashScreen({navigation}) {
    setTimeout(()=>{
        navigation.replace('Language')
    },500)
  return (
    <View style={styles.parent}>
        <Image style={styles.logo} source={require('../../assets/icons/flipkart.png') }/>
    </View>
  )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2874f0',
    },
    logo: {
        height: 40,
        width: 40,
    },
})