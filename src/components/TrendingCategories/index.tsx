"use client";
import React, { useEffect, useState } from "react";
import { TitleDecorated } from "../TitleDecorated";
import { BlogOne } from "../BlogOne";
import { Message } from "@/Interfaces/LastBlogs";

import style from "./style.module.css";

export function TrendingCategories() {
  const [isFinding, setIsFinding] = useState(false);
  const [data, setData] = useState<Message[]>([]);
  useEffect(() => {
    setIsFinding(true);

    fetch("http://localhost:5000/api/v1/blogs/custom/6", {
      cache: "no-cache",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.message);
        setIsFinding(false);
        return data.message;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <TitleDecorated>Trending Articles</TitleDecorated>
      <div className={style.gridBlogs}>
        {isFinding ? <h2>Fetch Data</h2> : ""}
        {data.map((item) => (
          <BlogOne key={item.id} content={true} item={item}></BlogOne>
        ))}
      </div>
    </div>
  );
}
