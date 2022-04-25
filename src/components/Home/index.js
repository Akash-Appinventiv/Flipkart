import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import listData from '../../utils/CategoriesList';
import {SliderBox} from 'react-native-image-slider-box';
import ImgList from '../../utils/CarouselList';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const renderList = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.listBox}>
      <Image style={styles.listIcon} source={item.img} />
      <Text style={styles.listTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default function Home({navigation}) {
  let tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.Container}>
      <View style={styles.fixHeader} >
        <View style={styles.iconContainer}>
          <View style={styles.iconLeftComponent}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.menuIcon}
                source={require('../../assets/icons/menu.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.headerIcon}
              source={require('../../assets/icons/flipkart_logo.png')}
            />
          </View>
          <View style={styles.iconRightComponent}>
            <Image
              style={styles.bellIcon}
              source={require('../../assets/icons/bell_head.png')}
            />
            <Image
              style={styles.cartIcon}
              source={require('../../assets/icons/cart_head.png')}
            />
          </View>
        </View>
        <View style={styles.searchBox}>
          <Image
            style={styles.searchLogo}
            source={require('../../assets/icons/search.png')}
          />
          <TextInput
            style={{width: '80%'}}
            placeholder="Search for Products, Brands and More"
          />
          <Image
            style={styles.voiceLogo}
            source={require('../../assets/icons/voice.png')}
          />
        </View>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={listData}
          keyExtractor={item => item.title}
          renderItem={renderList}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.scrollScreen}>
        <Image
          style={styles.loot}
          source={require('../../assets/images/loot.png')}
        />
        <View style={styles.carouselBox}>
          <SliderBox
            images={ImgList}
            autoplay={true}
            circleLoop
            sliderBoxHeight={175}
            resizeMode="contain"
            dotStyle={styles.carouselIndicator}
            dotColor="#000000"
            inactiveDotColor="#00000077"
          />
        </View>
        <View style={styles.discount}>
          <Text style={styles.discountHead}>{'Discounts for You'}</Text>
          <View style={styles.rowContain}>
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
              <Image
                style={styles.cardImg}
                source={require('../../assets/images/card1.png')}
              />
              <Text style={styles.cardText}>{'Noise Smart Watches'}</Text>
              <Text style={styles.discountRate}>{'Min. 30% Off'}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
              <Image
                style={styles.cardImg}
                source={require('../../assets/images/card2.png')}
              />
              <Text style={styles.cardText}>{'Full HD+ Mobiles'}</Text>
              <Text style={styles.discountRate}>{'Min. 10% Off'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContain}>
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
              <Image
                style={styles.cardImg}
                source={require('../../assets/images/card3.png')}
              />
              <Text style={styles.cardText}>{'Smart Watch Screenguards'}</Text>
              <Text style={styles.discountRate}>{'Min. 40% Off'}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
              <Image
                style={styles.cardImg}
                source={require('../../assets/images/card4.png')}
              />
              <Text style={styles.cardText}>{'Clothing And Accessories'}</Text>
              <Text style={styles.discountRate}>{'Min. 70% Off'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  fixHeader: {
    backgroundColor: '#2874f0',
    flexBasis: 140,
    paddingTop: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    flexBasis: 55,
  },
  iconLeftComponent: {
    flexDirection: 'row',
    flexBasis: 280,
  },
  iconRightComponent: {
    flexDirection: 'row',
  },
  menuIcon: {
    height: 25,
    width: 55,
    resizeMode: 'contain',
    top: 5,
  },
  bellIcon: {
    height: 20,
    width: 45,
    resizeMode: 'contain',
    top: 5,
  },
  cartIcon: {
    height: 28,
    width: 40,
    resizeMode: 'contain',
    top: 1,
  },
  headerIcon: {
    height: 35,
    width: 85,
    resizeMode: 'contain',
  },
  searchBox: {
    backgroundColor: '#ffffff',
    height: 35,
    borderRadius: 2,
    marginHorizontal: 10,
    alignContent: 'center',
    flexDirection: 'row',
  },
  searchLogo: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  voiceLogo: {
    height: 35,
    width: 35,
    alignSelf: 'center',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  listBox: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 3,
    paddingHorizontal: 6,
  },
  listIcon: {
    height: 43,
    width: 43,
  },
  listTitle: {
    fontSize: 8,
    fontWeight: '500',
  },
  scrollScreen: {},
  loot: {
    resizeMode: 'contain',
    width: screenWidth,
    height: screenHeight / 5,
  },
  carouselBox: {
    marginBottom: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.3,
  },
  carouselIndicator: {
    width: 7,
    height: 7,
  },
  discount: {
    backgroundColor: '#CEE5F6',
    padding: 8,
    alignItems: 'center',
  },
  discountHead: {
    fontSize: 15,
    fontWeight: '500',
    width: '100%',
    margin: 5,
    marginVertical: 8,
  },
  rowContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    margin: 4,
    borderRadius: 4,
    borderColor: '#DDDDDD',
    borderWidth: 1,
  },
  cardImg: {
    height: 160,
    width: 160,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 12,
  },
  discountRate: {
    color: '#337f37',
    fontWeight: '500',
  },
});
