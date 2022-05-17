import { FontAwesome5 } from "@expo/vector-icons";
import _ from "lodash";
import { Flex, Icon, Skeleton, Text, VStack } from "native-base";
import React from "react";
import { DrinkProps } from "../../../services/DrinkioService";
import { DrinkCard } from "./DrinkCard";

type DrinksListProps = {
  isLoading: boolean;
  drinks?: DrinkProps[];
};

export function DrinksList({ isLoading, drinks }: DrinksListProps) {
  return (
    <Flex mx={"1.5rem"} mt={"1rem"}>
      <Text fontSize={"1.25rem"} fontWeight={"bold"} mb={"0.5rem"}>
        All Drinks
      </Text>
      {drinks && (
        <VStack space={4}>
          {isLoading && (
            <>
              {_.times(10, (i) => {
                return (
                  <Skeleton
                    key={i}
                    h={"4.625rem"}
                    shadow={4}
                    borderRadius={"0.75rem"}
                  />
                );
              })}
            </>
          )}
          {!isLoading && (
            <>
              {drinks.map((drink) => (
                <DrinkCard key={drink.id} {...drink} />
              ))}
            </>
          )}
        </VStack>
      )}
      {!drinks && (
        <Flex px={"1.5rem"} py={"1.5rem"} align={"center"}>
          <Icon
            as={FontAwesome5}
            name="sad-tear"
            size={"5rem"}
            color={"muted.400"}
          />
          <Text fontWeight={"medium"} fontSize={"2rem"} color={"muted.400"}>
            Oops!
          </Text>
          <Text fontSize={"1rem"} color={"muted.400"}>
            It seems that this category does not have any drinks registered.
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
