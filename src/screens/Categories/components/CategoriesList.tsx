import _ from "lodash";
import { Flex, Skeleton, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import drinkioApi, { CategoryProps } from "../../../services/DrinkioService";
import { CategoryCard } from "./CategoryCard";

export function CategoriesList() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      const _categories = await drinkioApi.getAllCategories({});
      setCategories(_categories);
      setIsLoading(false);
    }
    getCategories();
  }, []);

  return (
    <Flex mx={"1.5rem"} mt={"1rem"}>
      <Text fontSize={"1.25rem"} fontWeight={"bold"} mb={"0.5rem"}>
        All Categories
      </Text>
      {isLoading && (
        <VStack space={"0.5rem"}>
          {_.times(10, (i) => {
            return (
              <Skeleton
                key={i}
                w={"100%"}
                borderRadius={"0.75rem"}
                shadow={1}
                height={"3.625rem"}
              />
            );
          })}
        </VStack>
      )}
      {!isLoading && (
        <VStack space={"0.5rem"}>
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </VStack>
      )}
    </Flex>
  );
}
