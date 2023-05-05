import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./products";
import { fetchStandardCreator } from "@/hooks/fetchStandardCreator";

interface normalResponseProduct {
  error: boolean;
  message: string;
  code: number;
}

export const createProductThunk = createAsyncThunk(
  "create-product-thunk",
  async (
    { token, Product }: { token: string; Product: Product },
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchStandardCreator<Product, normalResponseProduct>(
        "http://localhost:5000/api/v1/product/create",
        "POST",
        Product,
        token
      );

      if (data.error) {
        throw new Error("Error");
      }

      if (data.code !== 201) {
        throw new Error("Error to created");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
