/* eslint-disable camelcase */
import {
  RedHatDisplay_300Light,
  RedHatDisplay_300Light_Italic,
  RedHatDisplay_400Regular,
  RedHatDisplay_400Regular_Italic,
  RedHatDisplay_500Medium,
  RedHatDisplay_500Medium_Italic,
  RedHatDisplay_600SemiBold,
  RedHatDisplay_600SemiBold_Italic,
  RedHatDisplay_700Bold,
  RedHatDisplay_700Bold_Italic,
  RedHatDisplay_800ExtraBold,
  RedHatDisplay_800ExtraBold_Italic,
  RedHatDisplay_900Black,
  RedHatDisplay_900Black_Italic,
  useFonts
} from '@expo-google-fonts/red-hat-display';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { INativebaseConfig, NativeBaseProvider } from 'native-base';
import React from 'react';
import { FavoritesContextProvider } from './src/contexts/FavoritesContext';
import { Routes } from './src/routes';
import { theme } from './src/theme';

const config: INativebaseConfig = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
  enableRem: true,
  strictMode: 'warn',
};

export default function App() {
  const [loadedFonts] = useFonts({
    RedHatDisplay_300Light,
    RedHatDisplay_300Light_Italic,
    RedHatDisplay_400Regular,
    RedHatDisplay_400Regular_Italic,
    RedHatDisplay_500Medium,
    RedHatDisplay_500Medium_Italic,
    RedHatDisplay_600SemiBold,
    RedHatDisplay_600SemiBold_Italic,
    RedHatDisplay_700Bold,
    RedHatDisplay_700Bold_Italic,
    RedHatDisplay_800ExtraBold,
    RedHatDisplay_800ExtraBold_Italic,
    RedHatDisplay_900Black,
    RedHatDisplay_900Black_Italic,
  });

  if (!loadedFonts) {
    return (
      <AppLoading />
    );
  }

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <FavoritesContextProvider>
        <Routes />
      </FavoritesContextProvider>
    </NativeBaseProvider>
  );
}
