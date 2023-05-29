import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { usePost } from '../hooks/useRequest'
import { URL } from '../config/api'

const { width } = Dimensions.get('screen')

const TranslatorPage = ({ navigation, route }: any) => {
  const [search, setSearch] = useState<string>('')
  const [title, setTitle] = useState<string>('indonesia')

  const [translate, postTranslate] = usePost()

  const postTranslateData = (fromLanguage: string, search: string) => {
    postTranslate.getRequest(URL.TRANSLATE_WORD, {language: fromLanguage, search}, {});
  }

  const handleOnSearch = () => {
    if (route?.params?.title) {
      postTranslateData(route?.params?.title, search)
    } else {
      postTranslateData(title, search)
    }
  }

  const handleChangeLanguage = (key: string) => {
    setTitle(key)
    setSearch('')
    handleOnSearch()
  }

  return (
    <SafeAreaView>
      <View style={{ marginBottom: 100 }}>
        <View style={{ marginTop: 40, marginBottom: 30 }}>
          <Text style={localStyles.textTitle}>{route?.params?.title === 'kei' || title === 'kei' ? 'Kel-Indonesia' : 'Indonesia-Kei'}</Text>
        </View>
        {!route?.params?.title ? (
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
            <ButtonPrimary onPress={() => handleChangeLanguage('indonesia')} text="Indonesia-Kei" />
            <ButtonPrimary onPress={() => handleChangeLanguage('kei')} text="Kel-Indonesia" />
          </View>
        ) : null}
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', marginBottom: 20, gap: 5 }}>
          <TextInput
            style={{ borderWidth: 1, borderColor: colors.grey, color: '#000', width: width * 0.6, borderRadius: 4, paddingHorizontal: 20, marginVertical: 13 }}
            placeholder="Your text here..."
            placeholderTextColor={colors.grey}
            value={search}
            onChangeText={(e) => setSearch(e)}
          />
          <View>
            <ButtonPrimary onPress={() => handleOnSearch()} text="Search" />
          </View>
        </View>
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
           <Text style={{ color: '#000', textAlign: 'center' }}>{translate?.data?.result?.type === 'recomendation' ? 'Kata tidak ditemukan, mungkin maksud anda' : 'Menampilkan hasil pencarian kata'}</Text>
          </View>
          {translate?.data?.result?.result?.map((item: any, index: number) => (
            <View key={index} style={{ borderColor: colors.grey, borderTopWidth: 1, padding: 5 }}>
              {route?.params?.title === 'kei' || title === 'kei' ? (
                <Text style={{ color: '#000' }}>{item.kei} = {item.indonesia}</Text>
              ) : (
                <Text style={{ color: '#000' }}>{item.indonesia} = {item.kei}</Text>
              )}
            </View>
          ))}
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
