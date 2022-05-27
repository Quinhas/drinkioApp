import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import type { } from "@react-navigation/routers";
import { Flex, useColorModeValue } from "native-base";
import React from "react";
import { TabButton } from "./components/TabButton";
type IconProps = {
  size: string;
  color: string;
  focused: boolean;
};

type RouteProps = {
  id: string;
  title: string;
  iconFamily: any;
  iconName: string;
  iconNameOutline: string;
};

export function Tabs() {
  const routes: RouteProps[] = [
    {
      id: "FavoritesPage",
      title: "Favorites",
      iconFamily: FontAwesome5,
      iconName: "star",
      iconNameOutline: "star",
    },
    {
      id: "HomePage",
      title: "Home",
      iconFamily: Ionicons,
      iconName: "md-beer",
      iconNameOutline: "md-beer-outline",
    },
    {
      id: "CategoriesPage",
      title: "Categories",
      iconFamily: FontAwesome5,
      iconName: "list-alt",
      iconNameOutline: "list-alt",
    },
  ];

  return (
    <Flex
      minH={"3.5rem"}
      direction={"row"}
      w={"100%"}
      backgroundColor={useColorModeValue("white", "black")}
      zIndex={9999}
      borderTopWidth={"1px"}
      borderTopColor={useColorModeValue("muted.400", "muted.600")}
    >
      {routes.map((route) => (
        <TabButton key={route.id} {...route} />
      ))}
    </Flex>
  );
}
