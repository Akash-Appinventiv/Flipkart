import {
  Dimensions,
  Pressable,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LangBox from '../LangBox';

const {height, width} = Dimensions.get('window');

export default function Language({navigation}) {
  const [isInactive, setIsInactive] = useState(true);
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{'Choose Language'}</Text>
      </View>
      <View style={styles.body}>
      <ScrollView style={styles.list}>
        <LangBox pressed={false} status={setIsInactive} language={'English'} />
        <LangBox pressed={false} status={setIsInactive} language={'Hindi'} />
        <LangBox pressed={false} status={setIsInactive} language={'Tamil'} />
        <LangBox pressed={false} status={setIsInactive} language={'Punjabi'} />

      </ScrollView>
        <Pressable
          disabled={isInactive}
          onPress={()=>navigation.replace('Login')}
          style={({pressed}) => [
            {
              backgroundColor: isInactive
                ? '#BBBBBB'
                : '#FB5908' && (pressed ? '#FC651A' : '#FB5908'),
            },
            styles.button,
          ]}>
          <Text style={styles.nextpage}>{'CONTINUE'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
      flex: 1,
    backgroundColor: '#1669EF',
  },
  header: {
    backgroundColor: '#1669EF',
    height: height / 15,
    justifyContent: 'flex-end',
    padding: 15,
    marginBottom: 5,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Raleway',
    fontWeight: '600',
    zIndex: 1,
  },
  body: {
      backgroundColor: '#FFFFFF',
      flex: 1,
  },
  list: {
    borderColor: '#BBBBBB',
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 2,
    margin: 5,
  },
  nextpage: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
