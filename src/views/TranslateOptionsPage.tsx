/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'

const { width } = Dimensions.get('screen')

const TranslateOptionsPage = (props: any) => {

  const handlePressButton = (title: string) => {
    props.navigation.navigate('TranslatorPage', { title })
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 40, marginBottom: 100 }}>
        <Text style={localStyles.textTitle}>Kamus Veveu Evav</Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <ButtonPrimary onPress={() => handlePressButton('kei')} style={{ width: width * 0.6 }} text="Kel-Indonesia" />
        <ButtonPrimary onPress={() => handlePressButton('indonesia')} style={{ width: width * 0.6 }} text="Indonesia-Kei" />
        <ButtonPrimary onPress={() => props.navigation.navigate('DayMonthNamePage')} style={{ width: width * 0.6 }} text="Nama Hari dan Bulan" />
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

export default TranslateOptionsPage;
