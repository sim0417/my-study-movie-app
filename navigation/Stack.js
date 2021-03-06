import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};
