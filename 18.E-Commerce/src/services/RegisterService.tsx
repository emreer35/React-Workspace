import { AxiosResponse } from "axios";
import axiosInstance from "../config/AxiosConfig";
import { UserType } from "../types/Type";

class RegisterService {
  register(newUser: UserType): Promise<UserType> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post("/users", newUser)
        .then((response: AxiosResponse) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }
}

export default new RegisterService();
