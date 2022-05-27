import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon, Pressable, useColorModeValue } from "native-base";
import React from "react";
import { Animated } from "react-native";
import { scaleAnimation } from "../../../utils/animations/scale";

type TabButtonProps = {
  id: string;
  title: string;
  iconFamily: any;
  iconName: string;
  iconNameOutline: string;
};

export function TabButton({
  id,
  title,
  iconFamily,
  iconName,
  iconNameOutline,
}: TabButtonProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const active = route.name === id;
  const animation = scaleAnimation(1, 0.97, 100);

  return (
    <Pressable
      display={"flex"}
      w={"1/3"}
      aria-label={title}
      alignItems={"center"}
      justifyContent={"center"}
      borderBottomWidth={route.name === id ? "0.125rem" : "0"}
      borderBottomColor={useColorModeValue("primaryApp.500", "primaryApp.300")}
      borderBottomRadius={"0.125rem"}
      onPress={() => navigation.navigate(id)}
      onPressIn={animation.onPressIn}
      onPressOut={animation.onPressOut}
    >
      <Animated.View style={animation.style}>
        <Icon
          as={iconFamily}
          name={active ? iconName : iconNameOutline}
          size={"1.5625rem"}
          color={
            active
              ? useColorModeValue("primaryApp.500", "primaryApp.200")
              : useColorModeValue("primaryApp.300", "primaryApp.600")
          }
          solid={active ? true : false}
        />
      </Animated.View>
    </Pressable>
  );
}
