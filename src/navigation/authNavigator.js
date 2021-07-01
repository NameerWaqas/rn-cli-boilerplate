import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="screen">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
