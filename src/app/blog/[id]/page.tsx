"use client";

import Image from "next/image";
import imgUrl from "../../../public/images/women.jpg";

import style from "./style.module.css";
import React, { useEffect, useState } from "react";

interface Response {
  message: string;
  data: Blog;
}

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

function BlogId({ params }: { params: { id: number } }) {
  const [blog, setBlog] = useState<Blog>({
    id: 0,
    title: "",
    content: "",
    author: "",
    published: false,
    category: "",
    createdAt: "",
    updatedAt: "",
    Likes: [],
    Comments: [],
    ImagesModels: [
      {
        id: 12,
      },
    ],
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blogs/one/${params.id}`, {
      cache: "no-cache",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("error to fetch");
        } else {
          return response.json() as Promise<Response>;
        }
      })

      .then((data) => {
        setBlog(data.data);
      })

      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, []);

  return (
    <div className={style.containerBlog}>
      <h2 className={style.title}>{blog.title}</h2>
      <p className={style.author}>Author: {blog.author}</p>
      <p className={style.author}>Date: {blog.createdAt}</p>

      <picture className={style.picture}>
        <Image
          width={1500}
          height={1200}
          className={style.img}
          src={
            "http://localhost:5000/api/v1/images/one/" + blog.ImagesModels[0].id
          }
          alt=""
        />
        <h3 className={style.category}>{blog.category}</h3>
      </picture>
      <div className={style.containerText}>
        <p className={style.text}> - {blog.content}</p>
      </div>
    </div>
  );
}

export default BlogId;
