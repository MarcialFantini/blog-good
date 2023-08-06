"use client";
import React, { useEffect, useState } from "react";
import { ProductShopItem } from "../ProducShopItem";

import style from "./style.module.css";

interface Data {
  error: boolean;
  message: string;
  code: number;
  products: {
    id: number;
    price: number;
    stock: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    ImagesModelProducts: {
      id: number;
      url_img: string;
      product_id: number;
      createdAt: string;
      updatedAt: string;
    }[];
  }[];
}

export function ListProducts({ page }: { page: number }) {
  const [products, setProducts] = useState<Data>();

  const findProducts = async (page: number) => {
    fetch(`http://localhost:5000/api/v1/product/list/limit/20/page/${page}`)
      .then((x) => x.json() as unknown as Data)
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    findProducts(page);
  }, []);

  return (
    <div className={style.ContainerList}>
      {products
        ? products.products.map((item) => {
            return <ProductShopItem item={item}></ProductShopItem>;
          })
        : ""}
    </div>
  );
}
