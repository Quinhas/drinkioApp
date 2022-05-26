import { FontAwesome5 } from "@expo/vector-icons";
import _ from "lodash";
import { FlatList, Flex, Icon, Skeleton, Text, VStack } from "native-base";
import React from "react";
import { CategoryProps } from "../../../services/DrinkioService";
import { CategoryCard } from "./CategoryCard";

type CategoriesListProps = {
  isLoading: boolean;
  categories?: CategoryProps[];
};

export function CategoriesList({ isLoading, categories }: CategoriesListProps) {
  if (isLoading) {
    return (
      <VStack space={4}>
        {_.times(10, (i) => (
          <Skeleton
            key={i}
            h={"4.625rem"}
            shadow={4}
            borderRadius={"0.75rem"}
          />
        ))}
      </VStack>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <Flex justify={"center"} align={"center"} mt={"1.5rem"}>
        <Icon
          as={FontAwesome5}
          name={"sad-tear"}
          size={"5.25rem"}
          color={"muted.500"}
        />
        <Text
          fontWeight={"medium"}
          color={"muted.500"}
          fontSize={"1.25rem"}
          mt={"1rem"}
        >
          Nenhuma categoria foi encontrado.
        </Text>
      </Flex>
    );
  }

  return (
    <FlatList<CategoryProps>
      data={categories}
      renderItem={({ item }) => <CategoryCard key={item.id} {...item} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
}
