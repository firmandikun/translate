/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { Header } from '../components/Header'
import { IcDate, IcHelp, IcInformation, IcList, IcTranslate } from '../assets'

const { width } = Dimensions.get('screen')

const TranslateOptionsPage = (props: any) => {

  return (
    <SafeAreaView>
       <View style={{ height: 70, width: '100%', backgroundColor: '#4480E5', padding: 16, borderBottomStartRadius: 20 }} >
        <Header onHome  onPress={() => props.navigation.navigate('HomePage')} />
        </View>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'flex-start', padding: 10, flexWrap: 'wrap', rowGap: 15, columnGap: 15, marginTop: 20 }}>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('ListLangue')} >
          <Image source={IcList} style={{ width: 40, height: 32 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, textAlign: 'center'}}>{`Kosakata \n Kei-Indonesia`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('ListLangueIndo')}>
          <Image source={IcList} style={{ width: 40, height: 32 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, textAlign: 'center'}}>{`Kosakata \n Indonesia-Kei`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('DayMonthNamePage')}>
          <Image source={IcDate} style={{ width: 40, height: 43 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, textAlign: 'center'}}>Nama Hari dan Bulan</Text>
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
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius :10
  }
});

export default TranslateOptionsPage;
