import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoryDetails } from "../screens/CategoryDetails";
import { DrinkDetails } from "../screens/DrinkDetails";
import { SearchResponse } from "../screens/SearchResponse";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen, Group } = createNativeStackNavigator();

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
      <Group
        screenOptions={{
          presentation: "transparentModal",
        }}
      >
        <Screen name="SearchResponse" component={SearchResponse} />
      </Group>
    </Navigator>
  );
}
