import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import React from "react";
import { Categories } from "../screens/Categories";
import { Favorites } from "../screens/Favorites";
import { Home } from "../screens/Home";

type RouteProps = {
  name: string;
  title: string;
  component: () => JSX.Element;
  icon: ({
    size,
    color,
    focused,
  }: {
    size: number;
    color: string;
    focused: boolean;
  }) => JSX.Element;
};

const routes: RouteProps[] = [
  {
    name: "FavoritesPage",
    title: "Favorites",
    component: Favorites,
    icon: ({ size, color, focused }) => {
      return (
        <Icon
          as={FontAwesome5}
          name={"star"}
          size={size}
          color={color}
          solid={focused}
          outline={!focused}
        />
      );
    },
  },
  {
    name: "HomePage",
    title: "Home",
    component: Home,
    icon: ({ size, color, focused }) => {
      return (
        <Icon
          as={Ionicons}
          name={focused ? "md-beer" : "md-beer-outline"}
          size={size}
          color={color}
        />
      );
    },
  },
  {
    name: "CategoriesPage",
    title: "Categories",
    component: Categories,
    icon: ({ size, color, focused }) => {
      return (
        <Icon
          as={FontAwesome5}
          name={"list-alt"}
          size={size}
          color={color}
          solid={focused}
          outline={!focused}
        />
      );
    },
  },
];

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "primaryApp.500",
        tabBarInactiveTintColor: "primaryApp.200",
        headerShown: false,
      })}
      initialRouteName="HomePage"
    >
      {routes.map((_route) => (
        <Screen
          key={_route.name}
          name={_route.name}
          component={_route.component}
          options={({ route }) => ({
            tabBarIcon: _route.icon,
            title: _route.title,
          })}
        />
      ))}
    </Navigator>
  );
}
