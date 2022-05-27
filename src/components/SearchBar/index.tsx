import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Icon, Input, useColorModeValue } from 'native-base';
import React from 'react';

type SearchBarProps = {
  placeholder: string;
  categories?: boolean;
  drinks?: boolean;
  selected: 'Drinks' | 'Categories';
};

export function SearchBar({
  placeholder,
  categories,
  drinks,
  selected,
}: SearchBarProps) {
  const navigation = useNavigation();
  return (
    <Input
      mx='1.5rem'
      mt='0.75rem'
      variant='filled'
      borderRadius='0.75rem'
      bg={useColorModeValue('white', 'black')}
      placeholder={placeholder}
      fontSize='0.9375rem'
      fontWeight='medium'
      h='2.25rem'
      py='0'
      InputLeftElement={
        <Icon as={FontAwesome5} name='search' size='1rem' px='0.875rem' />
      }
      onClick={() =>
        navigation.navigate('SearchResponse', {
          placeholder,
          categories,
          drinks,
          selected,
        })}
      readonly
    />
  );
}
