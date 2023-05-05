"use client";
import React from "react";
import NavBlog from "../NavBlog";
import { pageBlog } from "@/app/admin/blogs/all/page";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { delBlogThunk } from "@/store/slice/blog/thunksBlogs";

export function ItemBlog({ item }: { item: pageBlog }) {
  const token = useAppSelector((state) => state.login.token);
  const dispatch = useAppDispatch();

  const handlerDelBlog = () =>
    dispatch(delBlogThunk({ id: item.id, token: token }));

  return (
    <tr className={style["row"]}>
      <td>{item.id}</td>
      <td>{item.title}</td>

      <td>{item.author}</td>
      <td className={style["buttons"]}>
        <button onClick={handlerDelBlog} className={style.del}>
          Del
        </button>
        <button className={style.update}>Update</button>
      </td>
    </tr>
  );
}
