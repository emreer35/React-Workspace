import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};
const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
};

const writeBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        const extractedProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        findProduct.amount += action.payload.amount;
        state.products = [...extractedProducts, findProduct];
        writeBasketToStorage(state.products);
      } else {
        if (action.payload.amount > 0) {
          state.products = [...state.products, action.payload];
          writeBasketToStorage(state.products);
        }
      }
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },

    increment: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.amount += 1;
      }
      writeBasketToStorage(state.products);
    },

    decrement: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.amount > 1) {
        product.amount -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      }
      writeBasketToStorage(state.products);
    },
    deleteCountzero: (state) => {
      state.products = state.products.filter((product) => product.amount > 0);
      writeBasketToStorage(state.products);
    },
  },
});

export const { addToBasket, setDrawer, deleteCountzero, increment, decrement } =
  basketSlice.actions;

export default basketSlice.reducer;
