/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { useGet } from '../hooks/useRequest'
import { URL } from '../config/api'
import { Header } from '../components/Header'

const { width } = Dimensions.get('screen')

const DayMonthNamePage = (props: any) => {
  const [dayName, getDayName] = useGet()
  const [monthName, getMonthName] = useGet()

  useEffect(() => {
    getDayNameData()
    getMonthNameData()
  }, [])

  const getDayNameData = () => {
    getDayName.getRequest(URL.TRANSLATE_DAY_NAME, {})
  }

  const getMonthNameData = () => {
    getMonthName.getRequest(URL.TRANSLATE_MONTH_NAME, {})
  }

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
      <ScrollView>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text style={localStyles.textTitle}>Nama Hari dan Bulan</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 100 }}>
          <Text style={{ ...localStyles.textDesc, fontSize: 20, fontFamily: fonts.bold, marginLeft: 20 }}>Nama Hari</Text>
          <View style={localStyles.bgContainer} >
          {dayName?.isLoading ? (
            <Text style={localStyles.textDesc}>Loading...</Text>
          ) : (
            dayName?.data?.result.map((item: any, index: number) => (
              <Text key={index} style={localStyles.textDesc}>{item.indonesia} = {item.kei}</Text>
            ))
          )}
          </View>
          <Text style={{ ...localStyles.textDesc, fontSize: 20, marginTop: 10, fontFamily: fonts.bold, marginLeft: 20 }}>Nama Bulan</Text>
          <View style={localStyles.bgContainer} >
          {dayName?.isLoading ? (
            <Text style={localStyles.textDesc}>Loading...</Text>
          ) : (
            monthName?.data?.result.map((item: any, index: number) => (
              <Text key={index} style={localStyles.textDesc}>{item.indonesia} = {item.kei}</Text>
            ))
          )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  textTitle: {
    color: '#000',
    fontFamily: fonts.bold,
    fontSize: 25,
    textAlign: 'center',
  },
  textDesc: { color: '#000', marginHorizontal: 10, alignSelf: 'flex-start', marginBottom: 10 },

  bgContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    gap: 2,
    width: width * 0.9,
    backgroundColor: '#C6D9FA',
    padding: 10,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 10
  }

  
});

export default DayMonthNamePage;
