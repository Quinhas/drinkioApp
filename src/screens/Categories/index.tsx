import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Flex,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack
} from "native-base";
import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import { SearchBar } from "../../components/SearchBar";
import drinkioApi from "../../services/DrinkioService";
import { scaleAnimation } from "../../utils/animations/scale";
import { capitalizeOnlyFirstLetter } from "../../utils/CapitalizeOnlyFirstLetter";
import { CategoryCard } from "./components/CategoryCard";

type Category = {
  id: number;
  desc: string;
  thumb: string;
  createdAt: string;
  updatedAt: string;
};

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [topCategories, setTopCategories] = useState<Category[]>([]);
  const todayCategoryAnimation = scaleAnimation(1, 0.98, 100);
  const navigation = useNavigation();

  useEffect(() => {
    async function getCategories() {
      const _categories = await drinkioApi.getAllCategories({});
      setCategories(_categories);
    }
    async function getTopCategories() {
      const _categories = await drinkioApi.getAllCategories({ onlyTop: true });
      setTopCategories(_categories);
    }
    getTopCategories();
    getCategories();
  }, []);

  function goToCategoryDetails(id: number) {
    navigation.navigate("CategoryDetailsPage", { id });
  }

  return (
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

      {/* Today's Drink */}
      <Flex mx={"1.5rem"} mt={"1rem"}>
        <Text fontSize={"1.25rem"} fontWeight={"bold"} mb={"0.5rem"}>
          Today's Category
        </Text>
        <Pressable
          onPressIn={todayCategoryAnimation.onPressIn}
          onPressOut={todayCategoryAnimation.onPressOut}
        >
          <Animated.View style={todayCategoryAnimation.style}>
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
                Ordinary Drinks
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
                    colors: [
                      "rgba(196, 196, 196, 0)",
                      "rgba(0, 210, 255, 0.6)",
                    ],
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
                  uri: "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
                }}
              />
            </Box>
          </Animated.View>
        </Pressable>
      </Flex>

      {/* Top Categories */}
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
          <HStack space="1rem">
            {topCategories &&
              topCategories.map((category) => (
                <Flex
                  key={category.desc}
                  h={"6.25rem"}
                  w={"12.5rem"}
                  position={"relative"}
                  borderRadius={"lg"}
                  align={"center"}
                  justify={"center"}
                  shadow={"2"}
                  mr={
                    topCategories[topCategories.length - 1] === category
                      ? "1.5rem"
                      : 0
                  }
                  ml={[...topCategories].shift() === category ? "1.5rem" : 0}
                >
                  <Text
                    position={"absolute"}
                    zIndex={"4"}
                    fontWeight={"black"}
                    fontSize={"1.5rem"}
                    maxW={"70%"}
                    textAlign={"center"}
                    color={"white"}
                    adjustsFontSizeToFit={true}
                    allowFontScaling={true}
                    maxFontSizeMultiplier={1}
                    minimumFontScale={0.3}
                  >
                    {capitalizeOnlyFirstLetter(category.desc)}
                  </Text>
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
                    zIndex={"0"}
                    size={"100%"}
                    alt={"Imagem de um drink"}
                    source={{
                      uri: category.thumb,
                    }}
                  />
                </Flex>
              ))}
          </HStack>
        </ScrollView>
      </Flex>

      {/* All categories */}
      {categories && (
        <Flex mx={"1.5rem"} mt={"1rem"}>
          <Text fontSize={"1.25rem"} fontWeight={"bold"} mb={"0.5rem"}>
            All Categories
          </Text>
          <VStack space={"0.5rem"}>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                onPress={() => goToCategoryDetails(category.id)}
                {...category}
              />
            ))}
          </VStack>
        </Flex>
      )}
    </ScrollView>
  );
}
