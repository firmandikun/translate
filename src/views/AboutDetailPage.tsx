/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'

const { width } = Dimensions.get('screen')

const AboutDetailPage = (props: any) => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 40, marginBottom: 100 }}>
        <Text style={localStyles.textTitle}>Tentang</Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ color: '#000', marginHorizontal: 10 }}>
          Aplikasi Kamus Bahasa Kei merupakan Aplikasi yang digunakan untuk mencari serta mempelajari kosakata dalam tingkatan bahasa kei. Aplikasi ini sangat praktis, efisien, dan mudah digunakan dalam belajar bahasa kei kamus dalam bahasa kei ditulis sesuai dengan penyebutan atau ejaan dalam bahasa kei contact us lindakaleann@gmail.com
        </Text>
        <ButtonPrimary onPress={() => props.navigation.goBack()} style={{ width: width * 0.6 }} text="Kembali" />
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
  },
});

export default AboutDetailPage;
