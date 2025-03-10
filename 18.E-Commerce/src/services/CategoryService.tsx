import axios from "axios";
import { ProductType } from "../types/Type";

class CategoryService {
  BASE_URL = "https://fakestoreapi.com";
  getAllCategories(): Promise<string[]> {
    return new Promise((res, rej) => {
      axios
        .get(`${this.BASE_URL}/products/categories`)
        .then((result) => {
          res(result.data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  getProductsByCategoryName(categoryName: string): Promise<ProductType[]> {
    return new Promise((res, rej) => {
      axios
        .get(`${this.BASE_URL}/products/category/${categoryName}`)
        .then((result) => {
          res(result.data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
}

export default new CategoryService();
