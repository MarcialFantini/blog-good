"use client";
import Image from "next/image";
import React, { useState } from "react";

import style from "./style.module.css";
import { Button } from "../Button";
import { leesOne, plusOne } from "@/store/slice/products/products";

export function ProductShopItem({
  item,
}: {
  item: {
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
  };
}) {
  const [cant, setCant] = useState(0);

  const plusCant = () => {
    setCant((e) => e + 1);
  };
  const lessCant = () => {
    if (cant > 0) {
      setCant((e) => e - 1);
    }
  };

  const img = !!item.ImagesModelProducts[0]
    ? `http://localhost:5000/api/v1/products/images/send/` +
      item.ImagesModelProducts[0].id
    : "";

  return (
    <div className={style.cardProduct}>
      <picture className={style.picture}>
        <Image
          className={style.img}
          width={400}
          height={400}
          src={img}
          alt=""
        ></Image>
      </picture>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <div className={style.actions}>
        <Button id={item.id} cant={plusCant} color={0} func={plusOne}>
          Buy
        </Button>
        <p> {cant}</p>
        <Button id={item.id} cant={lessCant} color={1} func={leesOne}>
          Less
        </Button>
      </div>
    </div>
  );
}
