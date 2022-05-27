import { useNavigation } from '@react-navigation/native';
import {
  Badge,
  Flex,
  Image,
  Pressable,
  Text,
  useColorModeValue
} from 'native-base';
import React from 'react';
import { Animated } from 'react-native';
import { DrinkProps } from '../../../services/DrinkioService';
import { scaleAnimation } from '../../../utils/animations/scale';

type DrinkCardProps = {} & DrinkProps;

export function DrinkCard({ id, name, thumb, alcoholic }: DrinkCardProps) {
  const animation = scaleAnimation(1, 0.98, 100);
  const navigation = useNavigation();
  const color = alcoholic
    ? useColorModeValue('red.400', 'red.300')
    : useColorModeValue('green.500', 'green.300');

  function goToDrinkDetails() {
    navigation.navigate('DrinkDetails', { id });
  }

  return (
    <Pressable
      onPress={goToDrinkDetails}
      onPressIn={animation.onPressIn}
      onPressOut={animation.onPressOut}
    >
      <Animated.View style={animation.style}>
        <Flex
          h='4.625rem'
          shadow={4}
          bg={useColorModeValue('white', 'black')}
          borderRadius='0.75rem'
          direction='row'
          p='0.75rem'
        >
          <Image
            borderRadius='lg'
            resizeMode='cover'
            size='3.125rem'
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
            <Text fontWeight='black'>{name}</Text>
            <Badge
              variant='outline'
              borderRadius='4px'
              _text={{
                fontWeight: 'bold',
                fontSize: '0.75rem',
                color,
              }}
              textTransform='uppercase'
              borderColor={color}
            >
              {alcoholic ? 'Alcoholic' : 'Non alcoholic'}
            </Badge>
          </Flex>
        </Flex>
      </Animated.View>
    </Pressable>
  );
}
