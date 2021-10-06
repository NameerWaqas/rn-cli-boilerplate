import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Local
import Main from '../screens/main/main';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  );
}
