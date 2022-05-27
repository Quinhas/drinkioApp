import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Categories } from "../screens/Categories";
import { CategoryDetails } from "../screens/CategoryDetails";
import { DrinkDetails } from "../screens/DrinkDetails";
import { Favorites } from "../screens/Favorites";
import { Home } from "../screens/Home";
import { SearchResponse } from "../screens/SearchResponse";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName={"Home"}
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Screen name="HomePage" component={Home} />
      <Screen name="CategoriesPage" component={Categories} />
      <Screen name="FavoritesPage" component={Favorites} />
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
