/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { Header } from '../components/Header'

const { width } = Dimensions.get('screen')

const AboutDetailPage = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FBFDFF' }} >
      <View style={{
        height: 70,
        width: '100%',
        backgroundColor: colors.primary,
        padding: 16,
        borderBottomStartRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}>
        <Header onHome onPress={() => props.navigation.goBack()} />
      </View>
      <View style={{ position: 'relative' }} >
        <View>
          <Text style={localStyles.textTitle}>Tentang</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', height: 410 }}>
          <Text style={{ color: '#000', marginHorizontal: 10 , textAlign: 'justify'}}>
            Aplikasi Kamus Bahasa Kei merupakan Aplikasi yang digunakan untuk mencari serta mempelajari kosakata dalam tingkatan bahasa kei. Aplikasi ini sangat praktis, efisien, dan mudah digunakan dalam belajar bahasa kei kamus dalam bahasa kei ditulis sesuai dengan penyebutan atau ejaan dalam bahasa kei.
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
