import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';
import AuthStack from './authNavigator';
import MainStack from './mainNavigator';
import {authSelector} from '../redux/reducers/auth/authSelector';

const Stack = createStackNavigator();

/**
 *
 * @returns navigation component
 */
export default function AppNavigator() {
  const isAuthenticated = useSelector(authSelector);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="AuthStack">
          {!isAuthenticated ? (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          ) : (
            <Stack.Screen name="MainStack" component={MainStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
