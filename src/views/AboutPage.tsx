/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import { Header } from '../components/Header'
import { IcInformation, IcList } from '../assets'

const { width } = Dimensions.get('screen')

const AboutPage = (props: any) => {
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
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-around', padding: 10, flexWrap: 'wrap', rowGap: 10, columnGap: 10, marginTop: 20 }}>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('AboutDetailPage')} >
          <Image source={IcInformation} style={{ width: 45, height: 32 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, textAlign: 'center', color: '#828282'}}>Tentang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('AboutKeiDetailPage')}>
          <Image source={IcInformation} style={{ width: 45, height: 32 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, textAlign: 'center', color: '#828282'}}>Tentang Kei</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  column: {
    width: '40%',
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

export default AboutPage;
