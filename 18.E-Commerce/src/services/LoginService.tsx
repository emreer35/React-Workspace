import axiosInstance from "../config/AxiosConfig";
import { UserType } from "../types/Type";

class LoginService {
  login(): Promise<UserType[]> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get("/users")
        .then((result) => {
          return resolve(result.data);
        })
        .catch((err) => reject(err));
    });
  }
}

export default new LoginService();
