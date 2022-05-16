import axios, { AxiosInstance } from "axios";
import { capitalizeOnlyFirstLetter } from "../utils/CapitalizeOnlyFirstLetter";

export type DrinkProps = {
  id: number;
  name: string;
  categoryId: number;
  alcoholic: boolean;
  glassId: number;
  instructions: string;
  thumb: string;
  top: boolean;
  ingredients: {[key: string]: string};
  measures: {[key: string]: string};
  createdAt: string;
  updatedAt: string;
};

export type CategoryProps = {
  id: number;
  desc: string;
  thumb: string;
  top: boolean;
  createdAt: string;
  updatedAt: string;
  drinks?: DrinkProps[];
};
class DrinkioService {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost:3001",
    });
  }

  async getAllCategories({ onlyTop = false }: { onlyTop?: boolean }) {
    try {
      const { data } = await this.httpClient.get<CategoryProps[]>(
        `/categories`,
        {
          params: { onlyTop },
        }
      );
      const categories = data.map((category) => {
        return {
          ...category,
          desc: capitalizeOnlyFirstLetter(category.desc),
        };
      });
      return categories;
    } catch (err) {
      throw err;
    }
  }

  async getCategoryDetails({ id }: { id: number }) {
    try {
      const { data } = await this.httpClient.get<CategoryProps>(
        `/categories/${id}`
      );
      return {
        ...data,
        desc: capitalizeOnlyFirstLetter(data.desc),
      };
    } catch (err) {
      throw err;
    }
  }
}

const drinkioApi = new DrinkioService();

export default drinkioApi;
