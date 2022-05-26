import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

export default function useFavorites() {
  const value = useContext(FavoritesContext);
  return value;
}
