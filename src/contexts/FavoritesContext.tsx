import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";

type FavoritesContextProps = {
  favoritesDrinks: number[];
  favoritesCategories: number[];
  updateFavoriteDrink: (id: number) => void;
  updateFavoriteCategory: (id: number) => void;
};

type FavoritesContextProviderProps = {
  children: ReactNode;
};

export const FavoritesContext = createContext({} as FavoritesContextProps);

export function FavoritesContextProvider(props: FavoritesContextProviderProps) {
  const [favoritesDrinks, setFavoritesDrinks] = useState<number[]>(
    JSON.parse(localStorage.getItem("@DrinkioApp:FavoritesDrinks")!) ?? []
  );
  const [favoritesCategories, setFavoritesCategories] = useState<number[]>(
    JSON.parse(localStorage.getItem("@DrinkioApp:FavoritesCategories")!) ?? []
  );
  const { getItem: getDrinks, setItem: setDrinks } = useAsyncStorage(
    "@DrinkioApp:FavoritesDrinks"
  );
  const { getItem: getCategories, setItem: setCategories } = useAsyncStorage(
    "@DrinkioApp:FavoritesCategories"
  );

  useEffect(() => {
    (async () => {
      await setDrinks(JSON.stringify(favoritesDrinks));
      localStorage.setItem(
        "@DrinkioApp:FavoritesDrinks",
        JSON.stringify(favoritesDrinks)
      );
    })();
  }, [favoritesDrinks]);

  useEffect(() => {
    (async () => {
      await setCategories(JSON.stringify(favoritesCategories));
      localStorage.setItem(
        "@DrinkioApp:FavoritesCategories",
        JSON.stringify(favoritesCategories)
      );
    })();
  }, [favoritesCategories]);

  function updateFavoriteDrink(id: number) {
    const drinkExists = favoritesDrinks.find((_id) => _id === id);
    if (!drinkExists) {
      setFavoritesDrinks((prevState) => [...prevState, id]);
    } else {
      setFavoritesDrinks((prevState) => prevState.filter((_id) => _id !== id));
    }
  }

  function updateFavoriteCategory(id: number) {
    const categoryExists = favoritesCategories.find((_id) => _id === id);
    if (!categoryExists) {
      setFavoritesCategories((prevState) => [...prevState, id]);
    } else {
      setFavoritesCategories((prevState) =>
        prevState.filter((_id) => _id !== id)
      );
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoritesDrinks,
        favoritesCategories,
        updateFavoriteDrink,
        updateFavoriteCategory,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}
