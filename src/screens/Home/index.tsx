import { Flex, ScrollView, Text } from "native-base";
import React from "react";
import { SearchBar } from "../../components/SearchBar";
import { TopCategories } from "../../components/TopCategories";

export function Home() {
  return (
    <>
      <ScrollView py={"1rem"} minH={"100vh"}>
        <Flex
          justify={"space-between"}
          direction={"row"}
          mx={"1.5rem"}
          mt={"2rem"}
          align={"center"}
        >
          <Text fontWeight={"black"} fontSize={"2rem"}>
            Home
          </Text>
          {/* <ToggleColorMode /> */}
        </Flex>
        <SearchBar placeholder={"Search drinks or categories"} />

        {/* <TodaysDrink /> */}

        <TopCategories />
      </ScrollView>
    </>
  );
}
