import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./products";
import { fetchStandardCreator } from "@/hooks/fetchStandardCreator";

interface normalResponseProduct {
  error: boolean;
  message: string;
  code: number;
}

export interface responseCreate {
  error: boolean;
  message: {
    id: number;
    price: number;
    stock: number;
    name: string;
    updatedAt: string;
    createdAt: string;
  };
  code: number;
}

export const createProduct = async ({
  token,
  Product,
}: {
  token: string;
  Product: {
    name: string;
    stock: number;
    price: number;
  };
}) => {
  const data = await fetchStandardCreator<
    {
      name: string;
      stock: number;
      price: number;
    },
    responseCreate
  >("http://localhost:5000/api/v1/product/create", "POST", Product, token);

  return data;
};

export const delProductThunk = createAsyncThunk(
  "del-product-thunk",
  async ({ id, token }: { token: string; id: number }, { rejectWithValue }) => {
    try {
      const data = await fetch(
        `http://localhost:5000/api/v1/product/delete/one/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );

      if (!data.ok) {
        throw new Error("Error al obtener la lista de productos");
      }

      return data.ok;
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const updateProductThunk = createAsyncThunk(
  "update-product-thunk",
  async (
    {
      id,
      token,
      updatedProduct,
    }: {
      token: string;
      id: number;
      updatedProduct: {
        price: number;
        stock: number;
        name: string;
      };
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/product/update/one/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener la lista de productos");
      }

      return response.ok;
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const getProductsThunk = createAsyncThunk(
  "get-products-thunk",
  async ({ page }: { page: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/product/list/limit/20/page/${page}`
      );

      if (!response.ok) {
        throw new Error("Error al obtener la lista de productos");
      }

      const data = (await response.json()) as {
        error: boolean;
        message: string;
        code: number;
        products: {
          id: number;
          price: number;
          stock: number;
          name: string;
          createdAt: string;
          updatedAt: string;
        }[];
      };

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
