import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Categories } from ".";
import { CategoryDetails } from "../CategoryDetails";
const { Screen, Navigator } = createNativeStackNavigator();

export function CategoriesStackRoutes() {
  return (
    <Navigator
      initialRouteName="CategoryDefaultPage"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Screen name="CategoryDefaultPage" component={Categories} />
      <Screen
        name="CategoryDetailsPage"
        component={CategoryDetails}
      />
    </Navigator>
  );
}
