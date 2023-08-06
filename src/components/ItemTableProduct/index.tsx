"use client";
import React from "react";

import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { delProductThunk } from "@/store/slice/products/productSlice";

interface product {
  id: number;
  price: number;
  stock: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

function ItemTableProduct({
  product,
  setSelectedProduct,
  setActiveUpdateForm,
}: {
  product: product;
  setSelectedProduct: React.Dispatch<React.SetStateAction<number>>;
  setActiveUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const token = useAppSelector((state) => state.login.token);

  const dispatch = useAppDispatch();
  const deleteDispatch = () => {
    dispatch(delProductThunk({ token: token, id: product.id }));
  };

  return (
    <tr className={style.tr}>
      <td>{product.id}</td>
      <td>{product.name}</td>

      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>
        <button onClick={deleteDispatch} className={style.del}>
          DEL
        </button>{" "}
        <button
          onClick={() => {
            setSelectedProduct(product.id);
            setActiveUpdateForm(true);
          }}
          className={style.update}
        >
          UPDATE
        </button>
      </td>
    </tr>
  );
}

export { ItemTableProduct };
