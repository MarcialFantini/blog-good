import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  published: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
  Likes: any[];
  Comments: any[];
  ImagesModels: ImagesModel[];
}

interface ImagesModel {
  id: number;
}

export function ContainerBlogItem({ Blog }: { Blog: Blog }) {
  return (
    <div className={style.containerBlog}>
      <h2 className={style.titleBlog}>{Blog.title}</h2>
      <p className={style.author}>{Blog.author}</p>
      <picture className={style.containerImage}>
        <Image
          className={style.image}
          width={500}
          height={400}
          src={
            "http://localhost:5000/api/v1/images/one/" + Blog.ImagesModels[0].id
          }
          alt="Image Blog"
        ></Image>
        <p className={style.textOfImage}>{Blog.category}</p>
      </picture>
      <Link href={"/blog/" + Blog.id}>
        <button className={style.button}>READ MORE!</button>
      </Link>
    </div>
  );
}
