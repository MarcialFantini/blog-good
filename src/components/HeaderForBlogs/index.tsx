"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

import Paisaje from "../../public/images/blogsPage/paisaje.jpeg";

import style from "./style.module.css";

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

export function HeaderForBlogs() {
  const [Blog, setBlog] = useState<Blog | null>(null);
  const [url, setUrl] = useState<string | StaticImageData>(Paisaje);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/blogs/last/one", { cache: "no-cache" })
      .then((res) => res.json() as Promise<Blog>)
      .then((data) => {
        setBlog(data);

        setUrl(
          "http://localhost:5000/api/v1/images/one/" + data.ImagesModels[0].id
        );
      });
  }, []);

  return (
    <div className={style.containerHeaderBlog}>
      <picture className={style.containerImageBlogHeader}>
        <Image
          className={style.imageBlog}
          width={1000}
          height={500}
          src={url}
          alt="Pagina blog"
        ></Image>
      </picture>
      <div className={style.containerText}>
        <h1>{Blog?.title}</h1>
        <button>READ NOW!</button>
      </div>
    </div>
  );
}
