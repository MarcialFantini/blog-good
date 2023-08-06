import { createSlice } from "@reduxjs/toolkit";
import { delOrder } from "./ordersThunks";

export interface OrdersInterface {
  itemsInOrders: [];
}

const initialState: OrdersInterface = {
  itemsInOrders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(delOrder.fulfilled, (state, actions) => {
      if (actions.payload) {
      }
    });
  },
});

export const {} = ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;
