/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts } from '../styles';
import { useGet } from '../hooks/useRequest';
import { URL } from '../config/api';
import ButtonPrimary from '../components/ButtonPrimary';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

const ListLangueIndo = (props: any) => {
  const [listLangue, getListLangue] = useGet();
  const [filteredData, setFilteredData] = useState<any>(null);
  const [activeLetter, setActiveLetter] = useState<string>('');

  const getListLangues = () => {
    getListLangue.getRequest(URL.LIST_LANGUE, {});
  };

  useEffect(() => {
    getListLangues();
  }, []);

  // Grouping data agar sesuai dengan abjad
  const dataGrouping = listLangue?.data?.result?.reduce((result: any, value: any) => {
    const createTitle = value?.indonesia?.charAt(0);
    result[createTitle] = result[createTitle] || [];
    result[createTitle].push(value);
    return result;
  }, {}) || {};

  // Convert data dari object ke array dan melakukan sort agar sesuai urutan abjad
  const formatArrayData = Object.keys(dataGrouping)
    .sort()
    .map((value, index) => {
      return {
        title: value,
        data: dataGrouping[value],
      };
    });

  const handleButtonPress = (letter: string) => {
    const filtered = formatArrayData.filter((item: any) =>
      item?.title?.toLowerCase().startsWith(letter.toLowerCase())
    );
    setFilteredData(filtered);
    setActiveLetter(letter);
  };

  const navigation = useNavigation();

  

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
        <Header onHome onPress={() => navigation.goBack()} />
      </View>
      <View style={{ marginTop: 20, padding: 16 }}>
        <Text style={styles.textTitle}>Indonesia - Kei</Text>
        <View style={styles.buttonContainer}>
          {Array.from(Array(26)).map((_, index) => {
            const letter = String.fromCharCode(index + 65);
            return (
              <ButtonPrimary
                key={letter}
                text={letter}
                onPress={() => handleButtonPress(letter)}
                active={letter === activeLetter}
              />
            );
          })}
        </View>
        <View style={styles.table}>
              {filteredData &&
                filteredData.map((items: any, index: any) => {
                  return (
                    <View key={index}>
                      <Text
                        style={{
                          fontWeight: '700',
                          marginBottom: 10,
                          marginTop: 5,
                          color: '#000',
                          fontSize: fonts.lg,
                        }}
                      >
                        {items?.title?.charAt(0).toUpperCase() +
                          items?.title.slice(1)}
                      </Text>
                       <ScrollView>
                       {items?.data?.map((item: any, indexs: any) => (
                        <View style={styles.row} key={indexs}>
                          <Text style={styles.cell}>
                          {item?.indonesia?.charAt(0).toUpperCase() + item?.indonesia.slice(1)}
                        </Text>
                        <Text style={styles.cell}>
                          {item?.kei?.charAt(0).toUpperCase() + item?.kei.slice(1)}
                        </Text>
                        </View>
                      ))}
                       </ScrollView>
                    </View>
                  );
                })}
            </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    color: '#000',
    fontFamily: fonts.bold,
    fontSize: fonts.md,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 5,
    gap: 4,
  },
  table: {
    height: 200,
    marginTop: 10,
    overflow: 'visible'
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    color: '#000',
    fontWeight: '700',
  },
});

export default ListLangueIndo;
