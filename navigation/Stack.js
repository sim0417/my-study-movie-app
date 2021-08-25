import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from '../screens/Movies';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies}></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};
