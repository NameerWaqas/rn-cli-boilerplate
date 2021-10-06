import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Local
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
