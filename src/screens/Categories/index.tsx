import { Flex, ScrollView, Text } from "native-base";
import React from "react";
import { SearchBar } from "../../components/SearchBar";
import { TopCategories } from "../../components/TopCategories";
import { CategoriesList } from "./components/CategoriesList";

export function Categories() {
  return (
    <>
      <ScrollView py={"1rem"} showsVerticalScrollIndicator={false}>
        <Flex
          justify={"space-between"}
          direction={"row"}
          mx={"1.5rem"}
          mt={"2rem"}
          align={"center"}
        >
          <Text fontWeight={"black"} fontSize={"2rem"}>
            Categories
          </Text>
          {/* <ToggleColorMode /> */}
        </Flex>
        <SearchBar />

        <TopCategories />

        <CategoriesList />
      </ScrollView>
    </>
  );
}
