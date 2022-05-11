import { Flex, Text } from "native-base";
import React from "react";
import { SearchBar } from "../../components/SearchBar";

export function Favorites() {
  return (
    <>
      <Flex justify={"space-between"} direction={"row"} mx={"1.5rem"} mt={"3rem"} align={"center"}>
        <Text fontWeight={"black"} fontSize={"2rem"}>
          Favorites
        </Text>
        {/* <ToggleColorMode /> */}
      </Flex>
      <SearchBar />
    </>
  );
}
