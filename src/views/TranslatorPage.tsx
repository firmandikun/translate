/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts } from '../styles';
import ButtonPrimary from '../components/ButtonPrimary';
import { usePost } from '../hooks/useRequest';
import { URL } from '../config/api';
import { Header } from '../components/Header';

const { width } = Dimensions.get('screen');

const TranslatorPage = ({ navigation, route }: any) => {
  const [search, setSearch] = useState<string>('');
  const [title, setTitle] = useState<string>('indonesia');
  const [activeButton, setActiveButton] = useState<string>('indonesia');

  const [translate, postTranslate] = usePost();

  const postTranslateData = (fromLanguage: string, search: string) => {
    postTranslate.getRequest(URL.TRANSLATE_WORD, { language: fromLanguage, search }, {});
  };

  const handleOnSearch = () => {
    if (route?.params?.title) {
      postTranslateData(route?.params?.title, search);
    } else {
      postTranslateData(title, search);
    }
  };

  const handleChangeLanguage = (key: string) => {
    setTitle(key);
    setSearch('');
    setActiveButton(key);
    handleOnSearch();
  };

  return (
    <SafeAreaView>
      <View style={{ height: 70, width: '100%', backgroundColor: '#4480E5', padding: 16, borderBottomStartRadius: 20 }}>
        <Header onHome onPress={ () => navigation.navigate('HomePage')} />
      </View>
      <View>
        <View style={{ marginBottom: 10 }}>
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Text style={localStyles.textTitle}>
              {route?.params?.title === 'kei' || title === 'kei' ? 'Kel-Indonesia' : 'Indonesia-Kei'}
            </Text>
          </View>
          {!route?.params?.title ? (
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
              <ButtonPrimary
                onPress={() => handleChangeLanguage('indonesia')}
                text="Indonesia-Kei"
                active={activeButton === 'indonesia'}
              />
              <ButtonPrimary
                onPress={() => handleChangeLanguage('kei')}
                text="Kel-Indonesia"
                active={activeButton === 'kei'}
              />
            </View>
          ) : null}
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 20,
              gap: 2,
              width: width * 0.9,
              backgroundColor: '#C6D9FA',
              padding: 10,
            }}
          >
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.grey,
                color: '#000',
                paddingHorizontal: 10,
                marginVertical: 13,
              }}
              placeholder="Your text here..."
              placeholderTextColor={colors.grey}
              value={search}
              onChangeText={(e) => setSearch(e)}
            />
            <TouchableOpacity
              style={{ backgroundColor: '#4480E5', width: 90, marginLeft: 'auto', padding: 5, flexDirection: 'row', justifyContent: 'center', borderRadius: 2 }}
              onPress={() => handleOnSearch()}
            >
              <Text style={{ color: '#FFFFFF', fontFamily: fonts.bold }} >Search</Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: '#C6D9FA', width: width * 0.9, borderRadius: 4, height: 240 }}>
            <View style={{ margin: 10, padding: 5 }}>
              <Text style={{ color: '#000', textAlign: 'center', fontFamily: fonts.bold }}>
                {translate?.data?.result?.type === 'recomendation'
                  ? 'Kata tidak ditemukan, mungkin maksud anda'
                  : 'Menampilkan hasil pencarian kata'}
              </Text>
            </View>
            <ScrollView>
              {translate?.data?.result?.result?.map((item: any, index: number) => (
                <View key={index} style={{ borderColor: colors.grey, borderTopWidth: 1, padding: 5 }}>
                  {route?.params?.title === 'kei' || title === 'kei' ? (
                    <Text style={{ color: '#000' }}>
                      {item.kei} = {item.indonesia}
                    </Text>
                  ) : (
                    <Text style={{ color: '#000' }}>
                      {item.indonesia} = {item.kei}
                    </Text>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
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
