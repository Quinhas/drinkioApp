import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  ScrollView,
  Text,
  View,
  VStack
} from "native-base";
import React, { useEffect, useRef, useState } from "react";
import drinkioApi from "../../services/DrinkioService";

type SearchResponseParams = {
  placeholder: string;
};

export function SearchResponse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState<"Drinks" | "Categories">(
    "Drinks"
  );
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const inputRef = useRef<HTMLInputElement>();
  const { placeholder } = route.params as SearchResponseParams;
  const [responseList, setResponseList] = useState<any[]>([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  async function handleSearch(value: string) {
    const searchString = value.toLowerCase();
    setSearchTerm(searchString);
    setResponseList([]);
  }

  async function filterCategories() {
    setIsLoading(true);
    const categoriesList = await drinkioApi.getAllCategories({});
    const filteredList = categoriesList.filter((category) =>
      category.desc.toLowerCase().includes(searchTerm)
    );
    console.log(filteredList);
    setResponseList(filteredList);
    setIsLoading(false);
  }

  async function filterDrinks() {
    setIsLoading(true);
    const drinksList = await drinkioApi.getAllDrinks({});
    const filteredList = drinksList.filter((drink) =>
      drink.name.toLowerCase().includes(searchTerm)
    );
    console.log(filteredList);
    setResponseList(filteredList);
    setIsLoading(false);
  }

  useEffect(() => {
    if (searchTerm.trim().length === 0) {
      return;
    }
    if (searchList === "Categories") {
      filterCategories();
    }
    if (searchList === "Drinks") {
      filterDrinks();
    }
  }, [searchTerm, searchList]);

  return (
    <BlurView
      tint="dark"
      intensity={30}
      style={{
        paddingVertical: "1rem",
        maxHeight: "calc(100vh - 2rem)",
        minHeight: "calc(100vh - 2rem)",
      }}
    >
      <View
        mt={"4rem"}
        px={"1.5rem"}
        pt={"1.75rem"}
        bg={"light.100"}
        h={"100%"}
        borderTopRadius={"3xl"}
        shadow={6}
      >
        <Input
          ref={inputRef}
          variant={"filled"}
          borderRadius={"0.75rem"}
          bgColor={"white"}
          placeholder={placeholder ?? "Search"}
          fontSize={"0.9375rem"}
          fontWeight={"medium"}
          h={"2.25rem"}
          py={"0"}
          InputLeftElement={
            <Icon
              as={FontAwesome5}
              name="search"
              size={"1rem"}
              px={"0.875rem"}
            />
          }
          onChangeText={handleSearch}
        />
        <HStack space={"1rem"} my={"1rem"}>
          <Button
            w={"calc(50% - 0.5rem)"}
            onPress={() => setSearchList("Drinks")}
            colorScheme={searchList === "Drinks" ? "primaryApp" : "dark"}
          >
            Drinks
          </Button>
          <Button
            w={"calc(50% - 0.5rem)"}
            onPress={() => setSearchList("Categories")}
            colorScheme={searchList === "Categories" ? "primaryApp" : "dark"}
          >
            Categories
          </Button>
        </HStack>
        {!isLoading && searchTerm.trim().length === 0 && (
          <Flex mt={"1rem"}>
            <Text>Escreve alguma coisa aí pra procurar</Text>
          </Flex>
        )}
        {isLoading ? (
          <Flex grow={1} align={"center"} justify={"center"}>
            <Text>Carregando...</Text>
          </Flex>
        ) : (
          <>
            {searchTerm.trim().length !== 0 && responseList.length === 0 && (
              <Flex mt={"1rem"}>
                <Text>Nenhum item encontrado.</Text>
              </Flex>
            )}
            {searchTerm.trim().length !== 0 && responseList.length > 0 && (
              <ScrollView>
                <VStack space={"1rem"} mt={"1rem"}>
                  {responseList.map((item) => (
                    <Flex key={item.id}>{item.desc ?? item.name}</Flex>
                  ))}
                </VStack>
              </ScrollView>
            )}
          </>
        )}
      </View>
    </BlurView>
  );
}
