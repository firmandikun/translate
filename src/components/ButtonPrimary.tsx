/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../styles';

const ButtonPrimary = (props: any) => {
  const { onPress, text, style, active } = props;
  const buttonStyle = active ? localStyles.buttonActive : localStyles.buttonPrimary;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,    
    elevation: 4,
  },
  buttonActive: {
    backgroundColor: colors.secondary, // Ganti dengan warna latar belakang tombol aktif
    padding: 10,
    marginTop: 20,
    border: 1,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,    
    elevation: 4,
  },
  textButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
});

export default ButtonPrimary;
