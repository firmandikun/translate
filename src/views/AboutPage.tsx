/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { Header } from '../components/Header'
import { IcInformation, IcList } from '../assets'

const { width } = Dimensions.get('screen')

const AboutPage = (props: any) => {
  return (
    <SafeAreaView>
       <View style={{ height: 70, width: '100%', backgroundColor: '#4480E5', padding: 16, borderBottomStartRadius: 20 }} >
        <Header onHome  onPress={() => props.navigation.navigate('HomePage')} />
        </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-around', padding: 10, flexWrap: 'wrap', rowGap: 10, columnGap: 10, marginTop: 20 }}>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('AboutDetailPage')} >
          <Image source={IcInformation} style={{ width: 45, height: 32 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, textAlign: 'center'}}>Tentang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.column} onPress={() => props.navigation.navigate('AboutKeiDetailPage')}>
          <Image source={IcInformation} style={{ width: 45, height: 32 }} />
          <Text style={{fontFamily: fonts.bold, marginTop: 20, textAlign: 'center'}}>Tentang Kei</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  column: {
    width: '40%',
    height: 130,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius :10
  }
});

export default AboutPage;
