import { FontAwesome5 } from '@expo/vector-icons';
import _ from 'lodash';
import { Badge, Button, Flex, HStack, Icon, Skeleton, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { DrinkProps } from '../../../services/DrinkioService';
import { DrinkCard } from './DrinkCard';

type DrinksListProps = {
  isLoading: boolean;
  drinks: DrinkProps[];
};

export function DrinksList({ isLoading, drinks = [] }: DrinksListProps) {
  const [showAlcoholic, setShowAlcoholic] = useState(true);
  const [showNonAlcoholic, setShowNonAlcoholic] = useState(true);
  const [drinksList, setDrinksList] = useState(drinks ?? []);

  useEffect(() => {
    let updatedList = drinks;
    if (!showAlcoholic) {
      updatedList = updatedList.filter((drink) =>
        drink.alcoholic !== true);
    }
    if (!showNonAlcoholic) {
      updatedList = updatedList.filter((drink) =>
        drink.alcoholic !== false);
    }
    setDrinksList(updatedList);
  }, [showAlcoholic, showNonAlcoholic]);

  return (
    <Flex m='1.5rem'>
      <Text
        fontSize='1.25rem'
        fontWeight='bold'
      >
        All Drinks
      </Text>
      <Flex alignItems='center' justify='space-between' direction='row' my='0.5rem'>
        <Text color='muted.500'>
          Filter:
        </Text>
        <HStack direction='row' space={4}>
          <Button
            as={Badge}
            h='1.5rem'
            variant={showAlcoholic ? 'solid' : 'outline'}
            disabled={isLoading}
            borderRadius='4px'
            _text={{
              fontWeight: 'bold',
              fontSize: '0.75rem',
            }}
            textTransform='uppercase'
            colorScheme='red'
            onPress={() =>
              setShowAlcoholic((prevState) =>
                !prevState)}
          >
            Alcoholic
          </Button>
          <Button
            as={Badge}
            h='1.5rem'
            variant={showNonAlcoholic ? 'solid' : 'outline'}
            disabled={isLoading}
            borderRadius='4px'
            _text={{
              fontWeight: 'bold',
              fontSize: '0.75rem',
            }}
            textTransform='uppercase'
            colorScheme='green'
            onPress={() =>
              setShowNonAlcoholic((prevState) =>
                !prevState)}
          >
            Non Alcoholic
          </Button>

        </HStack>
      </Flex>
      {isLoading && (
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
      )}
      {!isLoading &&
        (drinksList ? (
          <VStack space={4}>
            {drinksList.map((drink) =>
              (
                <DrinkCard
                  key={drink.id}
                  {...drink}
                />
              ))}
          </VStack>
        ) : (
          <Flex
            px='1.5rem'
            py='1.5rem'
            align='center'
          >
            <Icon
              as={FontAwesome5}
              name='sad-tear'
              size='5rem'
              color='muted.400'
            />
            <Text
              fontWeight='medium'
              fontSize='2rem'
              color='muted.400'
            >
              Oops!
            </Text>
            <Text
              fontSize='1rem'
              color='muted.400'
            >
              It seems that this category does not have any drinks registered.
            </Text>
          </Flex>
        ))}
    </Flex>
  );
}
