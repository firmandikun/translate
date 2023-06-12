/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import { Header } from '../components/Header'


const HelpPage = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FBFDFF' }} >
       <View style={localStyles.constainerHeader}>
        <Header onHome onPress={() => props.navigation.goBack()} />
      </View>
      <View style={{ marginTop: 40, marginBottom: 40 }}>
        <Text style={localStyles.textTitle}>Bantuan</Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 16 }}>
        <Text style={localStyles.textDesc}>
          pengucapan dalam bahasa kei biasanya terdapat penekanan pada suku kata terakhir. bila hanya satu kata yang diucapkan maka biasanya penekanan (ditahan) pada satu sampai empat huruf terakhir. perhatikan contoh berikut:</Text>
          <Text style={localStyles.textDesc}>huruf yang berwarna ditahan sebentar atau panjang tekanannya</Text>
          <Text style={localStyles.textDesc}>fal-<Text style={{ color: colors.primary, fontWeight: '700' }} >be :</Text>  bagaimana</Text>
          <Text style={localStyles.textDesc}>o-<Text style={{ color: colors.primary, fontWeight: '700' }} >ho</Text> : iya</Text>
          <Text style={localStyles.textDesc}>im-ba-<Text style={{ color: colors.primary, fontWeight: '700' }} >taed </Text> : kalian pergi atau tidak?</Text>
          <Text style={localStyles.textDesc}>
            saya dalam bahasa kei : Ya'au (Yau), U, Ya, dan A. Untuk A biasanya dipakai Khusus Untuk anak-anak, dan untuk Ya'au (Yau), U, Ya untuk orang dewasa
            Untuk O (anda), U (dia), Im (Kalian), Am (Kami), dan It (kita) dipakai dalam semua tingkat sosial.
          </Text>
          <Text style={localStyles.textDesc}>tanda (-) dalam kosakata bahasa kei berguna untuk memberi spasi atau jeda dalam penyebutanya agar sesuai dengan ejaan bahasa kei</Text>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  constainerHeader : {
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
  },

  textTitle: {
    color: '#000',
    fontFamily: fonts.bold,
    fontSize: fonts.md,
    textAlign: 'center',
  },
  textDesc: { color: '#000', marginHorizontal: 10, alignSelf: 'flex-start', marginBottom: 10 }
});

export default HelpPage;
