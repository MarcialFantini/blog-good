import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slice/login";
import { blogReducer } from "./slice/blog/blog";
import { registerReducer } from "./slice/register/register";
import { productsReducer } from "./slice/products/products";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    blog: blogReducer,
    register: registerReducer,
    products: productsReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
