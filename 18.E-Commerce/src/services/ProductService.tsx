import axios, { AxiosResponse } from "axios";
import { ProductType } from "../types/Type";

class ProductService {
  BASE_URL = "https://fakestoreapi.com";
  getAllProducts(): Promise<ProductType[]> {
    return new Promise((resolve: any, reject: any) => {
      axios
        .get(`${this.BASE_URL}/products`)
        .then((response: AxiosResponse<any, any>) => resolve(response.data))
        .catch((err: any) => reject(err));
    });
  }

  getProductById(id: number): Promise<ProductType> {
    return new Promise((res, rej) => {
      axios
        .get(`${this.BASE_URL}/products/${id}`)
        .then((result) => {
          res(result.data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
}

export default new ProductService();
