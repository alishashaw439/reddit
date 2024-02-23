


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack, AppStack } from './NavigationStack';
import { linking } from './Linking';
import { useAuth } from './AuthProvider';

const App = () => {
  const { authData } = useAuth()
  return (
      <NavigationContainer linking={linking}>
        { authData ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
  );
};

export default App;