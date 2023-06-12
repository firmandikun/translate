/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, BackHandler } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { Header } from '../components/Header'
import { IcDate, IcHelp, IcInformation, IcList, IcTranslate } from '../assets'

const { width } = Dimensions.get('screen')

const TranslateOptionsPage = (props: any) => {


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
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'flex-start', padding: 10, flexWrap: 'wrap', rowGap: 15, columnGap: 15, marginTop: 20 }}>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('ListLangue')} >
          <Image source={IcList} style={{ width: 40, height: 32 }} />
          <Text style={{ fontFamily: fonts.bold, marginTop: 20, textAlign: 'center', color: '#828282', }}>{`Kosakata \n Kei-Indonesia`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('ListLangueIndo')}>
          <Image source={IcList} style={{ width: 40, height: 32 }} />
          <Text style={{ fontFamily: fonts.bold, marginTop: 20, textAlign: 'center', color: '#828282' }}>{`Kosakata \n Indonesia-Kei`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('DayMonthNamePage')}>
          <Image source={IcDate} style={{ width: 40, height: 43 }} />
          <Text style={{ fontFamily: fonts.bold, marginTop: 20, textAlign: 'center', color: '#828282' }}>Nama Hari dan Bulan</Text>
        </TouchableOpacity>
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
  column: {
    width: '30%',
    height: 130,
    backgroundColor: '#FEFEFE',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,

  }
});

export default TranslateOptionsPage;
