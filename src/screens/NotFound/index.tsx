import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Flex, Icon, Text, View } from 'native-base';
import React from 'react';

export function NotFound() {
  const navigation = useNavigation();
  return (
    <View>
      <Flex
        px='1.5rem'
        align='center'
        grow={1}
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
          Looks like this content doesn&apos;t exist or couldn&apos;t be found!
        </Text>
        <Button
          mt='1rem'
          onPress={() =>
            navigation.navigate('HomePage')}
          w='full'
          colorScheme='primaryApp'
        >
          Go Home
        </Button>
      </Flex>
    </View>
  );
}
