import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function DrawerContent({}) {
  return (
    <ScrollView style={styles.parentContainer} bounces={false} >
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

      <Link to={{screen: 'Categories'}}>
        <View style={styles.DrawerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icons/categories.png')}
          />
          <Text style={styles.buttonText}>{'All Categories'}</Text>
        </View>
      </Link>

      <Link to={{screen: 'Categories'}}>
        <View style={styles.DrawerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icons/store.png')}
          />
          <Text style={styles.buttonText}>{'Trending Stores'}</Text>
        </View>
      </Link>

      <Link to={{screen: 'Notifications'}}>
        <View style={styles.buttonWithSeperator}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icons/more.png')}
          />
          <Text style={styles.buttonText}>{'More on Flipkart'}</Text>
        </View>
      </Link>

      <Link to={{screen: 'Notifications'}}>
        <View style={styles.buttonWithSeperator}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icons/translate.png')}
          />
          <Text style={styles.buttonText}>{'Choose Language'}</Text>
        </View>
      </Link>

      <Link to={{screen: 'Cart'}}>
        <View style={styles.DrawerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icons/mycart.png')}
          />
          <Text style={styles.buttonText}>{'My Cart'}</Text>
        </View>
      </Link>

      <Link to={{screen: 'Account'}}>
        <View style={styles.DrawerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icons/account.png')}
          />
          <Text style={styles.buttonText}>{'My Account'}</Text>
        </View>
      </Link>

      <Link to={{screen: 'Notifications'}}>
        <View style={styles.buttonWithSeperator}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icons/notification.png')}
          />
          <Text style={styles.buttonText}>{'My Notifications'}</Text>
        </View>
      </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#2874f0',
    flexBasis: 90,
    flexGrow: 0,
    padding: 17,
    marginBottom: 3,
  },
  headerContent: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginLeft: 100,
    paddingTop: 30,
  },
  homeLogo: {
    height: 21,
    width: 21,
    marginRight: 15,
  },
  appLogo: {
    height: 25,
    width: 25,
    marginLeft: 140,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Helvetica',
    justifyContent: 'center',
  },
  DrawerButton: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 5,
    width: width,
    height: height / 25,
  },
  buttonIcon: {
    height: 17,
    width: 17,
  },
  buttonText: {
    marginHorizontal: 15,
    fontFamily: 'Helvetica',
    justifyContent: 'center',
  },
  buttonWithSeperator: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 5,
    width: width,
    height: height / 25,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
});
