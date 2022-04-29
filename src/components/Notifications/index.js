import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function Notifications({navigation}) {
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{'Notifications'}</Text>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.emptyBox}>
          <Image
            style={styles.boxImg}
            source={require('../../assets/images/notificationpage.png')}
          />
          <Text style={styles.emptySubhead}>{'No notification yet'}</Text>
          <Text style={styles.emptyMessage}>
            {'Simply browse, create a wishlist'}
            {'\n'}
            {'or make a purchase'}
          </Text>
          <TouchableOpacity
          style={styles.continueButton}
            activeOpacity={1}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>{'Continue Shopping'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
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
  emptyBox: {
    height: (screenHeight * 8) / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImg: {
    height: screenHeight / 6,
    width: screenHeight / 6,
  },
  emptySubhead: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#999999',
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
  continueButton: {
    margin: 10,
    backgroundColor: '#1669EF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Helvetica',
  },
});
