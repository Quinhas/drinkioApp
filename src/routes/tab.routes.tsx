import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import React from "react";
import { CategoriesStackRoutes } from "../screens/Categories/categories.routes";
import { Favorites } from "../screens/Favorites";
import { Home } from "../screens/Home";

const routes = [
  {
    name: "FavoritesPage",
    title: "Favorites",
    component: Favorites,
    iconFamily: FontAwesome,
    icon: "star",
  },
  {
    name: "HomePage",
    title: "Home",
    component: Home,
    iconFamily: FontAwesome5,
    icon: "cocktail",
  },
  {
    name: "CategoriesPage",
    title: "Categories",
    component: CategoriesStackRoutes,
    iconFamily: FontAwesome5,
    icon: "buffer",
  },
];

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "primaryApp.500",
        tabBarInactiveTintColor: "gray.100",
        headerShown: false,
      })}
      initialRouteName="CategoriesPage"
    >
      {routes.map((_route) => (
        <Screen
          key={_route.name}
          name={_route.name}
          component={_route.component}
          options={({ route }) => ({
            tabBarIcon: ({ size, color }) => {
              return (
                <Icon
                  as={_route.iconFamily}
                  name={_route.icon}
                  size={size}
                  color={color}
                />
              );
            },
            title: _route.title,
          })}
        />
      ))}
    </Navigator>
  );
}
