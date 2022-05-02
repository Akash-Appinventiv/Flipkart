import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    Dimensions,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const {height, width} = Dimensions.get('window');
  
  export default function LangBox({press, status, language}) {
    const [pressed, setPressed] = useState(press);
    return (
      <View>
        <Pressable
          onPress={() => {
              status(pressed)
            setPressed(!pressed);
          }}
          style={() => [
            styles.langBox,
            {
              backgroundColor: pressed ? '#CDDFFC' : '#FFFFFF',
            },
            {
              borderColor: pressed ? '#1669EF' : '#BBBBBB',
            },
          ]}>
              <View style={{flexDirection: 'row', alignItems: 'center',}}>
  
          <Image
            style={styles.check}
            source={
                pressed
                ? require('../../assets/icons/success.png')
                : require('../../assets/icons/checkbox.png')
              }
              />
          <Text style={styles.lang}>{language}</Text>
              </View>
          <Image
            style={styles.monument}
            source={pressed 
              ? require('../../assets/icons/bluebridge.png')
              : require('../../assets/icons/bridge.png')}
          />
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    langBox: {
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: '#BBBBBB',
      borderRadius: 5,
      margin: 10,
      marginVertical: 5,
      height: height / 13,
      justifyContent: 'space-between',
    },
    check: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      margin: 10,
    },
    lang: {},
    monument: {
      height: 50,
      width: 50,
      resizeMode: 'cover',
      alignSelf: 'flex-end',
      marginRight: 20,
    },
  });
  