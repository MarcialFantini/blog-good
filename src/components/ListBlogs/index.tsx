import React from "react";
import { ItemBlog } from "../ItemBlog";
import { pageBlog } from "@/app/admin/blogs/all/page";

export function ListBlogs({ pageBlog }: { pageBlog: pageBlog[] }) {
  return (
    <tbody>
      {pageBlog.map((item) => {
        console.log(item);
        return <ItemBlog key={item.id} item={item}></ItemBlog>;
      })}
    </tbody>
  );
}
