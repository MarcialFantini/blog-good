"use client";
import React, { useEffect } from "react";
import { HeaderForBlogs } from "../HeaderForBlogs";
import { CustomFetchBlogs } from "./CustomFetchBlogs";
import { ListOfBlogs } from "../ListOfBlogs";

export function BlogPageMain() {
  const { fetchData, data, firstBlog } = CustomFetchBlogs();

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <div>
      <HeaderForBlogs></HeaderForBlogs>
      <ListOfBlogs Data={data}></ListOfBlogs>
    </div>
  );
}
