/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import StackNavigator from './routes/AppRoutes';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import * as setup from './setup';
import axios from 'axios';

// setting axios
setup.setupAxios(axios);

function App() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
