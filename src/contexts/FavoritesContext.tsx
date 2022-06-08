import { useToast } from 'native-base';
import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from 'react';

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

export function FavoritesContextProvider({
  children,
}: FavoritesContextProviderProps) {
  const [favoritesDrinks, setFavoritesDrinks] = useState<number[]>(
    JSON.parse(localStorage.getItem('@DrinkioApp:FavoritesDrinks')!) ?? [],
  );
  const [favoritesCategories, setFavoritesCategories] = useState<number[]>(
    JSON.parse(localStorage.getItem('@DrinkioApp:FavoritesCategories')!) ?? [],
  );
  const toast = useToast();
  // const { getItem: getDrinks, setItem: setDrinks } = useAsyncStorage(
  //   '@DrinkioApp:FavoritesDrinks'
  // );
  // const { getItem: getCategories, setItem: setCategories } = useAsyncStorage(
  //   '@DrinkioApp:FavoritesCategories'
  // );

  useEffect(() => {
    (async () => {
      // await setDrinks(JSON.stringify(favoritesDrinks));
      localStorage.setItem(
        '@DrinkioApp:FavoritesDrinks',
        JSON.stringify(favoritesDrinks),
      );
    })();
  }, [favoritesDrinks]);

  useEffect(() => {
    (async () => {
      // await setCategories(JSON.stringify(favoritesCategories));
      localStorage.setItem(
        '@DrinkioApp:FavoritesCategories',
        JSON.stringify(favoritesCategories),
      );
    })();
  }, [favoritesCategories]);

  function updateFavoriteDrink(id: number) {
    const drinkExists = favoritesDrinks.find((_id) =>
      _id === id);
    if (!drinkExists) {
      setFavoritesDrinks((prevState) =>
        [...prevState, id]);
      if (!toast.isActive(`${id}-drink-add`)) {
        toast.show({
          id: `${id}-drink-add`,
          description: 'Drink added to favorites',
          placement: 'bottom',
          _light: {
            bgColor: 'green.500'
          },
          _dark: {
            bgColor: 'green.600'
          },
        });
      }
    } else {
      setFavoritesDrinks((prevState) =>
        prevState.filter((_id) =>
          _id !== id));
      if (!toast.isActive(`${id}-drink-remove`)) {
        toast.show({
          id: `${id}-drink-remove`,
          description: 'Drink removed from favorites',
          placement: 'bottom',
          _light: {
            bgColor: 'red.500'
          },
          _dark: {
            bgColor: 'red.300'
          },
        });
      }
    }
  }

  function updateFavoriteCategory(id: number) {
    const categoryExists = favoritesCategories.find((_id) =>
      _id === id);
    if (!categoryExists) {
      setFavoritesCategories((prevState) =>
        [...prevState, id]);
      if (!toast.isActive(`${id}-category-add`)) {
        toast.show({
          id: `${id}-category-add`,
          description: 'Category added to favorites',
          placement: 'bottom',
          _light: {
            bgColor: 'green.500'
          },
          _dark: {
            bgColor: 'green.600'
          },
        });
      }
    } else {
      setFavoritesCategories((prevState) =>
        prevState.filter((_id) =>
          _id !== id));
      if (!toast.isActive(`${id}-category-remove`)) {
        toast.show({
          id: `${id}-category-remove`,
          description: 'Category removed from favorites',
          placement: 'bottom',
          _light: {
            bgColor: 'red.500'
          },
          _dark: {
            bgColor: 'red.300'
          },
        });
      }
    }
  }

  const value = useMemo(() =>
    ({
      favoritesDrinks,
      favoritesCategories,
      updateFavoriteDrink,
      updateFavoriteCategory,
    }), [favoritesDrinks, favoritesCategories]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
