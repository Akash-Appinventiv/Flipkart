import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function ModalScreen({modalToggle, setModalToggle}) {
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.return} onPress={() => setModalToggle(!modalToggle)}>
        <Image
            style={styles.searchLogo}
            source={require('../../assets/icons/back.png')}
          />
          <Text style={styles.headerTitle}>{'Go Back'}</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <Image
            style={styles.searchLogo}
            source={require('../../assets/icons/search.png')}
          />
          <TextInput
            autoFocus={true}
            style={styles.searchIn}
            placeholder="Search for Products, Brands and More"
          />
          <Image
            style={styles.voiceLogo}
            source={require('../../assets/icons/voice.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#1669EF',
    height: screenHeight / 7,
    justifyContent: 'flex-end',
    paddingVertical: 7,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.0,
    elevation: 5,
  },
  return: {
      flexDirection: 'row',
      width: screenWidth/3,
      marginBottom: 8,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '600',
    marginHorizontal: 15,
  },
  searchBox: {
    backgroundColor: '#FFFFFF',
    height: 36,
    borderRadius: 2,
    marginTop: 5,
    marginHorizontal: 5,
    width: screenWidth-10,
    alignContent: 'center',
    flexDirection: 'row',
  },
  searchLogo: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  searchIn: {
    width: (screenWidth * 7) / 10,
    alignSelf: 'center',
    height: 30,
    padding: 1,
  },
  voiceLogo: {
    height: 35,
    width: 35,
    alignSelf: 'center',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    position: 'absolute',
    right: 0,
  },
});
