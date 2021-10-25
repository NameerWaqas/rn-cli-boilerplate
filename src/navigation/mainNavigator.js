import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeContainer} from '../screens';
// Local

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
  );
}
