import { useNavigation } from '@react-navigation/native';
import { Flex, Image, Pressable, Text, useColorModeValue } from 'native-base';
import React from 'react';
import { Animated } from 'react-native';
import { CategoryProps } from '../../../services/DrinkioService';
import { scaleAnimation } from '../../../utils/animations/scale';

type CategoryCardProps = {} & CategoryProps;

export function CategoryCard({ id, desc, thumb }: CategoryCardProps) {
  const animation = scaleAnimation(1, 0.98, 100);
  const navigation = useNavigation();

  function goToDrinkDetails() {
    navigation.navigate('CategoryDetails', { id });
  }

  return (
    <Pressable
      onPress={goToDrinkDetails}
      onPressIn={animation.onPressIn}
      onPressOut={animation.onPressOut}
    >
      <Animated.View style={animation.style}>
        <Flex
          h='3.625rem'
          shadow={4}
          bg={useColorModeValue('white', 'black')}
          borderRadius='0.75rem'
          direction='row'
          align='center'
          p='0.75rem'
          mb='1rem'
        >
          <Image
            borderRadius='lg'
            resizeMode='cover'
            size='2.25rem'
            style={{
              aspectRatio: 1 / 1,
            }}
            zIndex='0'
            alt='Imagem de um drink'
            source={{
              uri: thumb,
              cache: 'force-cache',
            }}
            mr='0.75rem'
          />
          <Flex
            align='flex-start'
            grow={1}
            justify='space-between'
          >
            <Text fontWeight='black'>{desc}</Text>
          </Flex>
        </Flex>
      </Animated.View>
    </Pressable>
  );
}
