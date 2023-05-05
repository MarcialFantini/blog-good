"use client";
import BlogsPage from "@/components/BlogsPage";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getBlogThunk } from "@/store/slice/blog/thunksBlogs";
import style from "./style.module.css";

import React, { useEffect } from "react";

export interface pageBlog {
  id: number;
  title: string;
  content: string;
  author: string;

  ImagesModels: {
    id: number;
  }[];
}

export interface Data {
  message: string;
  data: pageBlog[];
}

export default function BlogsAdmin() {
  const dispatch = useAppDispatch();

  const { pageBlog, page } = useAppSelector((state) => state.blog);

  const handlerNextPage = () => {
    dispatch(getBlogThunk(page + 1));
  };
  const handlerPrevPage = () => {
    if (page > 0) {
      dispatch(getBlogThunk(page - 1));
    }
  };

  useEffect(() => {
    if (pageBlog.length === 0 && page !== 1) {
      handlerNextPage();
    }
  }, [pageBlog, page]);

  return (
    <div>
      <div className={style.buttons}>
        <button onClick={handlerPrevPage}>Prev</button>
        <button onClick={handlerNextPage}>Next</button>
      </div>
      <BlogsPage pageBlog={pageBlog}></BlogsPage>
      <div className={style.buttons}>
        <button onClick={handlerPrevPage}>Prev</button>
        <button onClick={handlerNextPage}>Next</button>
      </div>
    </div>
  );
}
