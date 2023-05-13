/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { useGet } from '../hooks/useRequest'
import { URL } from '../config/api'

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

  console.log('dayName', dayName, monthName)

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginTop: 40, marginBottom: 40 }}>
          <Text style={localStyles.textTitle}>Nama Hari dan Bulan</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ ...localStyles.textDesc, fontSize: 20 }}>Nama Hari</Text>
          {dayName?.isLoading ? (
            <Text style={localStyles.textDesc}>Loading...</Text>
          ) : (
            dayName?.data?.result.map((item: any, index: number) => (
              <Text key={index} style={localStyles.textDesc}>{item.indonesia} = {item.kei}</Text>
            ))
          )}
          <Text style={{ ...localStyles.textDesc, fontSize: 20, marginTop: 30 }}>Nama Bulan</Text>
          {dayName?.isLoading ? (
            <Text style={localStyles.textDesc}>Loading...</Text>
          ) : (
            monthName?.data?.result.map((item: any, index: number) => (
              <Text key={index} style={localStyles.textDesc}>{item.indonesia} = {item.kei}</Text>
            ))
          )}
          <View style={{marginBottom: 20}}>
            <ButtonPrimary onPress={() => props.navigation.goBack()} style={{ width: width * 0.6 }} text="Kembali" />
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
    fontSize: fonts.md,
    textAlign: 'center',
  },
  textDesc: { color: '#000', marginHorizontal: 10, alignSelf: 'flex-start', marginBottom: 10 }
});

export default DayMonthNamePage;
