/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../views/HomePage'
import TranslateOptionsPage from '../views/TranslateOptionsPage'
import TranslatorPage from '../views/TranslatorPage'

export type RootStackParamList = {
  HomePage: any;
  TranslateOptionsPage: any
  TranslatorPage: any
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="TranslateOptionsPage" component={TranslateOptionsPage} />
      <Stack.Screen name="TranslatorPage" component={TranslatorPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
