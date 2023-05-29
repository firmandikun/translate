import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import { colors } from '../styles';
import { Logo } from '../assets/Images';
// import { Text } from 'react-native-svg';

type SplashProps = {
  navigation: any;
};

const Splash: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomePage');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.pages}>
      <View style={styles.ilustrasi}>
        <Image source={Logo} style={{ width: 90, height: 90, marginBottom: 10 }} />
        <Text style={styles.title} > Aplikasi translate </Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  ilustrasi: {
    position: 'absolute',
    bottom: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    // right: 0,
  },

  title: {
    color:'white',
    fontSize: 20
  }
});
