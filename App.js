import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFont = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
      require('./assets/splash.png'),
    ]);
    const fonts = cacheFont([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
  );
}
