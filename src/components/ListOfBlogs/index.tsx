import React from "react";
import { ContainerBlogItem } from "../ContainerBlogItem";
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
export function ListOfBlogs({ Data }: { Data: Blog[] | null }) {
  return (
    <div className={style.containerBlogs}>
      {Data
        ? Data.map((Blog) => (
            <ContainerBlogItem Blog={Blog}></ContainerBlogItem>
          ))
        : ""}
    </div>
  );
}
