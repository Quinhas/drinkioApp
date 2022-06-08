import { FontAwesome5 } from '@expo/vector-icons';
import _ from 'lodash';
import { Flex, Icon, Skeleton, Text, VStack } from 'native-base';
import React from 'react';
import { VirtualizedList } from 'react-native';
import { DrinkProps } from '../../../services/DrinkioService';
import { DrinkCard } from './DrinkCard';

type DrinksListProps = {
  isLoading: boolean;
  drinks: DrinkProps[];
};

export function DrinksList({ isLoading, drinks = [] }: DrinksListProps) {
  if (isLoading) {
    return (
      <VStack space={4}>
        {_.times(10, (i) =>
          (
            <Skeleton
              key={i}
              h='4.625rem'
              shadow={4}
              borderRadius='0.75rem'
            />
          ))}
      </VStack>
    );
  }

  if (!drinks || drinks.length === 0) {
    return (
      <Flex
        justify='center'
        align='center'
        mt='1.5rem'
      >
        <Icon
          as={FontAwesome5}
          name='sad-tear'
          size='5.25rem'
          color='muted.500'
        />
        <Text
          fontWeight='medium'
          color='muted.500'
          fontSize='1.25rem'
          mt='1rem'
        >
          No drinks were found.
        </Text>
      </Flex>
    );
  }

  return (
    <VirtualizedList<DrinkProps>
      data={drinks}
      renderItem={({ item }) =>
        (
          <DrinkCard
            key={item.id}
            {...item}
          />
        )}
      keyExtractor={(item) =>
        String(item.id)}
      getItemCount={() =>
        drinks.length}
      getItem={(data, index) =>
        drinks[index]}
    />
  );
}
