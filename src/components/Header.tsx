import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { PureComponent } from 'react'
import { colors, fonts } from '../styles'
import { IcBack, IcBackSecondary } from '../assets'


export  const Header = (props: any) => {
    const { onPress, onHome } = props;
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
    <View>
        <TouchableOpacity onPress={onPress} >
          {
            onHome ? <Image  source={IcBack} style={{ width: 30, height: 30 }} /> : <Image  source={IcBackSecondary} style={{ width: 30, height: 30 }} />
          }   
        </TouchableOpacity>
    </View>
    <View>
        <Text style={{ fontSize: 25, color: onHome ? '#ffff' : '#ffff' , fontFamily: fonts.bold }} >Translator</Text>
    </View>
  </View>
  )
}

