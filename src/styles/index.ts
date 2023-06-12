/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
// import styled from 'styled-components'

export const dimensions = {
  height: Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
};

export const colors = {
  primary: '#698DFE', // light-black
  secondary: '#D1D2E8', // orange
  tertiary: '#008ED1', // blue,
  lightTertiary: '#00A6F5', // light-blue,
  grey: '#171719',
  error: '#F3251D', // red errors
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 35,
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
};

// // Inter-Regular
// export const PrimaryText = styled.Text`
//   font-family: ${fonts.regular};
//   color: ${colors.primary};
// `
// export const SecondaryText = styled.Text`
//   font-family: ${fonts.regular};
//   color: ${colors.secondary};
// `
// export const TertiaryText = styled.Text`
//   font-family: ${fonts.regular};
//   color: ${colors.tertiary};
// `
// export const ErrorText = styled.Text`
//   font-family: ${fonts.regular};
//   color: ${colors.error};
// `

// // Inter-Medium
// export const PrimaryTextMedium = styled.Text`
//   font-family: ${fonts.medium};
//   color: ${colors.primary};
// `
// export const SecondaryTextMedium = styled.Text`
//   font-family: ${fonts.medium};
//   color: ${colors.secondary};
// `
// export const TertiaryTextMedium = styled.Text`
//   font-family: ${fonts.medium};
//   color: ${colors.tertiary};
// `
// export const LightTertiaryTextMedium = styled.Text`
//   font-family: ${fonts.medium};
//   color: ${colors.lightTertiary};
// `

// // Inter-Bold
// export const PrimaryTextBold = styled.Text`
//   font-family: ${fonts.bold};
//   color: ${colors.primary};
// `
// export const SecondaryTextBold = styled.Text`
//   font-family: ${fonts.bold};
//   color: ${colors.secondary};
// `
// export const TertiaryTextBold = styled.Text`
//   font-family: ${fonts.bold};
//   color: ${colors.tertiary};
// `

export const primaryStyle = StyleSheet.create({
  smRegular: {
    fontFamily: fonts.regular,
    color: colors.primary,
    fontSize: fonts.sm,
  },
  smMedium: {
    fontFamily: fonts.medium,
    color: colors.primary,
    fontSize: fonts.sm,
  },
  smBold: {
    fontFamily: fonts.bold,
    color: colors.primary,
    fontSize: fonts.sm,
  },
});
