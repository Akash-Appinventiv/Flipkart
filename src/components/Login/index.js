import {Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.parent}>
      <View style={styles.header}>
        {/* <Text style={styles.headerTitle}>{'Choose Language'}</Text> */}
        <Image style={styles.headLogo} source={require('../../assets/images/flipkart-logo.png')} />
      </View>
      <TouchableOpacity onPress={()=>navigation.replace('Drawer')}>
          <Text>
              {'Next Page'}
          </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#1669EF',
  },
  parent: {
    backgroundColor: '#0f0',
  },
  header: {
    backgroundColor: '#1669EF',
    height: height / 15,
    justifyContent: 'flex-end',
    padding: 15,
    marginBottom: 5,
  },
  headLogo: {
      height: 50,
      width: 100,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Raleway',
    fontWeight: '600',
  },
});
