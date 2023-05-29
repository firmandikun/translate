/* eslint-disable prettier/prettier */
import React from 'react'
import { BackHandler, Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'

const { width } = Dimensions.get('screen')

const HomePage = (props: any) => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 40, marginBottom: 100 }}>
        <Text style={localStyles.textTitle}>Welcome to Kamus Vaveu Evav</Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <ButtonPrimary onPress={() => props.navigation.navigate('TranslateOptionsPage')} style={{ width: width * 0.6 }} text="Daftar Kamus" />
        <ButtonPrimary onPress={() => props.navigation.navigate('TranslatorPage')} style={{ width: width * 0.6 }} text="Terjemahan Bahasa" />
        <ButtonPrimary onPress={() => props.navigation.navigate('AboutPage')} style={{ width: width * 0.6 }} text="Tentang" />
        <ButtonPrimary onPress={() => props.navigation.navigate('HelpPage')} style={{ width: width * 0.6 }} text="Bantuan" />
        <ButtonPrimary onPress={() => BackHandler.exitApp()} style={{ width: width * 0.6 }} text="Keluar" />
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  textTitle: {
    color: '#F02A2A',
    fontFamily: fonts.bold,
    fontSize: fonts.md,
    textAlign: 'center',
  },
});

export default HomePage;
