import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType, UserType } from "../../types/Type";

interface AppSliceType {
  currentUser: UserType | null;
  loading: boolean;
  drawer: boolean;
  products: ProductType[];
}
const initialState = {
  currentUser: null,
  loading: false,
  drawer: false,
  products: [],
};
export const appSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    setLoading: (state: AppSliceType, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setDrawer: (state: AppSliceType, action: PayloadAction<boolean>) => {
      state.drawer = action.payload;
    },
    setCurrentUser: (state: AppSliceType, action: PayloadAction<UserType>) => {
      state.currentUser = action.payload;
    },
    updateCurrentUser: (
      state: AppSliceType,
      action: PayloadAction<UserType>
    ) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    setProducts: (
      state: AppSliceType,
      action: PayloadAction<ProductType[]>
    ) => {
      state.products = action.payload;
    },
    filterProducts: (state: AppSliceType, action: PayloadAction<string>) => {
      const tempList: ProductType[] = [];
      state.products.map((product: ProductType) => {
        if (
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          tempList.push(product);
        }
      });
      state.products = [...tempList];
    },
  },
  // extraReducers: {},
});

export const {
  setLoading,
  setDrawer,
  setCurrentUser,
  updateCurrentUser,
  setProducts,
  filterProducts,
} = appSlice.actions;

export default appSlice.reducer;
