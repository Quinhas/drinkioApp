import { FontAwesome5 } from '@expo/vector-icons';
import _ from 'lodash';
import { Flex, HStack, Icon, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { CustomView } from '../../components/CustomView';
import useFavorites from '../../hooks/useFavorites';
import { CategoryCard } from './components/CategoryCard';
import { DrinkCard } from './components/DrinkCard';

export function Favorites() {
  const { favoritesDrinks, favoritesCategories } = useFavorites();
  return (
    <CustomView showTabs>
      <Flex
        justify='space-between'
        direction='row'
        mx='1.5rem'
        mt='3rem'
        align='center'
      >
        <Text
          fontWeight='black'
          fontSize='2rem'
        >
          Favorites
        </Text>
        {/* <ToggleColorMode /> */}
      </Flex>

      {/* <SearchBar placeholder={"Search Favorites"} /> */}

      <Flex my='1.5rem'>
        <Text
          mx='1.5rem'
          fontSize='1.25rem'
          fontWeight='bold'
          mb='0.5rem'
        >
          Categories
        </Text>

        {favoritesCategories.length > 0 ? (
          <ScrollView
            horizontal
            persistentScrollbar={false}
            showsHorizontalScrollIndicator={false}
          >
            <HStack space={4}>
              {favoritesCategories.map((id) =>
                (
                  <CategoryCard
                    key={id}
                    id={id}
                    isFirst={_.first(favoritesCategories) === id}
                    isLast={_.last(favoritesCategories) === id}
                  />
                ))}
            </HStack>
          </ScrollView>
        ) : (
          <Flex
            justify='center'
            align='center'
            mx='1.5rem'
            direction='row'
          >
            <Icon
              as={FontAwesome5}
              name='sad-tear'
              size='2.25rem'
              color='muted.500'
            />
            <Text
              fontWeight='medium'
              color='muted.500'
              fontSize='1.25rem'
              ml='1rem'
            >
              You don&apos;t have any favorite categories.
            </Text>
          </Flex>
        )}
      </Flex>

      <Flex m='1.5rem'>
        <Text
          fontSize='1.25rem'
          fontWeight='bold'
          mb='0.5rem'
        >
          Drinks
        </Text>

        {favoritesDrinks.length > 0 ? (
          <VStack space={4}>
            {favoritesDrinks.map((id) =>
              (
                <DrinkCard
                  key={id}
                  id={id}
                />
              ))}
          </VStack>
        ) : (
          <Flex
            justify='center'
            align='center'
            direction='row'
          >
            <Icon
              as={FontAwesome5}
              name='sad-tear'
              size='2.25rem'
              color='muted.500'
            />
            <Text
              fontWeight='medium'
              color='muted.500'
              fontSize='1.25rem'
              ml='1rem'
            >
              You don&apos;t have any favorite drinks.
            </Text>
          </Flex>
        )}
      </Flex>
    </CustomView>
  );
}
