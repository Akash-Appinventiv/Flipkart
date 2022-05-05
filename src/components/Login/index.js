import {Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

export default function Login({navigation}) {
  const [phNumber, setPhNumber] = React.useState('');

  const checkNum =()=>{
    const reg = /^\d{10}$/
    return reg.test(phNumber)
  }

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.parent}>
      <View style={styles.header}>
        <Image style={styles.headLogo} source={require('../../assets/images/Login-logo.png')} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <Text style={styles.head}>
            {'Log in for the best experience'}
          </Text>
          <Text style={styles.description}>
            {'Enter your phone number to continue'}
          </Text>

          <View style={styles.inputBox}>
            <Text style={styles.numberHead}>{'Phone Number'}</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.countryCode}>
            <Text>
              {'+91'}
            </Text>
            <Image style={styles.downArrow} source={require('../../assets/icons/down.png')} />
            </TouchableOpacity>
            <TextInput name={phNumber} style={styles.input} keyboardType={'numeric'} 
            onChangeText={(value)=>{
              setPhNumber(value);
            }
              }/>
          </View>
          <TouchableOpacity style={styles.rightButton}>

          <Text style={styles.rightLink}>
            {'Use Email-ID'}
          </Text>
          </TouchableOpacity>

          <Pressable
          disabled={!checkNum}
          onPress={()=>navigation.replace('Drawer')}
          style={({pressed}) => [
            {
              backgroundColor: checkNum
                ? '#BBBBBB'
                : '#FB5908' && (pressed ? '#FC651A' : '#FB5908'),
            },
            styles.button,
          ]}>
          <Text style={styles.nextpage}>{'CONTINUE'}</Text>
        </Pressable>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#2673F0',
  },
  parent: {
    backgroundColor: '#2673F0',
  },
  header: {
    backgroundColor: '#2673F0',
    height: height / 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 5,
  },
  headLogo: {
      height: 50,
      width: 100,
      resizeMode: 'contain',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Raleway',
    fontWeight: '600',
  },
  bodyContainer: {
    backgroundColor: '#FEFEFE',
    height: height * 14 / 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  body: {
    backgroundColor: '#FFFFFF',
    height: height * 12.5 / 15,
    marginTop: 10,
    paddingHorizontal: width/25,

  },
  head: {
    fontWeight: '600',
    fontFamily: 'Raleway',
    marginVertical: height/90,
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 13,
    color: '#666666',
    marginBottom: height/90,
  },
  inputBox: {
    height: height/18,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#1669EF',
    marginVertical: height/60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
  },
  numberHead: {
    color: '#1669EF',
    fontSize: 11,
    paddingHorizontal: 3,
    backgroundColor: '#FFFFFF',
    width: 84,
    position: 'absolute',
    top: -7,
    left: 5,
  },
  countryCode: {
    flexDirection: 'row',
    height: height/20,
    alignItems: 'center',
    width: width/10,
    justifyContent: 'space-between',
  },
  downArrow:{
    height: height/100,
    width: height/100,
    resizeMode: 'contain',
  },
  input: {
    // borderWidth: 1,
    width: width*3/4,
    height: height/25,
    padding: 5,
    fontSize: 15,
  },
  rightButton: {
    width: width/4,
    alignSelf: 'flex-end',
  },
  rightLink: {
    textAlign: 'right',
    fontFamily: 'Raleway',
    fontWeight: '600',
    color: '#1669EF',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 2,
    margin: 5,
    position: 'absolute',
    bottom: 10,
    width: width*9.2/10,
    alignSelf: 'center',
  },
  nextpage: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
