import { Box, Flex, IFlexProps, Image, Text } from "native-base";
import React from "react";

type CategoryCardProps = {
  desc: string;
  backgroundImage: string;
};

export default function CategoryCard({
  desc,
  backgroundImage,
  ...rest
}: CategoryCardProps & IFlexProps) {
  return (
    <Flex
      h={"6.25rem"}
      w={"12.5rem"}
      position={"relative"}
      borderRadius={"lg"}
      align={"center"}
      justify={"center"}
      shadow={'2'}
      {...rest}
    >
      <Text
        position={"absolute"}
        zIndex={"4"}
        fontWeight={"black"}
        fontSize={"1.5rem"}
        maxW={"70%"}
        textAlign={"center"}
        color={"white"}
      >
        {desc}
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
        source={{
          uri: backgroundImage,
        }}
      />
    </Flex>
  );
}
