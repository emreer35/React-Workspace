import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
  searchTerm: "",
};
const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductById: (state, action) => {
      state.selectedProduct = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      (state.loading = false), (state.products = action.payload);
    });
  },
});

export const { setProductById, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
