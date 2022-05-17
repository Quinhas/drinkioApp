import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoryDetails } from "../screens/CategoryDetails";
import { DrinkDetails } from "../screens/DrinkDetails";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName={"Tabs"}
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Screen name="Tabs" component={TabRoutes} />
      <Screen name="CategoryDetails" component={CategoryDetails} />
      <Screen name="DrinkDetails" component={DrinkDetails} />
    </Navigator>
  );
}
