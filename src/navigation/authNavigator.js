import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Local
import {LoginContainer, RegisterContainer} from '../screens';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Register" component={RegisterContainer} />
    </Stack.Navigator>
  );
}
