import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
// Local
import AuthStack from './authNavigator';
import MainStack from './mainNavigator';
import {authSelector} from '../redux/reducers/auth/authSelector';

const Stack = createNativeStackNavigator();

/**
 *
 * @returns navigation component
 */
export default function AppNavigator() {
  const isAuthenticated = useSelector(authSelector);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="AuthStack">
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
