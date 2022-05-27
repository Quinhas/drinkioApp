import { useNavigation } from '@react-navigation/native';
import {
  Badge,
  Flex,
  Image,
  Pressable,
  Text,
  useColorModeValue
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import drinkioApi, { DrinkProps } from '../../../services/DrinkioService';
import { scaleAnimation } from '../../../utils/animations/scale';

type DrinkCardProps = {
  id: number;
};

export function DrinkCard({ id }: DrinkCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [drink, setDrink] = useState<DrinkProps | undefined>(undefined);
  const animation = scaleAnimation(1, 0.98, 100);
  const navigation = useNavigation();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const data = await drinkioApi.getDrinkDetails({ id });
      setDrink(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  function goToDrinkDetails() {
    navigation.navigate('DrinkDetails', { id });
  }

  if (isLoading) {
    return <></>;
  }

  if (!drink) {
    return <></>;
  }

  const color = drink.alcoholic
    ? useColorModeValue('red.400', 'red.300')
    : useColorModeValue('green.500', 'green.300');

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
              uri: drink.thumb,
              cache: 'force-cache',
            }}
            mr='0.75rem'
          />
          <Flex
            align='flex-start'
            grow={1}
            justify='space-between'
          >
            <Text fontWeight='black'>{drink.name}</Text>
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
              {drink.alcoholic ? 'Alcoholic' : 'Non alcoholic'}
            </Badge>
          </Flex>
        </Flex>
      </Animated.View>
    </Pressable>
  );
}
