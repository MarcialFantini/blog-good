import { Blog } from "@/Interfaces/LastBlogs";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStandardCreator } from "../../../hooks/fetchStandardCreator";
import { getPage } from "@/hooks/getPage";
import { Data } from "@/app/admin/blogs/all/page";

interface responseGetPage {
  Data: Data;
  page: number;
}

interface responseCreate {
  message: string;
}

interface responseDel {
  message: string;
}

export const createBlogThunk = createAsyncThunk(
  "create-blog-thunk",
  async (
    { blog, token }: { blog: Blog; token: string },
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchStandardCreator<Blog, responseCreate>(
        "http://localhost:5000/api/v1/blogs/create",
        "POST",
        blog,
        token
      );

      console.log(data);

      if (data.message !== "created blog") {
        throw new Error();
      }
      return data;
    } catch (error) {
      return rejectWithValue("");
    }
  }
);

export const getBlogThunk = createAsyncThunk(
  "get-page-blog",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/blogs/page/${page}`,
        { cache: "no-cache" }
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      if (!data) {
        throw new Error();
      }

      return { Data: data, page } as responseGetPage;
    } catch (error) {
      return rejectWithValue("");
    }
  }
);

export const delBlogThunk = createAsyncThunk(
  "del-blog-thunk",
  async ({ id, token }: { id: number; token: string }, { rejectWithValue }) => {
    try {
      const data = await fetchStandardCreator<{}, responseDel>(
        `http://localhost:5000/api/v1/blogs/${id}`,
        "DELETE",
        {},
        token
      );

      if (data.message !== "deleted blog") {
        throw new Error();
      }

      return { id };
    } catch (error) {
      return rejectWithValue("");
    }
  }
);
