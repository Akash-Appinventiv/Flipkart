import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

export default function Account({navigation}) {
  return (
    <ScrollView bounces={false}>
      <View style={styles.header}>
        <View style={styles.headSection}>
          <Text style={styles.headerText}>{'My Account'}</Text>
          <Image
            style={styles.search}
            source={require('../../assets/icons/searchwhite.png')}
          />
        </View>
        <View style={styles.profileImage}>
          <Image
            style={styles.profilePic}
            source={require('../../assets/icons/maleprofile.png')}
          />
          <Text style={styles.profileChoice}>or</Text>
          <Image
            style={styles.profilePic}
            source={require('../../assets/icons/femaleprofile.png')}
          />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.Login} >
          <View style={styles.UsernameSection}>
            <View style={styles.Username}>
            <Text style={styles.UsernameText}>
              {'Enter Full Name'}
            </Text>
            </View>
            <Text style={styles.phoneNum}>
              {'91-9650502594'}
            </Text>
          </View>
          <Image style={styles.edit} source={require('../../assets/icons/edit.png') }/>
        </TouchableOpacity>

      </View>
      <View style={styles.card}>
        <View style={styles.headerContain}>
          <Text style={styles.cardHead}>{'Flipkart Plus'}</Text>
        </View>
        <View style={styles.textContain}>
          <Text style={styles.cardlink}>{'VIEW PLUS ZONE'}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.headerContain}>
          <Text style={styles.cardHead}>{'My Orders'}</Text>
        </View>
        <View style={styles.textContain}>
          <Text style={styles.cardlink}>{'VIEW ALL ORDERS'}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.headerContain}>
          <Text style={styles.cardHead}>{'My Wishlist'}</Text>
        </View>
        <View style={styles.textContain}>
          <Text style={styles.cardlink}>{'VIEW YOUR WISHLIST'}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.headerContain}>
          <Text style={styles.cardHead}>{'Flipkart Pay Later'}</Text>
        </View>
        <View style={styles.textContain}>
          <Text style={styles.cardlink}>{'VIEW DETAILS'}</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: (height * 7) / 22,
    width: width,
    backgroundColor: '#1669EF',
  },
  headSection: {
    marginTop: Platform.OS === 'android' ? 20 : 40,
    marginBottom: 20,
    width: width,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'Raleway',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  search: {
    height: 20,
    width: 20,
  },
  profileImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileChoice: {
    fontFamily: 'Raleway',
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    marginHorizontal: 5,
  },
  profilePic: {
    height: 75,
    width: 75,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 40,
  },
  Login: {
    marginVertical: 15,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    width: width,
  },
  UsernameSection: {
    alignItems: 'center',
  },
  Username: {
    padding: 8,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#FFFFFFaa',
  },
  UsernameText: {
    color: '#FFFFFFaa',
    fontFamily: 'Helvetica',
    fontSize: 18,
  },
  phoneNum: {
    color: '#FFFFFF',
    fontFamily: 'Helvetica',
    fontSize: 13,
    margin: 5,
  },
  edit: {
    height: 25,
    width: 80,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
  },
  card: {
    backgroundColor: '#FFFFFF',
    height: height / 8,
    margin: 10,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.8,
    elevation: 3,
  },
  headerContain: {
    height: '50%',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  cardHead: {
    fontFamily: 'Raleway',
    fontSize: 16,
    color: '#000000',
  },
  textContain: {
    height: '50%',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  cardlink: {
    fontFamily: 'Raleway',
    fontSize: 14,
    textAlign: 'right',
    color: '#1669EF',
  },
});
