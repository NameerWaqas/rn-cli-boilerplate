import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/main/main';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  );
}
