import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles';
import { Logo } from '../assets/Images';
import { useNavigation } from '@react-navigation/native';

type SplashProps = {
  navigation: any;
};

const Splash: React.FC<SplashProps> = (props) => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.pages}>
      <View style={styles.ilustrasi}>
        <Image source={Logo} style={{ width: 90, height: 90, marginBottom: 10 }} />
        <Text style={styles.title}>Aplikasi Kamus vaveu evav</Text>
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
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});
