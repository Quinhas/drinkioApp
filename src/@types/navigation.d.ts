export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      HomePage: any;
      CategoriesPage: any;
      FavoritesPage: any;
      CategoryDetails: {
        id: number;
      };
      DrinkDetails: {
        id: number;
      };
      SearchResponse: {
        placeholder: string;
        categories?: boolean;
        drinks?: boolean;
        selected: "Drinks" | "Categories";
      };
    }
  }
}
