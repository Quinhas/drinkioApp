import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  ScrollView,
  Skeleton,
  Text,
  View,
  VStack
} from "native-base";
import React, { useEffect, useState } from "react";
import drinkioApi, { DrinkProps } from "../../services/DrinkioService";
import { capitalizeOnlyFirstLetter } from "../../utils/CapitalizeOnlyFirstLetter";

type DrinkDetailsParams = {
  id: number;
};

export function DrinkDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [drink, setDrink] = useState<DrinkProps | null>(null);
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as DrinkDetailsParams;

  async function getDrinkDetails() {
    setIsLoading(true);

    const _drink = await drinkioApi.getDrinkDetails({ id });
    setDrink(_drink);

    setIsLoading(false);
  }

  useEffect(() => {
    getDrinkDetails();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Skeleton
          h={"12.5rem"}
          borderBottomRadius={"0.75rem"}
          w={"100%"}
          shadow={4}
        />
        <Skeleton.Text lines={12} p={"1.5rem"} />
      </View>
    );
  }

  if (!drink) {
    return (
      <View h={"100vh"}>
        <Button
          size={"2rem"}
          backgroundColor={"white"}
          borderRadius={"full"}
          mt={"0.75rem"}
          ml={"1.5rem"}
          onPress={navigation.goBack}
        >
          <Icon
            as={FontAwesome}
            name={"arrow-left"}
            color={"primaryApp.500"}
            size={"1rem"}
          />
        </Button>
        <Flex px={"1.5rem"} py={"3rem"} align={"center"} grow={1}>
          <Icon
            as={FontAwesome5}
            name="sad-tear"
            size={"5rem"}
            color={"muted.400"}
          />
          <Text fontWeight={"medium"} fontSize={"2rem"} color={"muted.400"}>
            Oops!
          </Text>
          <Text fontSize={"1rem"} color={"muted.400"}>
            Looks like this drink doesn't exist or couldn't be found!
          </Text>
          <Button
            mt={"1rem"}
            onPress={() => navigation.navigate("Tabs")}
            w={"full"}
            colorScheme={"primaryApp"}
          >
            Go Home
          </Button>
        </Flex>
      </View>
    );
  }

  return (
    <ScrollView>
      <Box
        minH={"12.5rem"}
        borderBottomRadius={"0.75rem"}
        w={"100%"}
        shadow={4}
        position={"relative"}
      >
        <Box w={"100%"} h={"100%"} zIndex={10} position={"absolute"}>
          <Button
            size={"2rem"}
            backgroundColor={"white"}
            borderRadius={"full"}
            position={"absolute"}
            top={"0.75rem"}
            left={"1.5rem"}
            onPress={navigation.goBack}
          >
            <Icon
              as={FontAwesome}
              name={"arrow-left"}
              color={"primaryApp.500"}
              size={"1rem"}
            />
          </Button>
          <Button
            size={"2rem"}
            backgroundColor={"white"}
            borderRadius={"full"}
            position={"absolute"}
            top={"0.75rem"}
            right={"1.5rem"}
            onPress={() => navigation.goBack()}
          >
            <Icon
              as={FontAwesome}
              name={"star"}
              color={"primaryApp.500"}
              size={"1rem"}
            />
          </Button>
          <Flex position={"absolute"} bottom={"0.75rem"} left={"1.5rem"}>
            <Badge
              variant={"solid"}
              colorScheme={drink.alcoholic ? "red" : "green"}
              borderRadius={"4px"}
              w={"max-content"}
              _text={{
                fontWeight: "bold",
                fontSize: "0.75rem",
              }}
              textTransform={"uppercase"}
            >
              {drink.alcoholic ? "Alcoholic" : "Non alcoholic"}
            </Badge>
            <Text fontSize={"2rem"} fontWeight={"black"} color={"white"}>
              {drink.name}
            </Text>
          </Flex>
        </Box>
        <Box
          w={"100%"}
          h={"100%"}
          position={"absolute"}
          zIndex={2}
          borderBottomRadius={"lg"}
          bg={"rgba(0,0,0,0.5)"}
        />
        <Box
          w={"100%"}
          h={"80%"}
          bottom={0}
          position={"absolute"}
          borderBottomRadius={"0.75rem"}
          zIndex={1}
          bg={{
            linearGradient: {
              colors: ["rgba(196, 196, 196, 0)", "rgba(0, 210, 255, 0.6)"],
            },
          }}
        />
        <Image
          borderBottomRadius={"0.75rem"}
          resizeMode={"cover"}
          size={"100%"}
          alt={"Imagem de um drink"}
          source={{
            uri: drink.thumb,
          }}
        />
      </Box>

      <VStack space={"1.5rem"} m={"1.5rem"}>
        {/* Ingredients */}
        <Flex
          bgColor={"white"}
          p={"0.75rem"}
          borderRadius={"0.75rem"}
          shadow={4}
        >
          <Text fontWeight={"bold"} fontSize={"1.25rem"}>
            Ingredients
          </Text>
          {Object.values(drink.ingredients).map((ingredient, index) => {
            return (
              <Flex
                key={index}
                ml={"0.75rem"}
                direction={"row"}
                align={"center"}
              >
                <Text
                  color={"primaryApp.500"}
                  fontSize={"1.25rem"}
                  mr={"0.5rem"}
                  lineHeight={"1.25rem"}
                >
                  •
                </Text>
                <Text
                  fontSize={"0.875rem"}
                  color={"muted.600"}
                  fontWeight={"bold"}
                  lineHeight={"1.25rem"}
                >
                  {ingredient}
                </Text>
              </Flex>
            );
          })}
        </Flex>

        {/* Glass */}
        <Flex
          bgColor={"white"}
          p={"0.75rem"}
          borderRadius={"0.75rem"}
          shadow={4}
          direction={"row"}
          align={"center"}
        >
          <Image
            borderRadius={"lg"}
            resizeMode={"cover"}
            size={"2.5rem"}
            style={{
              aspectRatio: 1 / 1,
            }}
            zIndex={"0"}
            alt={"Imagem de um drink"}
            source={{
              uri:
                drink.glass?.thumb ??
                "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg",
            }}
            mr={"0.75rem"}
          />
          <Text fontWeight={"bold"} fontSize={"1.25rem"}>
            {drink.glass?.desc
              ? capitalizeOnlyFirstLetter(drink.glass.desc)
              : ""}
          </Text>
        </Flex>

        {/* Instructions */}
        <Flex
          bgColor={"white"}
          p={"0.75rem"}
          borderRadius={"0.75rem"}
          shadow={4}
        >
          <Text fontWeight={"bold"} fontSize={"1.25rem"}>
            Instructions
          </Text>
          {drink.instructions.split(/\r\n/g).map((instruction, index) => {
            return (
              <Flex
                key={index}
                ml={"0.75rem"}
                direction={"row"}
                align={"flex-start"}
                fontSize={"0.875rem"}
              >
                <Text
                  color={"primaryApp.500"}
                  fontWeight={"bold"}
                  minW={"7%"}
                  maxW={"7%"}
                >
                  {index + 1}.
                </Text>
                <Text color={"muted.600"} fontWeight={"bold"}>
                  {instruction.trim()}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </VStack>
    </ScrollView>
  );
}
