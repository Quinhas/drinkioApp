import _ from "lodash";
import { Flex, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import useFavorites from "../../hooks/useFavorites";
import { CategoryCard } from "./components/CategoryCard";
import { DrinkCard } from "./components/DrinkCard";

export function Favorites() {
  const { favoritesDrinks, favoritesCategories } = useFavorites();
  return (
    <>
      <Flex
        justify={"space-between"}
        direction={"row"}
        mx={"1.5rem"}
        mt={"3rem"}
        align={"center"}
      >
        <Text fontWeight={"black"} fontSize={"2rem"}>
          Favorites
        </Text>
        {/* <ToggleColorMode /> */}
      </Flex>

      {/* <SearchBar placeholder={"Search Favorites"} /> */}

      <Flex my={"1.5rem"}>
        <Text
          mx={"1.5rem"}
          fontSize={"1.25rem"}
          fontWeight={"bold"}
          mb={"0.5rem"}
        >
          Categories
        </Text>

        <ScrollView
          horizontal
          persistentScrollbar={false}
          showsHorizontalScrollIndicator={false}
        >
          <HStack space={4}>
            {favoritesCategories.map((id) => (
              <CategoryCard
                key={id}
                id={id}
                isFirst={_.first(favoritesCategories) === id}
                isLast={_.last(favoritesCategories) === id}
              />
            ))}
          </HStack>
        </ScrollView>
      </Flex>

      <Flex m={"1.5rem"}>
        <Text fontSize={"1.25rem"} fontWeight={"bold"} mb={"0.5rem"}>
          Drinks
        </Text>

        <VStack space={4}>
          {favoritesDrinks.map((id) => (
            <DrinkCard key={id} id={id} />
          ))}
        </VStack>
      </Flex>
    </>
  );
}
