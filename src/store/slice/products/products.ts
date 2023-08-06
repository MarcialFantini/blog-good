import {
  ActionCreator,
  PayloadAction,
  PayloadActionCreator,
  createSlice,
} from "@reduxjs/toolkit";
import {
  delProductThunk,
  getProductsThunk,
  updateProductThunk,
} from "./productSlice";

export interface Product {
  id: number;
  price: number;
  stock: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
export interface productSelected {
  id: number;
  cant: number;
}

interface InitialState {
  pending: boolean;
  complete: boolean;
  isOk: boolean;
  listProducts: Product[];
  productsForBuy: productSelected[];
  lastId: number;
}

const initialState: InitialState = {
  pending: false,
  complete: false,
  isOk: false,
  listProducts: [],
  productsForBuy: [],
  lastId: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    delOneItemCar: (state, action: PayloadAction<number>) => {
      const newListCar = state.productsForBuy.filter(
        (item) => item.id !== action.payload
      );
      state.productsForBuy = newListCar;
    },
    plusOne: (state, action: PayloadAction<number>) => {
      const isThereIndex = state.productsForBuy.findIndex(
        (item) => item.id === action.payload
      );

      if (isThereIndex === -1) {
        state.productsForBuy.push({ id: action.payload, cant: 1 });
      } else {
        state.productsForBuy[isThereIndex].cant += 1;
      }
    },
    leesOne: (state, action: PayloadAction<number>) => {
      const index = state.productsForBuy.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        if (state.productsForBuy[index].cant > 1) {
          state.productsForBuy[index].cant -= 1;
        } else {
          state.productsForBuy.splice(index, 1);
        }
      }
    },
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (build) => {
    // create case

    // del case
    build.addCase(delProductThunk.fulfilled, (state, action) => {
      state.pending = false;
      state.isOk = action.payload;
      const newList = state.listProducts.filter(
        (product) => product.id !== action.meta.arg.id
      );
      state.listProducts = newList;
    });
    build.addCase(delProductThunk.rejected, (state) => {
      state.pending = false;
      state.isOk = false;
    });

    // update case

    build.addCase(updateProductThunk.pending, (state) => {
      state.pending = false;
    });
    build.addCase(updateProductThunk.fulfilled, (state, action) => {
      state.pending = false;
      const newList = state.listProducts.filter(
        (product) => product.id !== action.meta.arg.id
      );

      const product = {
        ...action.meta.arg.updatedProduct,
        id: action.meta.arg.id,
        createdAt: "",
        updatedAt: "",
      };
      newList.push(product);

      state.listProducts = newList;
      // Actualiza los productos según tus necesidades
    });
    build.addCase(updateProductThunk.rejected, (state, action) => {
      state.pending = false;
      state.isOk = false;
    });

    // get case

    build.addCase(getProductsThunk.pending, (state) => {
      state.pending = true;
    });
    build.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.pending = false;
      state.listProducts = action.payload.products;
    });
    build.addCase(getProductsThunk.rejected, (state) => {
      state.pending = false;
    });
  },
});

export const { plusOne, leesOne, reset, delOneItemCar } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
