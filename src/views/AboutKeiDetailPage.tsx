/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { Slide3 } from '../assets'
import { Header } from '../components/Header'

const { width } = Dimensions.get('screen')

const AboutKeiDetailPage = (props: any) => {
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
      <View style={{ marginTop: 20 }}>
        <Text style={localStyles.textTitle}>Tentang Kei</Text>
      </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
        <Image source={Slide3} style={{ width: 320, height: 320, marginBottom: 20, marginTop: 20, borderRadius: 10 }} />
        </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' , marginBottom: 120, paddingHorizontal: 8}}>
        <Text style={{ color: '#000', marginHorizontal: 10, textAlign: 'justify' }}>
        kepulauan kei adalah gugusan pulau di kawasan tenggara kepulauan maluku yang kini termasuk dalam wilayah provinsi maluku, indonesia. kepulauan kei terdiri atas Pulau Nuhuyut, Nuhurowa, Kaidullah, Tahayad, Walir dan sejumlah pulau lebih kecil di sekitarnya.
        kepulauan kei terkenal dengan pantai dan wisata lautnya yang indah. masyarakat kei umumnya memeluk agama islam dan kristen, tetapi sebagian masih meyakini konsep seperti roh-roh dan kekuatan-kekuatan sakti menurut religi leluhurnya. Roh (mitu) dianggap bisa mendatangkan kebahagiaan dan juga kesusahan.
        kei juga memiliki makanan khas yaitu enbal, ikan bakaSr colo-colo, sayur sir-sir dan pisang goreng enbal.
        </Text>
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
});

export default AboutKeiDetailPage;
