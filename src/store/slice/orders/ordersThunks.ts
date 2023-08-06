import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./fetchOrders";

interface responseDelOrder {
  code: number;
}

export const delOrder = createAsyncThunk("del-order", async (id: number) => {
  const data = await fetchData<null, responseDelOrder>(
    "http://localhost:5000/api/v1/orders/products/" + id,
    "DELETE"
  );

  return data.code !== 500;
});
