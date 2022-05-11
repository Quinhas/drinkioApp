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
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { INativebaseConfig, NativeBaseProvider } from "native-base";
import React from "react";
import { TabNavigator } from "./src/navigation/TabNavigator";
import { theme } from "./src/theme";

const config: INativebaseConfig = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
  enableRem: true,
  strictMode: "warn",
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
    <NavigationContainer>
      <NativeBaseProvider theme={theme} config={config}>
        <TabNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
