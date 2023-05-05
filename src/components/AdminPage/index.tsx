import React from "react";
import { TitleDecorated } from "../TitleDecorated";
import style from "./style.module.css";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className={style.containerPage}>
      <div className={style.containerText}>
        <TitleDecorated>Admin Section blogs</TitleDecorated>
        <p className={style.text}>
          As a website administrator, the ability to create, edit, view, and
          delete blogs is an essential tool for effective online content
          management. The ability to create new blogs, edit their content, see
          how they appear on the website, and delete obsolete or inappropriate
          blogs provides complete control over the platform, ensuring it remains
          up-to-date and relevant for visitors.
        </p>
        <Link className={style.link} href={"/admin/blogs/"}>
          Blogs Admin
        </Link>
      </div>
      <div className={style.containerText}>
        <TitleDecorated>Admin Section Products</TitleDecorated>
        <p className={style.text}>
          As an administrator of an online store, the ability to create, edit,
          view, and delete products is a crucial feature for efficient product
          management. The capability to create new products, edit their details,
          view how they are displayed on the website, and remove outdated or
          irrelevant products provides complete control over the inventory and
          ensures that the online store remains up-to-date and relevant for
          customers.
        </p>
        <Link className={style.link} href={"/admin/products"}>
          Products Admin
        </Link>
      </div>
    </div>
  );
}
