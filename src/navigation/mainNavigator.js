import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Local
import {HomeContainer} from '../screens';

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeContainer} />
    </Tab.Navigator>
  );
}
