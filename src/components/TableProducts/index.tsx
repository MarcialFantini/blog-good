"use client";
import style from "./style.module.css";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { Children, useEffect, useState } from "react";
import { ItemTableProduct } from "../ItemTableProduct";
import { getProductsThunk } from "@/store/slice/products/productSlice";
import { UpdateFormProduct } from "../UpdateFormProduct";

export default function TableProducts() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [activeUpdateForm, setActiveUpdateForm] = useState(false);
  const products = useAppSelector((state) => state.products.listProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsThunk({ page: 0 }));
  }, []);

  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>id</th>
            <th className={style.th}>name</th>
            <th className={style.th}>price</th>
            <th className={style.th}>stock</th>
            <th className={style.th}>actions</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {products.map((item) => (
            <ItemTableProduct
              setActiveUpdateForm={setActiveUpdateForm}
              setSelectedProduct={setSelectedProduct}
              product={item}
            ></ItemTableProduct>
          ))}
        </tbody>
      </table>
      {activeUpdateForm ? (
        <UpdateFormProduct
          setActiveUpdateForm={setActiveUpdateForm}
          id={selectedProduct}
        ></UpdateFormProduct>
      ) : null}
    </>
  );
}
