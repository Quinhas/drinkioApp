export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      CategoryDetails: {
        id: number;
      };
      DrinkDetails: {
        id: number;
      };
      Tabs: any;
      SearchResponse: {
        placeholder: string;
        categories?: boolean;
        drinks?: boolean;
        selected: "Drinks" | "Categories";
      };
    }
  }
}
