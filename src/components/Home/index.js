import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import listData from '../../utils/CategoriesList';
import {SliderBox} from 'react-native-image-slider-box';
import ImgList from '../../utils/CarouselList';
import ModalScreen from '../SearchScreen';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function Home({navigation}) {
  const renderList = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.listBox}
        onPress={() => navigation.navigate('List')}>
        <Image style={styles.listIcon} source={item.img} />
        <Text style={styles.listTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const [modalToggle, setModalToggle] = useState(false);
  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.Container}>
        <View style={styles.fixHeader}>
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
              <TouchableOpacity
                onPress={() => navigation.navigate('Notifications')}>
                <Image
                  style={styles.bellIcon}
                  source={require('../../assets/icons/bell_head.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Image
                  style={styles.cartIcon}
                  source={require('../../assets/icons/cart_head.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Modal visible={modalToggle}>
            <ModalScreen
              modalToggle={modalToggle}
              setModalToggle={setModalToggle}
            />
          </Modal>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.searchBox}
            onPress={() => setModalToggle(!modalToggle)}>
            <Image
              style={styles.searchLogo}
              source={require('../../assets/icons/search.png')}
            />
            <Text style={styles.searchIn}>
              Search for Products, Brands and More{' '}
            </Text>
            <Image
              style={styles.voiceLogo}
              source={require('../../assets/icons/voice.png')}
            />
          </TouchableOpacity>
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
              sliderBoxHeight={180}
              resizeMode="contain"
              dotStyle={styles.carouselIndicator}
              dotColor="#000000"
              inactiveDotColor="#00000077"
            />
          </View>

          <View style={styles.discount}>
            <Text style={styles.discountHead}>{'Discounts for You'}</Text>
            <View style={styles.rowContain}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={require('../../assets/images/card1.png')}
                />
                <Text style={styles.cardText}>{'Noise Smart Watches'}</Text>
                <Text style={styles.discountRate}>{'Min. 30% Off'}</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={require('../../assets/images/card2.png')}
                />
                <Text style={styles.cardText}>{'Full HD+ Mobiles'}</Text>
                <Text style={styles.discountRate}>{'Min. 10% Off'}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContain}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={require('../../assets/images/card3.png')}
                />
                <Text style={styles.cardText}>
                  {'Smart Watch Screenguards'}
                </Text>
                <Text style={styles.discountRate}>{'Min. 40% Off'}</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={require('../../assets/images/card4.png')}
                />
                <Text style={styles.cardText}>
                  {'Clothing And Accessories'}
                </Text>
                <Text style={styles.discountRate}>{'Min. 70% Off'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.discount}>
            <Text style={styles.discountHead}>{'Discounts for You'}</Text>
            <View style={styles.rowContain}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={require('../../assets/images/card1.png')}
                />
                <Text style={styles.cardText}>{'Noise Smart Watches'}</Text>
                <Text style={styles.discountRate}>{'Min. 30% Off'}</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={require('../../assets/images/card2.png')}
                />
                <Text style={styles.cardText}>{'Full HD+ Mobiles'}</Text>
                <Text style={styles.discountRate}>{'Min. 10% Off'}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContain}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={require('../../assets/images/card3.png')}
                />
                <Text style={styles.cardText}>
                  {'Smart Watch Screenguards'}
                </Text>
                <Text style={styles.discountRate}>{'Min. 40% Off'}</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('List')} style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={require('../../assets/images/card4.png')}
                />
                <Text style={styles.cardText}>
                  {'Clothing And Accessories'}
                </Text>
                <Text style={styles.discountRate}>{'Min. 70% Off'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#2673F0',
  },
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  fixHeader: {
    backgroundColor: '#2673F0ff',
    flexBasis:101,
    paddingTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    flexBasis:50,
  },
  iconLeftComponent: {
    flexDirection: 'row',
    flexBasis: Platform.OS === 'ios' ? 290 : 320,
  },
  iconRightComponent: {
    flexDirection: 'row',
  },
  menuIcon: {
    height: 20,
    width: 50,
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
  searchIn: {
    width: (screenWidth * 3) / 4,
    alignSelf: 'center',
    height: 30,
    padding: 6,
    color: '#CCCCCC',
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
  listView: {
    backgroundColor: '#FFFFFF',
  },
  listBox: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 3,
    paddingHorizontal: 6,
  },
  listIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  listTitle: {
    fontSize: 10,
    fontWeight: '500',
    color: '#000000',
  },
  scrollScreen: {},
  loot: {
    resizeMode: 'contain',
    width: screenWidth,
    height: Platform.OS === 'ios' ? screenHeight / 5 : screenHeight / 4,
  },
  carouselBox: {
    // marginBottom: Platform.OS === 'android' ? 5 : 3,
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
    marginVertical: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.6,
    elevation: 6,
  },
  discountHead: {
    color: '#000000',
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
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
    height: screenWidth / 2.4,
    width: screenWidth / 2.4,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 12,
    fontFamily: 'Raleway',
    fontWeight: '500',
    color: '#000000',
  },
  discountRate: {
    color: '#337f37',
    fontWeight: '500',
    fontFamily: 'Museo',
  },
});
