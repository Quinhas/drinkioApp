import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, Icon, Image, Text } from "native-base";
import React, { useEffect, useState } from "react";
import drinkioApi, { CategoryProps } from "../../../services/DrinkioService";

type CategoryDetailsParams = {
  id: number;
};

export function CategoryDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<CategoryProps | null>(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as CategoryDetailsParams;

  async function getCategoryDetails() {
    setIsLoading(true);

    const _category = await drinkioApi.getCategoryDetails({ id });
    setCategory(_category);

    setIsLoading(false);
  }

  useEffect(() => {
    getCategoryDetails();
  }, []);

  if (isLoading || !category) {
    return (
      <>
        <Text>Carregando...</Text>
        <Button onPress={navigation.goBack}>Voltar</Button>
      </>
    );
  }

  return (
    <>
      <Box
        minH={"12.5rem"}
        borderBottomRadius={"0.75rem"}
        w={"100%"}
        shadow={4}
        position={"relative"}
      >
        <Box w={"100%"} h={"100%"} zIndex={10} position={"absolute"}>
          <Button
            size={"2rem"}
            backgroundColor={"white"}
            borderRadius={"full"}
            position={"absolute"}
            top={"0.75rem"}
            left={"1.5rem"}
            onPress={navigation.goBack}
          >
            <Icon
              as={FontAwesome}
              name={"arrow-left"}
              color={"primaryApp.500"}
              size={"1rem"}
            />
          </Button>
          <Button
            size={"2rem"}
            backgroundColor={"white"}
            borderRadius={"full"}
            position={"absolute"}
            top={"0.75rem"}
            right={"1.5rem"}
            onPress={navigation.goBack}
          >
            <Icon
              as={FontAwesome}
              name={"star"}
              color={"primaryApp.500"}
              size={"1rem"}
            />
          </Button>
          <Text
            position={"absolute"}
            bottom={"0.75rem"}
            left={"1.5rem"}
            fontSize={"2rem"}
            fontWeight={"black"}
            color={"white"}
          >
            {category.desc}
          </Text>
        </Box>
        <Box
          w={"100%"}
          h={"100%"}
          position={"absolute"}
          zIndex={2}
          borderBottomRadius={"lg"}
          bg={"rgba(0,0,0,0.5)"}
        />
        <Box
          w={"100%"}
          h={"80%"}
          bottom={0}
          position={"absolute"}
          borderBottomRadius={"0.75rem"}
          zIndex={1}
          bg={{
            linearGradient: {
              colors: ["rgba(196, 196, 196, 0)", "rgba(0, 210, 255, 0.6)"],
            },
          }}
        />
        <Image
          borderBottomRadius={"0.75rem"}
          resizeMode={"cover"}
          size={"100%"}
          alt={"Imagem de um drink"}
          source={{
            uri: category.thumb,
          }}
        />
      </Box>
    </>
  );
}