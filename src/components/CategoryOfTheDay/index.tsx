import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { parseISO } from 'date-fns';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import _ from 'lodash';
import { Box, Button, Flex, Icon, Image, Pressable, Skeleton, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import drinkioApi, { CategoryProps } from '../../services/DrinkioService';
import { scaleAnimation } from '../../utils/animations/scale';

type CategoryOfTheDayProps = {
  id: number;
  date: string;
};

export function CategoryOfTheDay() {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<CategoryProps>();
  const animation = scaleAnimation(1, 0.98, 100);
  const navigation = useNavigation();

  async function getData() {
    setIsLoading(true);
    const
      categoryStorage: CategoryOfTheDayProps = localStorage.getItem(
        '@DrinkioApp::CategoryOfTheDay'
      )
        ? JSON.parse(localStorage.getItem('@DrinkioApp::CategoryOfTheDay')!)
        : null;

    if (
      categoryStorage) {
      const date =
      categoryStorage.date
        ? parseISO(
          categoryStorage.date
        )
        : null;

      if (date) {
        const distance = Number(
          formatDistanceToNowStrict(date, {
            unit: 'day',
          }).split(' ')[0]
        );

        if (distance < 1) {
          const data = await drinkioApi.getCategoryDetails({
            id:
            categoryStorage.id,
          });
          setCategory(data);
          setIsLoading(false);
          return;
        }
      }
    }

    const categories = await drinkioApi.getAllCategories({});
    const data = _.sample(categories);
    if (data) {
      setCategory(data);
      localStorage.setItem(
        '@DrinkioApp::CategoryOfTheDay',
        JSON.stringify({
          id: data.id,
          date: new Date(),
        })
      );
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Flex mx='1.5rem' mt='1rem'>
        <Text fontSize='1.25rem' fontWeight='bold' mb='0.5rem'>
          Category of the Day
        </Text>
        <Skeleton
          w='100%'
          height='12.5rem'
          borderRadius='lg'
          shadow='2'
        />
      </Flex>
    );
  }

  if (!category) {
    return (
      <Flex mx='1.5rem' mt='1rem'>
        <Text fontSize='1.25rem' fontWeight='bold' mb='0.5rem'>
          Category of the Day
        </Text>
        <Flex align='center' direction='row'>
          <Icon
            as={FontAwesome5}
            name='sad-tear'
            size='1.5rem'
            color='muted.500'
          />
          <Text fontWeight='medium' color='muted.500' ml='1rem'>
            Couldn&apos;t get category of the day.
            {' '}
            <Button
              variant='link'
              onPress={getData}
              colorScheme='primaryApp'
              px={0}
            >
              Try again.
            </Button>
          </Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('CategoryDetails', {
          id: category.id,
        })}
      onPressIn={animation.onPressIn}
      onPressOut={animation.onPressOut}
    >
      <Animated.View style={animation.style}>
        <Flex mx='1.5rem' mt='1rem'>
          <Text fontSize='1.25rem' fontWeight='bold' mb='0.5rem'>
            Category of the Day
          </Text>
          <Box
            w='100%'
            height='12.5rem'
            borderRadius='lg'
            position='relative'
            shadow='2'
          >
            <Text
              position='absolute'
              bottom='1rem'
              left='1.5rem'
              zIndex='4'
              fontWeight='black'
              fontSize='1.5rem'
              color='white'
            >
              {category.desc}
            </Text>
            <Box
              w='100%'
              h='50%'
              bottom={0}
              zIndex='3'
              position='absolute'
              borderRadius='lg'
              bg={{
                linearGradient: {
                  colors: ['rgba(196, 196, 196, 0)', 'rgba(0, 210, 255, 0.6)'],
                },
              }}
            />
            <Box
              w='100%'
              h='100%'
              zIndex='2'
              position='absolute'
              borderRadius='lg'
              bg='rgba(0,0,0,0.1)'
            />
            <Box
              w='100%'
              h='100%'
              zIndex='1'
              position='absolute'
              borderRadius='lg'
              bg='rgba(21, 214, 255, 0.3)'
            />
            <Image
              borderRadius='lg'
              resizeMode='cover'
              size='100%'
              zIndex='0'
              alt={`Imagem mostrando a imagem de um drink da categoria ${category.desc}`}
              source={{
                uri: category.thumb,
                cache: 'force-cache',
              }}
            />
          </Box>
        </Flex>
      </Animated.View>
    </Pressable>
  );
}
