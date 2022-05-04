import { Ionicons } from "@expo/vector-icons";
import { IconButton, useColorMode, useColorModeValue } from "native-base";
import React from "react";

export function ToggleColorMode() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      colorScheme={"primaryApp"}
      borderRadius={"full"}
      variant={"subtle"}
      onPress={toggleColorMode}
      _icon={{
        as: Ionicons,
        name: useColorModeValue("moon", "sunny"),
        fontSize: "1.5rem",
      }}
      bgColor={"primaryApp.400"}
      _pressed={{
        bgColor: "primaryApp.600",
      }}
    />
  );
}
