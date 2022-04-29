import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import allCategories from '../../utils/AllCategories';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


export default function Categories({navigation}) {

  const Table = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.categoryCard}>
        <View style={styles.imgstyle}>
          <Image style={styles.image} source={item.img} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{'All Categories'}</Text>
      </View>
    <ScrollView style={styles.parent} showsVerticalScrollIndicator={false} bounces={false}>

      <View style={styles.list}>
        <FlatList
          data={allCategories}
          keyExtractor={item => item.title}
          numColumns={'4'}
          renderItem={Table}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.subHeadContain}>
        <Text style={styles.categorySubHead}>
          {'More on Flipkart'}
        </Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={allCategories}
          keyExtractor={item => item.title}
          numColumns={'4'}
          renderItem={Table}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    height: screenHeight/24,
    width: screenWidth,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    backgroundColor: '#1669EF',
  },
  header: {
    backgroundColor: '#1669EF',
    height: Platform.OS === 'ios' ? screenHeight / 10 : screenHeight / 12,
    justifyContent: 'flex-end',
    padding: 15,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 21,
  },
  list: {
    backgroundColor: '#DDEDF9',
    borderBottomWidth: 1,
    borderColor: '#FFFFFFaa',
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 2 / 3,
  },
  categoryCard: {
    backgroundColor: '#DDEDF9',
    width: screenWidth / 4,
    height: screenHeight * 2 / 15,
    borderBottomWidth: 1,
    borderColor: '#FFFFFFaa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 8 : 0,
  },
  imgstyle: {
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: screenWidth / 6,
    width: screenWidth / 6,
    resizeMode: 'contain',
  },
  image: {
    height: screenWidth / 6,
    width: screenWidth / 6,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 13,
    marginVertical: 3,
    color: '#000000',
  },
  subHeadContain: {
    padding: 8,
    paddingTop: 20,
    backgroundColor: '#EEEEEE33',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
  categorySubHead: {
    fontFamily: 'Raleway',
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
});
