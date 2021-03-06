import axios, { AxiosInstance } from 'axios';
import { capitalizeOnlyFirstLetter } from '../utils/CapitalizeOnlyFirstLetter';

export type GlassProps = {
  id: number;
  desc: string;
  thumb: string;
  createdAt: string;
  updatedAt: string;
};

export type DrinkProps = {
  id: number;
  name: string;
  categoryId: number;
  alcoholic: boolean;
  glassId: number;
  instructions: string;
  thumb: string;
  top: boolean;
  ingredients: { [key: string]: string };
  measures: { [key: string]: string };
  createdAt: string;
  updatedAt: string;
  glass?: GlassProps;
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
      baseURL: 'https://drinkioapi-production.up.railway.app',
    });
  }

  async getAllCategories({ onlyTop = false }: { onlyTop?: boolean }) {
    const { data } = await this.httpClient.get<CategoryProps[]>(
      '/categories',
      {
        params: { onlyTop },
      }
    );
    const categories = data.map((category) =>
      ({
        ...category,
        desc: capitalizeOnlyFirstLetter(category.desc),
      }));
    return categories;
  }

  async getCategoryDetails({ id }: { id: number }) {
    const { data } = await this.httpClient.get<CategoryProps>(
      `/categories/${id}`
    );
    return {
      ...data,
      desc: capitalizeOnlyFirstLetter(data.desc),
    };
  }

  async getAllDrinks({ onlyTop = false }: { onlyTop?: boolean }) {
    const { data } = await this.httpClient.get<DrinkProps[]>('/drinks', {
      params: { onlyTop },
    });
    return data;
  }

  async getDrinkDetails({ id }: { id: number }) {
    const { data } = await this.httpClient.get<DrinkProps>(`/drinks/${id}`);
    return data;
  }
}

const drinkioApi = new DrinkioService();

export default drinkioApi;
