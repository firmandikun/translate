import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'

const { width } = Dimensions.get('screen')

const TranslatorPage = ({ navigation, route }: any) => {
  const [search, setSearch] = useState<string>('')

  return (
    <SafeAreaView>
      <View style={{ marginTop: 40, marginBottom: 100 }}>
        <Text style={localStyles.textTitle}>{route?.params?.title}</Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <TextInput
          style={{ borderWidth: 1, borderColor: colors.grey, color: '#000', width: width * 0.8, borderRadius: 4, paddingHorizontal: 20, marginBottom: 20 }}
          placeholder="Your text here..."
          placeholderTextColor={colors.grey}
          value={search}
          onChangeText={(e) => setSearch(e)}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.grey,
            width: width * 0.8,
            borderRadius: 4,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.grey,
              borderRadius: 4,
              margin: 10,
              padding: 5,
            }}
          >
            <Text style={{ color: '#000', textAlign: 'center' }}>Kata tidak ditemukan, mungkin maksud anda</Text>
          </View>
          <View
            style={{
              borderColor: colors.grey,
              borderTopWidth: 1,
              padding: 5,

            }}
          >
            <Text style={{ color: '#000' }}>Rumah {'>'} Ruqah</Text>
          </View>
          <View
            style={{
              borderColor: colors.grey,
              borderTopWidth: 1,
              padding: 5,
            }}
          >
            <Text style={{ color: '#000' }}>Rumah {'>'} Ruqah</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <ButtonPrimary onPress={() => navigation.goBack()} style={{ width: width * 0.6 }} text="Kembali" />
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

export default TranslatorPage;
