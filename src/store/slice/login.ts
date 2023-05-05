import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../actions/login";

const token =
  typeof window !== "undefined" ? localStorage.getItem("tokenApi") : null;

const isAdmin =
  typeof window !== "undefined" ? localStorage.getItem("isAdmin") : null;

interface InitialState {
  token: string;
  isError: boolean;
  isAdmin: boolean;
}

const initialState: InitialState = {
  token: token ? token : "",
  isError: false,
  isAdmin: isAdmin === "admin",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("tokenApi");
      localStorage.removeItem("isAdmin");

      state.isAdmin = false;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, actions) => {
      state.isError = !actions.payload.isLogin;
      state.token = actions.payload.token;
      state.isAdmin = !!actions.payload.isAdmin;
      localStorage.setItem("tokenApi", actions.payload.token);
      localStorage.setItem("isAdmin", !!actions.payload.isAdmin ? "admin" : "");
    });
  },
});

export const { logout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
