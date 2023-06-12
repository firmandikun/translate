import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomePage from '../views/HomePage';
import TranslateOptionsPage from '../views/TranslateOptionsPage';
import TranslatorPage from '../views/TranslatorPage';
import AboutPage from '../views/AboutPage';
import HelpPage from '../views/HelpPage';
import AboutDetailPage from '../views/AboutDetailPage';
import AboutKeiDetailPage from '../views/AboutKeiDetailPage';
import DayMonthNamePage from '../views/DayMonthNamePage';
import Splash from '../views/SplashScreen';
import ListLangue from '../views/ListLangue';
import ListLangueIndo from '../views/ListLangueIndo';
import { colors } from '../styles';
import { IcBook, IcTranslate, Ichome } from '../assets';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export type RootStackParamList = {
  Splash: any;
  HomePage: any;
  DayMonthNamePage: any;
  TranslatorPage: any;
  TranslateOptionsPage: any;
  ListLangueIndo: any;
  ListLangue: any;
  AboutPage: any;
  AboutDetailPage: any;
  AboutKeiDetailPage: any;
  HelpPage: any;
  Stack: any,
  Main: any
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="DayMonthNamePage" component={DayMonthNamePage} options={{ headerShown: false }} />
      <Stack.Screen name="TranslatorPage" component={TranslatorPage} options={{ headerShown: false }} />
      <Stack.Screen name="TranslateOptionsPage" component={TranslateOptionsPage} options={{ headerShown: false }} />
      <Stack.Screen name="ListLangueIndo" component={ListLangueIndo} options={{ headerShown: false }} />
      <Stack.Screen name="ListLangue" component={ListLangue} options={{ headerShown: false }} />
      <Stack.Screen name="AboutPage" component={AboutPage} options={{ headerShown: false }} />
      <Stack.Screen name="AboutDetailPage" component={AboutDetailPage} options={{ headerShown: false }} />
      <Stack.Screen name="AboutKeiDetailPage" component={AboutKeiDetailPage} options={{ headerShown: false }} />
      <Stack.Screen name="HelpPage" component={HelpPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
        >
          {() => (
            <Tab.Navigator
              screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                  backgroundColor: '#FEFEFE',
                  height: 70,
                  paddingBottom: 8,
                  position: 'relative',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20
                },
              }}
            >
              <Tab.Screen
                name="Stack"
                component={StackNavigator}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        source={Ichome}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused ?  colors.primary : colors.secondary,
                        }}
                      />
                      <Text
                        style={{
                          color: focused ?  colors.primary : colors.secondary,
                          fontSize: 12,
                        }}
                      >
                        Home
                      </Text>
                    </View>
                  ),
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="TranslatorPage"
                component={TranslatorPage}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={[
                      styles.iconContainer,
                      {
                        borderWidth: focused ? 10 : 0,
                        borderColor: focused ? colors.secondary : 'transparent',
                        backgroundColor: focused ? colors.primary : colors.primary,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        elevation: 4, 
                      },
                    ]}>
                      <Image
                        source={IcTranslate}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: '#F2FFFF',
                        }}
                      />
                    </View>
                  ),
                  tabBarIconStyle: {
                    position: 'absolute',
                    top: -5,
                  },
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="TranslateOptionsPage"
                component={TranslateOptionsPage}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        source={IcBook}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused ? colors.primary :  colors.secondary,
                        }}
                      />
                      <Text
                        style={{
                          color: focused ?  colors.primary : colors.secondary,
                          fontSize: 12,
                        }}
                      >
                        Kamus
                      </Text>
                    </View>
                  ),
                  headerShown: false,
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#4E4CBB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.55,
    shadowRadius: 12,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: colors.grey,
  },
});


export default AppNavigator;
