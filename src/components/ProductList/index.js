import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Products from '../../utils/ProductList';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function ProductList({navigation}) {
  const renderList = ({item}) => {
    return (
      <View style={styles.listCard}>
        <Image style={styles.listImg} source={item.img} />
        <View style={styles.listdetails}>
          <Text style={styles.listtitle}>{item.title}</Text>
          <View style={styles.rating}>
              <Image style={styles.star} source={require('../../assets/images/starrated.png')} />
              <Image style={styles.star} source={require('../../assets/images/starrated.png')} />
              <Image style={styles.star} source={require('../../assets/images/starrated.png')} />
              <Image style={styles.star} source={require('../../assets/images/starrated.png')} />
              <Image style={styles.star} source={require('../../assets/images/star.png')} />
          </View>
          <Text>
            <Text style={styles.mrp}>{item.original_price}</Text>
            <Text style={styles.price}> {item.current_price}</Text>
            <Text style={styles.discount}> {item.discount}</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.parent}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.return}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../../assets/icons/back.png')}
            />
            <Text numberOfLines={2} style={styles.headerTitle}>
              {'Products'}
            </Text>
          </TouchableOpacity>
        </View>
          <FlatList
            data={Products}
            keyExtractor={item => item.title}
            renderItem={renderList}
            bounces={false}
            contentContainerStyle={{justifyContent: 'flex-end',}}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#1669EF',
    flex:1,
  },
  parent: {
    backgroundColor: '#EEEEEE',
    flex:1,
    // marginBottom: Platform.OS === 'android'? 95: 60,
  },
  header: {
    backgroundColor: '#1669EF',
    height: Platform.OS === 'ios' ? screenHeight / 20 : screenHeight / 15,
    justifyContent: 'flex-end',
    paddingVertical: 5,
  },
  return: {
    flexDirection: 'row',
    width: screenWidth / 3,
    marginBottom: 8,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Raleway',
    fontWeight: '500',
    marginHorizontal: 5,
  },
  back: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  listCard: {
    backgroundColor: '#FFFFFF',
    height: (screenHeight * 5) / 22,
    padding: 20,
    borderColor: '#EEE',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listImg: {
    resizeMode: 'contain',
    height: screenHeight / 6,
    width: (screenWidth * 5) / 16,
  },
  listdetails: {
    width: (screenWidth * 3) / 5,
  },
  listtitle: {
    color: '#000000',
    fontFamily: 'Helvetica',
    fontWeight: '400',
    marginBottom: 10,
  },
  rating: {
      flexDirection: 'row',
      marginBottom: 10,
  },
  star: {
      height: 15,
      width: 15,
      resizeMode: 'contain'
  },
  price: {
    color: '#000000',
    fontFamily: 'Museo',
    fontWeight: '700',
  },
  mrp: {
    color: '#777',
    fontFamily: 'Museo',
    fontSize: 12,
    fontWeight: '700',
    textDecorationLine: 'line-through',
  },
  discount: {
    color: '#12B042',
    fontFamily: 'Museo',
    fontWeight: '500',
    fontSize: 14,
  },
});
