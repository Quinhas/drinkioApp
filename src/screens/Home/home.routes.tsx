import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from ".";
const { Screen, Navigator } = createNativeStackNavigator();

export function HomeStackRoutes() {
  return (
    <Navigator
      initialRouteName="HomeDefaultPage"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Screen name="HomeDefaultPage" component={Home} />
    </Navigator>
  );
}
