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
} from "@expo-google-fonts/red-hat-display";
import { LinearGradient } from "expo-linear-gradient";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Home from "./src/screens/Home";
import { theme } from "./src/theme";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function App() {
  useFonts({
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

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Home />
    </NativeBaseProvider>
  );
}
