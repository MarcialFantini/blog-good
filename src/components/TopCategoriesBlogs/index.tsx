import React from "react";
import BlogLarge from "../BlogLarge";
import style from "./style.module.css";

export default function TopCategoriesBlogs() {
  return (
    <div className={style.containerTop}>
      <div className={style.gridGreat}>
        <BlogLarge smallType={false}></BlogLarge>
        <BlogLarge smallType={false}></BlogLarge>
      </div>
      <div className={style.grid}>
        <BlogLarge></BlogLarge>
        <BlogLarge></BlogLarge>
        <BlogLarge></BlogLarge>
      </div>
    </div>
  );
}
