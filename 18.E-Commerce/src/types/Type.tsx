export interface UserType {
  id?: string;
  username: string;
  password: string;
  balance?: number;
}

export type LoginUserType = Omit<UserType, "balance" | "id">;

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
  count?: number;
}
interface RatingType {
  rate: number;
  count: number;
}
