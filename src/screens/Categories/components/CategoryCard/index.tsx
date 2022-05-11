import { Flex, Image, Pressable, Text } from "native-base";
import React from "react";
import { Animated } from "react-native";
import { scaleAnimation } from "../../../../utils/animations/scale";
import { capitalizeOnlyFirstLetter } from "../../../../utils/CapitalizeOnlyFirstLetter";

type CategoryCardProps = {
  id: number;
  desc: string;
  thumb: string;
  createdAt: string;
  updatedAt: string;
  onPress: () => void;
};

export function CategoryCard({ id, desc, thumb, onPress }: CategoryCardProps) {
  const animation = scaleAnimation(1, 0.98, 100);

  return (
    <Pressable onPress={onPress} onPressIn={animation.onPressIn} onPressOut={animation.onPressOut}>
      <Animated.View style={animation.style}>
        <Flex
          w={"100%"}
          direction={"row"}
          align={"center"}
          p={"1rem"}
          bg={"white"}
          borderRadius={"0.75rem"}
          shadow={1}
          height={"3.625rem"}
          grow={1}
        >
          <Image
            borderRadius={"lg"}
            resizeMode={"cover"}
            size={"2.25rem"}
            style={{
              aspectRatio: 1 / 1,
            }}
            zIndex={"0"}
            alt={"Imagem de um drink"}
            source={{
              uri: thumb,
            }}
          />
          <Text fontWeight={"black"} ml={"0.5rem"}>
            {capitalizeOnlyFirstLetter(desc)}
          </Text>
        </Flex>
      </Animated.View>
    </Pressable>
  );
}
