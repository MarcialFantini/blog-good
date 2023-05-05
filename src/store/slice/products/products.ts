import { createSlice } from "@reduxjs/toolkit";
import { createProductThunk } from "./productSlice";

export interface Product {
  id: number;
  price: number;
  stock: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface InitialState {
  pending: boolean;
  complete: boolean;
  isOk: boolean;
  listProducts: Product[];
}

const initialState: InitialState = {
  pending: false,
  complete: false,
  isOk: false,
  listProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(createProductThunk.pending, (state) => {
      state.pending = true;
    });
    build.addCase(createProductThunk.fulfilled, (state) => {
      state.pending = false;
    });
  },
});

export const {} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
