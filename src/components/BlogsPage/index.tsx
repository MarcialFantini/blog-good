import React from "react";
import FormBlog, { Blog } from "../FormBlog";
import { ListBlogs } from "../ListBlogs";
import { pageBlog } from "@/app/admin/blogs/all/page";

import style from "./style.module.css";

export default function BlogsPage({ pageBlog }: { pageBlog: pageBlog[] }) {
  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>

          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <ListBlogs pageBlog={pageBlog}></ListBlogs>
    </table>
  );
}
