"use client";
import React, { useState, useEffect } from "react";
import { TitleDecorated } from "../TitleDecorated";

import style from "./style.module.css";
import { Blogs } from "@/Interfaces/LastBlogs";
import { BlogOne } from "../BlogOne";

interface Props {
  titleCategory: string;
  url: string;
}

export default function RowBlog(props: Props) {
  const [data, setData] = useState<Blogs | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(props.url, {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.containerRowBlog}>
      <TitleDecorated>{props.titleCategory}</TitleDecorated>
      {loading ? (
        ""
      ) : (
        <div className={style.row}>
          {data && data.message
            ? data.message.map((item) => <BlogOne key={item.id} item={item} />)
            : "No data"}
        </div>
      )}
    </div>
  );
}
