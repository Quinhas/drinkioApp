import { useNavigation } from '@react-navigation/native';
import { Box, Flex, Image, Pressable, Text } from 'native-base';
import React from 'react';
import { Animated } from 'react-native';
import { CategoryProps } from '../../../../services/DrinkioService';
import { scaleAnimation } from '../../../../utils/animations/scale';

type TopCategoryCardProps = {
  isFirst: boolean;
  isLast: boolean;
} & CategoryProps;

export function TopCategoryCard({
  id,
  desc,
  thumb,
  isFirst,
  isLast,
}: TopCategoryCardProps) {
  const animation = scaleAnimation(1, 0.98, 100);
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('CategoryDetails', {
          id,
        })}
      onPressIn={animation.onPressIn}
      onPressOut={animation.onPressOut}
    >
      <Animated.View style={animation.style}>
        <Flex
          h='6.25rem'
          w='12.5rem'
          position='relative'
          borderRadius='lg'
          align='center'
          justify='center'
          shadow='2'
          ml={isFirst ? '1.5rem' : 0}
          mr={isLast ? '1.5rem' : 0}
        >
          <Text
            position='absolute'
            zIndex='4'
            fontWeight='black'
            fontSize='1.5rem'
            maxW='70%'
            textAlign='center'
            color='white'
            adjustsFontSizeToFit
            allowFontScaling
            maxFontSizeMultiplier={1}
            minimumFontScale={0.3}
          >
            {desc}
          </Text>
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
            zIndex='0'
            size='100%'
            alt='Imagem de um drink'
            source={{
              uri: thumb,
              cache: 'force-cache'
            }}
          />
        </Flex>
      </Animated.View>
    </Pressable>
  );
}
