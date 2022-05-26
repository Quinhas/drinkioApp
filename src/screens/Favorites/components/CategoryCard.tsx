import { useNavigation } from "@react-navigation/native";
import { Box, Flex, Image, Pressable, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import drinkioApi, { CategoryProps } from "../../../services/DrinkioService";
import { scaleAnimation } from "../../../utils/animations/scale";

type TopCategoryCardProps = {
  isFirst: boolean;
  isLast: boolean;
  id: number;
};

export function CategoryCard({ id, isFirst, isLast }: TopCategoryCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<CategoryProps | undefined>(
    undefined
  );
  const animation = scaleAnimation(1, 0.98, 100);
  const navigation = useNavigation();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const _category = await drinkioApi.getCategoryDetails({ id });
      setCategory(_category);
      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <></>;
  }

  if (!category) {
    return <></>;
  }

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("CategoryDetails", {
          id: id,
        })
      }
      onPressIn={animation.onPressIn}
      onPressOut={animation.onPressOut}
    >
      <Animated.View style={animation.style}>
        <Flex
          h={"6.25rem"}
          w={"12.5rem"}
          position={"relative"}
          borderRadius={"lg"}
          align={"center"}
          justify={"center"}
          shadow={"2"}
          ml={isFirst ? "1.5rem" : 0}
          mr={isLast ? "1.5rem" : 0}
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
            {category.desc}
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
              cache: "force-cache"
            }}
          />
        </Flex>
      </Animated.View>
    </Pressable>
  );
}
