import { Flex, Text } from 'native-base';
import React from 'react';
import { CustomView } from '../../components/CustomView';
import { DrinkOfTheDay } from '../../components/DrinkOfTheDay';
import { SearchBar } from '../../components/SearchBar';
import { ToggleColorMode } from '../../components/ToggleColorMode';
import { TopCategories } from '../../components/TopCategories';

export function Home() {
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
          Home
        </Text>
        <ToggleColorMode />
      </Flex>
      <SearchBar
        placeholder='Search drinks or categories'
        selected='Drinks'
        categories
        drinks
      />

      <DrinkOfTheDay />

      <TopCategories />
    </CustomView>
  );
}
