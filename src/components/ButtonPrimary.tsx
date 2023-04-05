/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../styles';

const ButtonPrimary = (props: any) => {
  const { onPress, text, style } = props;
  return (
    <TouchableOpacity onPress={onPress} style={localStyles.buttonPrimary}>
      <Text style={[localStyles.textButton, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.primary,
    padding: 10,
    marginTop: 20,
    border: 1,
    borderRadius: 4,
  },
  textButton: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
});

export default ButtonPrimary;
