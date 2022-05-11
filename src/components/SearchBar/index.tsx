import { FontAwesome5 } from "@expo/vector-icons";
import { Icon, Input } from "native-base";
import React from "react";

export function SearchBar() {
  // TODO: Make functional search bar
  return <></>;
  return (
    <Input
      mx={"1.5rem"}
      mt={"0.75rem"}
      variant={"filled"}
      borderRadius={"0.75rem"}
      bgColor={"white"}
      placeholder={"Search categories"}
      fontSize={"0.9375rem"}
      fontWeight={"medium"}
      h={"2.25rem"}
      py={"0"}
      InputLeftElement={<Icon as={FontAwesome5} name="search" size={"1rem"} px={"0.875rem"} />}
    />
  );
}
