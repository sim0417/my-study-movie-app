import React, { useLayoutEffect } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tab = createBottomTabNavigator();
const TabOptions = ({ route }) => {
  return {
    headerStyle: {
      backgroundColor: 'black',
      shadowColor: 'black',
      borderBottomColor: 'black',
    },
    tabBarStyle: {
      backgroundColor: 'black',
      borderTopColor: 'black',
    },
    headerTintColor: 'white',
    headerBackTitleVisible: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ focused }) => {
      let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
      if (route.name === 'Movies') {
        iconName += 'film';
      } else if (route.name === 'TV') {
        iconName += 'tv';
      } else if (route.name === 'Search') {
        iconName += 'search';
      } else if (route.name === 'Favorites') {
        iconName += 'heart';
      }

      return <Ionicons name={iconName} color={focused ? 'white' : 'gray'} size={26} />;
    },
  };
};

export default ({ route, navigation }) => {
  useLayoutEffect(() => {
    const { state } = route;
    const routeName = state?.routeNames[state.index] || 'Movies';
    navigation.setOptions({ title: routeName, headerShown: false });
  }, [route]);

  return (
    <Tab.Navigator screenOptions={TabOptions}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favs} />
    </Tab.Navigator>
  );
};
