import { Box, Flex, Image, Text } from "native-base";
import React from "react";
import { Animated, Pressable } from "react-native";
import { scaleAnimation } from "../../utils/animations/scale";

export function TodaysCategory() {
  const animation = scaleAnimation(1, 0.98, 100);
  return (
    <Flex mx={"1.5rem"} mt={"1rem"}>
      <Text fontSize={"1.25rem"} fontWeight={"bold"} mb={"0.5rem"}>
        Today's Category
      </Text>
      <Pressable
        onPressIn={animation.onPressIn}
        onPressOut={animation.onPressOut}
      >
        <Animated.View style={animation.style}>
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
                uri: "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
                cache: "force-cache"
              }}
            />
          </Box>
        </Animated.View>
      </Pressable>
    </Flex>
  );
}
