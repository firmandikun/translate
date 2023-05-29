/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../styles'
import ButtonPrimary from '../components/ButtonPrimary'
import { useGet } from '../hooks/useRequest'
import { URL } from '../config/api'

const { width } = Dimensions.get('screen')

const ListLangueIndo = (props: any) => {
    const [listLangue, getListLangue] = useGet()

    const getListLangues = () => {
        getListLangue.getRequest(URL.LIST_LANGUE, {})
    }

    useEffect(() => {
        getListLangues()
    }, [])

    const dataGrouping = listLangue?.data?.result?.reduce((result: any, value: any) => {
        const createTitle = value?.indonesia?.charAt(0)
        result[createTitle] = result[createTitle] || []
        result[createTitle].push(value)
    
        return result
      }, {}) || {}


      const formatArrayData = Object.keys(dataGrouping)
        .sort()
        .map((value, index) => {
            return {
            title: value,
            data: dataGrouping[value]
            };
        });


    return (
        <SafeAreaView>
            <View style={{ marginTop: 20, padding: 16 }}>
                <Text style={styles.textTitle}>Indonesi - Kei</Text>
                <View style={styles.row}>
                    <Text style={styles.cell}>Indonesia</Text>
                    <Text style={styles.cell}>Kei</Text>
                </View>
                <ScrollView>
                    <View style={styles.table}>
                        {
                            formatArrayData.map((items: any, index: any) => {
                                return (
                                    <View key={index} >
                                        <Text style={{ fontWeight: '700', marginBottom: 10, marginTop: 5,  color: '#000', fontSize: fonts.lg }} > {items?.title} </Text>
                                        {
                                            items?.data?.map((item: any, indexs: any) => (
                                                <View style={styles.row} key={indexs} >
                                                    <Text style={styles.cell}>{item?.indonesia}</Text>
                                                    <Text style={styles.cell}>{item?.kei}</Text>
                                                </View>
                                            ))
                                        }
                                    </View>

                                )
                            })
                        }
                    </View>
                </ScrollView>
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
        marginBottom: 10
    },
    table: {

        marginBottom: '50%',
        marginTop: 10
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
        fontWeight: '700'
    },
});

export default ListLangueIndo;
