import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, Icon, Image, Skeleton, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { CustomView } from "../../components/CustomView";
import useFavorites from "../../hooks/useFavorites";
import drinkioApi, { CategoryProps } from "../../services/DrinkioService";
import { NotFound } from "../NotFound";
import { DrinksList } from "./components/DrinksList";

type CategoryDetailsParams = {
  id: number;
};

export function CategoryDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<CategoryProps | null>(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as CategoryDetailsParams;
  const { favoritesCategories, updateFavoriteCategory } = useFavorites();

  async function getCategoryDetails() {
    try {
      setIsLoading(true);

      const _category = await drinkioApi.getCategoryDetails({ id });
      setCategory(_category);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCategoryDetails();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Skeleton
          h={"12.5rem"}
          borderBottomRadius={"0.75rem"}
          w={"100%"}
          shadow={4}
        />
        <DrinksList isLoading={isLoading} />
      </View>
    );
  }

  return category ? (
    <CustomView showTabs>
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
            onPress={() => navigation.goBack()}
          >
            <Icon
              as={FontAwesome}
              name={
                favoritesCategories?.find((id) => id === category.id)
                  ? "star"
                  : "star-o"
              }
              color={"primaryApp.500"}
              size={"1rem"}
              onPress={() => updateFavoriteCategory(category.id)}
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
            cache: "force-cache",
          }}
        />
      </Box>
      <DrinksList isLoading={isLoading} drinks={category?.drinks} />
    </CustomView>
  ) : (
    <CustomView showTabs>
      <Button
        size={"2rem"}
        backgroundColor={"white"}
        borderRadius={"full"}
        mt={"0.75rem"}
        ml={"1.5rem"}
        onPress={navigation.goBack}
      >
        <Icon
          as={FontAwesome}
          name={"arrow-left"}
          color={"primaryApp.500"}
          size={"1rem"}
        />
      </Button>
      <NotFound />
    </CustomView>
  );
}
