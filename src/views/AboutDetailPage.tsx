/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { Header } from '../components/Header'

const { width } = Dimensions.get('screen')

const AboutDetailPage = (props: any) => {
  return (
    <SafeAreaView>
      <View style={{ height: 70, width: '100%', backgroundColor: '#4480E5', padding: 16, borderBottomStartRadius: 20 }} >
        <Header onHome onPress={() => props.navigation.navigate('AboutPage')} />
      </View>
      <View style={{ position: 'relative' }} >
        <View>
          <Text style={localStyles.textTitle}>Tentang</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', height: 410 }}>
          <Text style={{ color: '#000', marginHorizontal: 10 }}>
            Aplikasi Kamus Bahasa Kei merupakan Aplikasi yang digunakan untuk mencari serta mempelajari kosakata dalam tingkatan bahasa kei. Aplikasi ini sangat praktis, efisien, dan mudah digunakan dalam belajar bahasa kei kamus dalam bahasa kei ditulis sesuai dengan penyebutan atau ejaan dalam bahasa kei contact us lindakaleann@gmail.com
          </Text>
        </View>
        <View style={{ position: 'absolute', bottom: 0, left: 80, }} >
          <Text style={{ color: '#000', fontFamily: fonts.bold, }}>
            contact us lindakaleann@gmail.com
          </Text>
        </View>
      </View>


    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  textTitle: {
    color: '#000',
    fontFamily: fonts.bold,
    fontSize: fonts.md,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
});

export default AboutDetailPage;
