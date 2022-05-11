import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import * as React from "react";
import { Categories } from "../../screens/Categories";
import { Favorites } from "../../screens/Favorites";
import { Home } from "../../screens/Home";

const Tab = createBottomTabNavigator();

const routes = [
  {
    name: "favorites",
    title: "Favorites",
    component: Favorites,
    iconFamily: FontAwesome,
    icon: "star",
  },
  {
    name: "home",
    title: "Home",
    component: Home,
    iconFamily: FontAwesome5,
    icon: "cocktail",
  },
  {
    name: "categories",
    title: "Categories",
    component: Categories,
    iconFamily: FontAwesome5,
    icon: "buffer",
  },
];

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "primaryApp.500",
        tabBarInactiveTintColor: "gray.100",
        headerShown: false,
      })}
      initialRouteName="categories"
    >
      {routes.map((_route) => (
        <Tab.Screen
          key={_route.name}
          name={_route.name}
          component={_route.component}
          options={({ route }) => ({
            tabBarIcon: ({ size, color }) => {
              return <Icon as={_route.iconFamily} name={_route.icon} size={size} color={color} />;
            },
            title: _route.title,
          })}
        />
      ))}
    </Tab.Navigator>
  );
}
