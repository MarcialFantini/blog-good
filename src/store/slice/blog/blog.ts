import { Blog } from "@/components/FormBlog";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createBlogThunk, delBlogThunk, getBlogThunk } from "./thunksBlogs";
import { pageBlog } from "@/app/admin/blogs/all/page";

interface InitialState {
  isFetching: boolean;
  page: number;
  operation: string;
  isFetchingOk: boolean;
  endFetch: boolean;
  pageBlog: pageBlog[];
}

const initialState: InitialState = {
  page: 0,
  isFetching: false,
  pageBlog: [],
  operation: "",
  isFetchingOk: false,
  endFetch: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    restore: (state) => {
      state.endFetch = false;
      state.isFetching = false;
      state.isFetchingOk = false;
    },
  },
  extraReducers: (build) => {
    build.addCase(createBlogThunk.pending, (state) => {
      state.isFetching = true;
    });
    build.addCase(createBlogThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isFetchingOk = true;
      state.endFetch = true;
    });
    build.addCase(createBlogThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.endFetch = true;
    });

    build.addCase(getBlogThunk.pending, (state) => {
      state.isFetching = true;
    });
    build.addCase(getBlogThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.Data.data && action.payload.Data.data.length > 0) {
        const data = action.payload.Data.data.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }

          return 0;
        });
        state.pageBlog = data;
        state.page = action.payload.page;
      }
      state.isFetching = false;
    });
    build.addCase(delBlogThunk.pending, (state) => {
      state.isFetching = true;
    });
    build.addCase(delBlogThunk.fulfilled, (state, actions) => {
      state.pageBlog = state.pageBlog.filter(
        (item) => item.id !== actions.payload.id
      );
    });
  },
});

export const blogReducer = blogSlice.reducer;

export const { restore } = blogSlice.actions;
