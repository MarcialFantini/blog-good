import React from "react";

import style from "./style.module.css";
import Image from "next/image";
import { MessageBlog } from "@/Interfaces/LastBlogs";
import Link from "next/link";

import imgDefault from "../../public/images/contact/contacts.jpg";

interface props {
  item: MessageBlog;
  content?: boolean;
}

export function BlogOne({ item, content }: props) {
  const img = !!item.ImagesModels[0]
    ? `http://localhost:5000/api/v1/images/one/` + item.ImagesModels[0].id
    : imgDefault;
  return (
    <div className={style.blogContainer}>
      <picture className={style.picture}>
        <Image
          className={style.img}
          width={1200}
          height={1200}
          src={img}
          alt="a"
        ></Image>
      </picture>

      <div className={style.category}>
        <div></div>
        <p>{item.category}</p>
      </div>
      <h3 className={style.titleBlog}>{item.title}</h3>
      {!content ? <p className={style.text}>{item.content}</p> : ""}

      <Link className={style.Link} href={`/blog/${item.id}`}>
        <button className={style.Button}>Read Article </button>
      </Link>
    </div>
  );
}
