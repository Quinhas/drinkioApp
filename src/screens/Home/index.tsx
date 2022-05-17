import _ from "lodash";
import { Box, Flex, HStack, Image, ScrollView, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { TopCategoryCard } from "../../components/TopCategoryCard";
import drinkioApi, { CategoryProps } from "../../services/DrinkioService";

export function Home() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function getCategories() {
      const _categories = await drinkioApi.getAllCategories({ onlyTop: true });
      setCategories(_categories);
    }
    getCategories();
  }, []);

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
        <SearchBar />

        {/* Today's Drink */}
        <Flex mx={"1.5rem"} mt={"1rem"}>
          <Text fontSize={"1.25rem"} fontWeight={"bold"} mb={"0.5rem"}>
            Today's Drink
          </Text>
          <Box
            w={"100%"}
            height={"12.5rem"}
            borderRadius={"lg"}
            position={"relative"}
            shadow={"2"}
          >
            <Text
              position={"absolute"}
              bottom={"1rem"}
              left={"1.5rem"}
              zIndex={"4"}
              fontWeight={"black"}
              fontSize={"1.5rem"}
              color={"white"}
            >
              Dry Martini
            </Text>
            <Box
              w={"100%"}
              h={"50%"}
              bottom={0}
              zIndex={"3"}
              position={"absolute"}
              borderRadius={"lg"}
              bg={{
                linearGradient: {
                  colors: ["rgba(196, 196, 196, 0)", "rgba(0, 210, 255, 0.6)"],
                },
              }}
            />
            <Box
              w={"100%"}
              h={"100%"}
              zIndex={"2"}
              position={"absolute"}
              borderRadius={"lg"}
              bg={"rgba(0,0,0,0.1)"}
            />
            <Box
              w={"100%"}
              h={"100%"}
              zIndex={"1"}
              position={"absolute"}
              borderRadius={"lg"}
              bg={"rgba(21, 214, 255, 0.3)"}
            />
            <Image
              borderRadius={"lg"}
              resizeMode={"cover"}
              size={"100%"}
              zIndex={"0"}
              alt={"Imagem de um drink"}
              source={{
                uri: "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
              }}
            />
          </Box>
        </Flex>

        {/* Categories */}
        {categories.length > 0 && (
          <Flex mt={"1rem"}>
            <Text
              fontSize={"1.25rem"}
              fontWeight={"bold"}
              mb={"0.5rem"}
              mx={"1.5rem"}
            >
              Top Categories
            </Text>
            <ScrollView
              horizontal
              persistentScrollbar={false}
              showsHorizontalScrollIndicator={false}
            >
              <HStack space={"1rem"}>
                {categories.map((category) => (
                  <TopCategoryCard
                    key={category.id}
                    isFirst={_.first(categories) === category}
                    isLast={_.last(categories) === category}
                    {...category}
                  />
                ))}
              </HStack>
            </ScrollView>
          </Flex>
        )}
      </ScrollView>
    </>
  );
}
