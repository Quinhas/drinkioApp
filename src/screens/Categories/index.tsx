import { Flex, Text } from 'native-base';
import React from 'react';
import { CategoryOfTheDay } from '../../components/CategoryOfTheDay';
import { CustomView } from '../../components/CustomView';
import { SearchBar } from '../../components/SearchBar';
import { TopCategories } from '../../components/TopCategories';
import { CategoriesList } from './components/CategoriesList';

export function Categories() {
  return (
    <CustomView
      showsVerticalScrollIndicator={false}
      showTabs
    >
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
          Categories
        </Text>
        {/* <ToggleColorMode /> */}
      </Flex>
      <SearchBar
        placeholder='Search categories'
        selected='Categories'
        categories
      />

      <CategoryOfTheDay />

      <TopCategories />

      <CategoriesList />
    </CustomView>
  );
}
