import _ from 'lodash';
import { Flex, HStack, ScrollView, Skeleton, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import drinkioApi, { CategoryProps } from '../../services/DrinkioService';
import { TopCategoryCard } from './components/TopCategoryCard';

export function TopCategories() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      const data = await drinkioApi.getAllCategories({ onlyTop: true });
      setCategories(data);
      setIsLoading(false);
    }
    getCategories();
  }, []);

  return (
    <Flex mt='1rem'>
      <Text
        fontSize='1.25rem'
        fontWeight='bold'
        mb='0.5rem'
        mx='1.5rem'
      >
        Top Categories
      </Text>
      {isLoading && (
        <HStack space='1rem' ml='1.5rem'>
          {_.times(2).map((id) =>
            (
              <Skeleton
                key={id}
                h='6.25rem'
                w='12.5rem'
                borderRadius='lg'
                shadow='2'
              />
            ))}
        </HStack>
      )}
      {!isLoading && (
        <ScrollView
          horizontal
          persistentScrollbar={false}
          showsHorizontalScrollIndicator={false}
        >
          <HStack space='1rem'>
            {categories.map((category) =>
              (
                <TopCategoryCard
                  key={category.id}
                  isFirst={_.first(categories) === category}
                  isLast={_.last(categories) === category}
                  {...category}
                />
              ))}
          </HStack>
        </ScrollView>
      )}
    </Flex>
  );
}
