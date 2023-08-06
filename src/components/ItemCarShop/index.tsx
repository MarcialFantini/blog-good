"use client";
import {
  Product,
  delOneItemCar,
  productSelected,
} from "@/store/slice/products/products";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useAppDispatch } from "@/store/hooks";

export interface Data {
  error: boolean;
  message: string;
  code: number;
  body: Body;
}

export interface Body {
  id: number;
  price: number;
  stock: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export default function ItemCarShop({ item }: { item: productSelected }) {
  const [product, setProduct] = useState<Product>();

  const dispatch = useAppDispatch();
  const delItem = () => dispatch(delOneItemCar(item.id));

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/product/one/" + item.id, {
      cache: "no-cache",
    })
      .then((res) => res.json() as Promise<Data>)
      .then((data) => {
        console.group(data);
        setProduct(data.body);
      });
  }, []);

  return (
    <div className={style.containerItem}>
      <h2>{product?.name}</h2>
      <p>Cant: {item.cant}</p>
      <p>Price: {product?.price}</p>
      <p>Price Total: {item.cant * (product ? product.price : 1)}</p>
      <button onClick={delItem}>X</button>
    </div>
  );
}
