import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { RegisterCreateUser } from "./thunksRegister";
const initialState = {
  isFetching: false,
  fail: false,
  isRegister: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    toggleFail: (state) => {
      state.fail = !state.fail;
    },
    toggleIsRegister: (state) => {
      state.isRegister = !state.isRegister;
    },
  },
  extraReducers: (build) => {
    build.addCase(RegisterCreateUser.pending, (state) => {
      state.isFetching = true;
    });
    build.addCase(RegisterCreateUser.rejected, (state, actions) => {
      state.fail = true;
      state.isFetching = false;
    });
    build.addCase(RegisterCreateUser.fulfilled, (state) => {
      state.isFetching = false;
      state.isRegister = true;
    });
  },
});

export const { toggleFail, toggleIsRegister } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;
