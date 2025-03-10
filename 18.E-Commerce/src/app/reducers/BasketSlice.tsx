import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/Type";

export interface BasketSliceType {
  basket: ProductType[];
}

const initialState: BasketSliceType = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (
      state: BasketSliceType,
      action: PayloadAction<ProductType[]>
    ) => {
      state.basket = [...action.payload];
    },
    addProductToBasket: (
      state: BasketSliceType,
      action: PayloadAction<ProductType>
    ) => {
      if (state.basket.length === 0) {
        state.basket = [action.payload];
      } else {
        // iceride urunler var ise
        const findProduct = state.basket.find(
          (product: ProductType) => product.id === action.payload.id
        );
        if (findProduct) {
          // urun var ise
          if (findProduct.count && action.payload.count) {
            findProduct.count = findProduct.count + action.payload.count;

            state.basket = [
              ...state.basket.map((product: ProductType) =>
                product.id === findProduct.id ? findProduct : product
              ),
            ];
          }
        } else {
          // urun yok ise
          state.basket = [...state.basket, action.payload];
        }
      }

      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    incrementToBasket: (
      state: BasketSliceType,
      action: PayloadAction<number>
    ) => {
      const product = state.basket.find(
        (p: ProductType) => p.id === action.payload
      );
      if (product?.count) {
        product.count += 1;
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decrementToBasket: (
      state: BasketSliceType,
      action: PayloadAction<number>
    ) => {
      const product = state.basket.find((p) => p.id === action.payload);
      if (product && product.count && product.count > 1) {
        product.count -= 1;
      } else {
        state.basket = state.basket.filter((p) => p.id !== action.payload);
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },

    deleteItem: (state: BasketSliceType, action: PayloadAction<number>) => {
      state.basket = [
        ...state.basket.filter((p: ProductType) => p.id !== action.payload),
      ];
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
  // extraReducers:{}
});

export const {
  addProductToBasket,
  setBasket,
  incrementToBasket,
  decrementToBasket,
  deleteItem,
} = basketSlice.actions;

export default basketSlice.reducer;
