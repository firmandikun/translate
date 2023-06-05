/* eslint-disable prettier/prettier */
import React from 'react'
import { BackHandler, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { Header } from '../components/Header'
import { IcHelp, IcInformation, IcList, IcTranslate, Logo } from '../assets'

const { width } = Dimensions.get('screen')

const HomePage = (props: any) => {
  return (
    <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#F2F2F2' }} >
      <View style={{ marginBottom: 10, backgroundColor: '#4480E5', height: '40%', borderBottomStartRadius: 20, borderBottomRightRadius: 20, padding: 20 }}>
        <View>
           <Text style={{ textAlign: 'right', fontSize: 25, color: '#ffff' }} >Translator</Text>
        </View>
        <Text
          style={localStyles.textTitle}>
            {`Apa yang ingin \nAnda terjemahkan \nhari ini?`}
         </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'flex-start', padding: 10, flexWrap: 'wrap', rowGap: 15, columnGap: 15 }}>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('TranslateOptionsPage')}>
          <Image source={IcList} style={{ width: 40, height: 32 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20,  color: '#828282',}}>Kamus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('TranslatorPage')}>
          <Image source={IcTranslate} style={{ width: 45, height: 35, }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, color: '#828282'}}>Terjemah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('AboutPage')}>
          <Image source={IcInformation} style={{ width: 50, height: 35 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, color: '#828282'}}>Tentang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('HelpPage')}>
          <Image source={IcHelp} style={{ width: 38, height: 35 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, color: '#828282'}}>Bantuan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  textTitle: {
    color: '#F1F6F9',
    fontFamily: fonts.regular,
    fontSize: fonts.lg,
    marginTop: 30
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

export default HomePage;
