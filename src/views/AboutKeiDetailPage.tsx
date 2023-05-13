/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'

const { width } = Dimensions.get('screen')

const AboutKeiDetailPage = (props: any) => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 40, marginBottom: 100 }}>
        <Text style={localStyles.textTitle}>Tentang Kei</Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ color: '#000', marginHorizontal: 10 }}>
        kepulauan kei adalah gugusan pulau di kawasan tenggara kepulauan maluku yang kini termasuk dalam wilayah provinsi maluku, indonesia. kepulauan kei terdiri atas Pulau Nuhuyut, Nuhurowa, Kaidullah, Tahayad, Walir dan sejumlah pulau lebih kecil di sekitarnya.
        kepulauan kei terkenal dengan pantai dan wisata lautnya yang indah. masyarakat kei umumnya memeluk agama islam dan kristen, tetapi sebagian masih meyakini konsep seperti roh-roh dan kekuatan-kekuatan sakti menurut religi leluhurnya. Roh (mitu) dianggap bisa mendatangkan kebahagiaan dan juga kesusahan.
        kei juga memiliki makanan khas yaitu enbal, ikan bakar colo-colo, sayur sir-sir dan pisang goreng enbal.
        </Text>
        <ButtonPrimary onPress={() => props.navigation.goBack()} style={{ width: width * 0.6 }} text="Kembali" />
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
});

export default AboutKeiDetailPage;
