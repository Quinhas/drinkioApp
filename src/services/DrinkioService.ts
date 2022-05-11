import axios, { AxiosInstance } from "axios";

class DrinkioService {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost:3001",
    });
  }

  async getAllCategories({ onlyTop = false }: { onlyTop?: boolean }) {
    try {
      const { data } = await this.httpClient.get(`/categories`, { params: { onlyTop } });
      return data;
    } catch (err) {
      throw err;
    }
  }
}

const drinkioApi = new DrinkioService();

export default drinkioApi;
