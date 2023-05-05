import React from "react";
import { TitleDecorated } from "../TitleDecorated";
import style from "./style.module.css";

import SelectCategory from "../SelectCategory";
import TopCategoriesBlogs from "../TopCategoriesBlogs";

export function TopCategories() {
  return (
    <div className={style.containerAll}>
      <TitleDecorated>TOP CATEGORIES</TitleDecorated>
      <div className={style.containerTop}>
        <SelectCategory></SelectCategory>

        <TopCategoriesBlogs></TopCategoriesBlogs>
        <button className={style.button}>View More</button>
      </div>
    </div>
  );
}
