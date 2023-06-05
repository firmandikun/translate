/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles';
import { IcBook, IcTranslate, Ichome } from '../assets';

export type RootStackParamList = {
  HomePage: any;
  TranslateOptionsPage: any;
  DayMonthNamePage: any;
  TranslatorPage: any;
  AboutPage: any;
  HelpPage: any;
  AboutDetailPage: any;
  AboutKeiDetailPage: any;
  Splash: any;
  ListLangue: any;
  ListLangueIndo: any;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 70,
          paddingBottom: 8,
          ...styles.shadow,
          position: 'relative',
        },
      }}
    >
      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={Ichome}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#4480E5' : '#748c95',
                }}
              />
              <Text
                style={{
                  color: focused ? '#4480E5' : '#748c95',
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="DayMonthNamePage"
        component={DayMonthNamePage}
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="TranslatorPage"
        component={TranslatorPage}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#4480E5', width: 80, height: 80, borderRadius: 100, borderWidth: focused ? 10 : 0, borderColor: focused ? '#C6D9FA' : '' }}>
              <Image
                source={IcTranslate}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#FFFFFF',
                }}
              />
            </View>
          ),
          tabBarIconStyle: {
            position: 'absolute',
            top: -5,
          },
        }}
      />
      <Tab.Screen
        name="TranslateOptionsPage"
        component={TranslateOptionsPage}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={IcBook}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#4480E5' : '#748c95',
                }}
              />
              <Text
                style={{
                  color: focused ? '#4480E5' : '#748c95',
                  fontSize: 12,
                }}
              >
                Kamus
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ListLangueIndo"
        component={ListLangueIndo}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="ListLangue"
        component={ListLangue}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="AboutPage"
        component={AboutPage}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="AboutDetailPage"
        component={AboutDetailPage}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="AboutKeiDetailPage"
        component={AboutKeiDetailPage}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="HelpPage"
        component={HelpPage}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default StackNavigator;
