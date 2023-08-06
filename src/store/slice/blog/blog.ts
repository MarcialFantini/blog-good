import { Blog } from "@/components/FormBlog";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  createBlogThunk,
  delBlogThunk,
  getBlogThunk,
  updateBlog,
} from "./thunksBlogs";
import { pageBlog } from "@/app/admin/blogs/all/page";

interface InitialState {
  isFetching: boolean;
  page: number;
  operation: string;
  isFetchingOk: boolean;
  endFetch: boolean;
  pageBlog: pageBlog[];
  isModifique: boolean;
  addImg: boolean;
  blogIdSelected: number;
  blogSelected: {
    id: number;
    title: string;
    content: string;
    author: string;
    published: boolean;
    category: string;
    createdAt: string;
    updatedAt: string;
    Likes: never[];
    Comments: never[];
    ImagesModels: never[];
  };
}

const initialState: InitialState = {
  page: 0,
  isFetching: false,
  pageBlog: [],
  operation: "",
  isFetchingOk: false,
  endFetch: false,
  isModifique: false,
  addImg: false,
  blogIdSelected: 0,
  blogSelected: {
    id: 0,
    title: "",
    content: "",
    author: "",
    published: false,
    category: "",
    createdAt: "",
    updatedAt: "",
    Likes: [],
    Comments: [],
    ImagesModels: [],
  },
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
    updateToggle: (state) => {
      state.isModifique = !state.isModifique;
    },
    addImgToggle: (state, action: PayloadAction<number>) => {
      state.addImg = !state.addImg;
      state.blogIdSelected = action.payload;
    },
    selectBlog: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        content: string;
        author: string;
        published: boolean;
        category: string;
        createdAt: string;
        updatedAt: string;
        Likes: never[];
        Comments: never[];
        ImagesModels: never[];
      }>
    ) => {
      state.blogSelected = action.payload;
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
      state.blogIdSelected = action.payload;
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
    build.addCase(updateBlog.fulfilled, (state, action) => {
      const index = state.pageBlog.findIndex(
        (state) => state.id === action.payload.id
      );
      state.pageBlog[index] = { ...action.payload.blogUpdate };
    });
  },
});

export const blogReducer = blogSlice.reducer;

export const { restore, updateToggle, selectBlog, addImgToggle } =
  blogSlice.actions;
