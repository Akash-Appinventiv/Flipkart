import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';

export default function DrawerContent({}) {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.header}>
        <Link to={{screen: 'Home'}}>
          <View style={styles.headerContent}>
            <Image
              style={styles.homeLogo}
              source={require('../../assets/icons/home-button.png')}
            />
            <Text style={styles.headerTitle}>Home</Text>
            <Image
              style={styles.appLogo}
              source={require('../../assets/icons/flipkart.png')}
            />
          </View>
        </Link>
      </View>
      <Link to={{screen: 'Categories'}}> Categories</Link>
      <Link to={{screen: 'Notifications'}}> Notifications</Link>
      <Link to={{screen: 'Account'}}> Account</Link>
      <Link to={{screen: 'Cart'}}> Cart</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  header: {
    flexDirection:'row',
    backgroundColor: '#2874f0',
    flexBasis: 90,
    flexGrow: 0,
    padding: 17,
  },
  headerContent: {
    alignItems: 'flex-end',
    flexDirection:'row',
    marginLeft:100,
    paddingTop:30
  },
  homeLogo: {
    height: 23,
    width: 23,
    marginRight:10
  },
  appLogo: {
    height: 25,
    width: 25,
    marginLeft:120

  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    
    justifyContent: 'center',
  },
});
