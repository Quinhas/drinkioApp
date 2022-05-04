import { FontAwesome5 } from "@expo/vector-icons";
import { Box, Flex, HStack, Icon, Image, Input, Text } from "native-base";
import React from "react";
import CategoryCard from "../components/CategoryCard";

const categories = [
  {
    desc: "Ordinary Drinks",
    bgImage:
      "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
  },
  {
    desc: "Cocktail",
    bgImage:
      "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
  },
  {
    desc: "Shake",
    bgImage:
      "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
  },
  {
    desc: "Other/Unknown",
    bgImage:
      "https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg",
  },
];

export default function Home() {
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
          Home
        </Text>
        {/* <ToggleColorMode /> */}
      </Flex>
      <Input
        mx={"1.5rem"}
        mt={"1rem"}
        variant={"filled"}
        placeholder={"Search drinks"}
        fontSize={"1rem"}
        fontWeight={"medium"}
        InputLeftElement={
          <Icon as={FontAwesome5} name="search" size={"1rem"} px={"0.875rem"} />
        }
      />

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
          shadow={'2'}
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
            source={{
              uri: "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
            }}
          />
        </Box>
      </Flex>

      {/* Categories */}
      <Flex mt={"1rem"}>
        <Text
          fontSize={"1.25rem"}
          fontWeight={"bold"}
          mb={"0.5rem"}
          mx={"1.5rem"}
        >
          Categories
        </Text>
        <HStack maxW={"100%"} overflow={"auto"} space={"1rem"}>
          {categories &&
            categories.map((category) => (
              <CategoryCard
                key={category.desc}
                desc={category.desc}
                backgroundImage={category.bgImage}
                mr={categories[categories.length - 1] === category ? "1.5rem" : 0}
                ml={[...categories].shift() === category ? "1.5rem" : 0}
              />
            ))}
        </HStack>
      </Flex>
    </>
  );
}
