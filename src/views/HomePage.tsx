/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import { IcHelp, IcInformation, IcList, IcTranslate, Logo } from '../assets'

const { width } = Dimensions.get('screen')

const HomePage = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FBFDFF' }} >
      <View style={localStyles.constinerHeader}>
        <View>
          <Text style={localStyles.textHeader} >Translator</Text>
        </View>
        <Text
          style={localStyles.textTitle}>
          {`Apa yang ingin \nAnda terjemahkan \nhari ini?`}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'flex-start', padding: 10, flexWrap: 'wrap', rowGap: 15, columnGap: 15 }}>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('TranslateOptionsPage')}>
          <Image source={IcList} style={{ width: 40, height: 32 }} />
          <Text style={localStyles.textNavigation}>Kamus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('TranslatorPage')}>
          <Image source={IcTranslate} style={{ width: 45, height: 35, }} />
          <Text style={localStyles.textNavigation}>Terjemah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('AboutPage')}>
          <Image source={IcInformation} style={{ width: 50, height: 35 }} />
          <Text style={localStyles.textNavigation}>Tentang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('HelpPage')}>
          <Image source={IcHelp} style={{ width: 38, height: 35 }} />
          <Text style={localStyles.textNavigation}>Bantuan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  constinerHeader: {
    marginBottom: 10, backgroundColor: '#698DFE', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,    
    elevation: 4,
    height: '40%',
    borderBottomStartRadius: 20, borderBottomRightRadius: 20, padding: 20
  },
  textHeader: {
    textAlign: 'right', 
    fontSize: 25, 
    color: '#ffff', 
    fontFamily: fonts.bold
  },
  textNavigation: {
    fontFamily: fonts.bold, 
    marginTop: 20, 
    color: '#828282'
  },
  textTitle: {
    color: '#F2FFFF',
    fontFamily: fonts.bold,
    fontSize: fonts.lg,
    marginTop: 30
  },

  gradient: {
    height: '100%',
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

export default HomePage;
