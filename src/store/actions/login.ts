import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../fetchs/login";

export const loginThunk = createAsyncThunk(
  "login-user",
  async (user: { password: string; email: string }) => {
    console.log(user);
    const data = await loginUser(user.password, user.email);
    console.log(data);
    return data;
  }
);
