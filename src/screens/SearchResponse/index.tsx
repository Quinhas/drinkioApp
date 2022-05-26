import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Button, HStack, Icon, Input, View } from "native-base";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import drinkioApi, {
  CategoryProps,
  DrinkProps
} from "../../services/DrinkioService";
import { CategoriesList } from "./components/CategoriesList";
import { DrinksList } from "./components/DrinksList";

type SearchResponseParams = {
  placeholder: string;
  categories?: boolean;
  drinks?: boolean;
  selected: "Drinks" | "Categories";
};

export function SearchResponse() {
  const route = useRoute();
  const { placeholder, categories, drinks, selected } =
    route.params as SearchResponseParams;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState<"Drinks" | "Categories">(
    selected
  );
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const inputRef = useRef<HTMLInputElement>();
  const [drinksList, setDrinksList] = useState<DrinkProps[]>([]);
  const [categoriesList, setCategoriesList] = useState<CategoryProps[]>([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    async function getData() {
      setIsLoading(true);
      const _drinksList = await drinkioApi.getAllDrinks({});
      setDrinksList(_drinksList);
      const _categoriesList = await drinkioApi.getAllCategories({});
      setCategoriesList(_categoriesList);
      setIsLoading(false);
    }
    getData();
  }, []);

  async function handleSearch(value: string) {
    const searchString = value.toLowerCase();
    setSearchTerm(searchString);
  }

  const responseListDrinks = useMemo(() => {
    if (searchList === "Drinks") {
      setIsLoading(true);
      if (searchTerm.trim().length === 0) {
        setIsLoading(false);
        return drinksList;
      }

      const filteredList = drinksList.filter((drink) =>
        drink.name.toLowerCase().includes(searchTerm)
      );
      setIsLoading(false);

      return filteredList;
    }

    return [];
  }, [searchTerm, searchList, drinksList]);

  const responseListCategories = useMemo(() => {
    if (searchList === "Categories") {
      setIsLoading(true);
      if (searchTerm.trim().length === 0) {
        setIsLoading(false);
        return categoriesList;
      }

      const filteredList = categoriesList.filter((category) =>
        category.desc.toLowerCase().includes(searchTerm)
      );
      setIsLoading(false);
      
      return filteredList;
    }
  }, [searchTerm, searchList, categoriesList]);

  return (
    <BlurView
      tint="light"
      intensity={30}
      style={{
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 0,
          minHeight: "4rem",
          maxHeight: "4rem",
          width: "100%",
          zIndex: 9999,
        }}
        onPress={navigation.goBack}
      />
      <View
        mt={"4rem"}
        px={"1.5rem"}
        bg={"light.100"}
        borderTopRadius={"3xl"}
        shadow={9}
        display={"flex"}
        maxH={"calc(100vh - 4rem)"}
        minH={"calc(100vh - 4rem)"}
        backgroundColor={"rgba(0,0,0,0.9)"}
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
          mt={"2.75rem"}
          mb={"1rem"}
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
        {drinks && categories && (
          <HStack space={"1rem"} mb={"1rem"}>
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
        )}
        {searchList === "Drinks" ? (
          <DrinksList isLoading={isLoading} drinks={responseListDrinks} />
        ) : (
          <CategoriesList
            isLoading={isLoading}
            categories={responseListCategories}
          />
        )}
      </View>
    </BlurView>
  );
}
