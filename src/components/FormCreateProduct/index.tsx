"use client";
import { useFormHook } from "@/hooks/useFormHook";
import React from "react";

import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createProductThunk } from "@/store/slice/products/productSlice";

const initialState = {
  name: "",
  stock: 0,
  price: 0,
};

export default function FormCreateProduct() {
  const { values, handlerOnChange, resetValues } = useFormHook(initialState);

  const token = useAppSelector((state) => state.login.token);

  const dispatch = useAppDispatch();
  const handlerCreateProductForm = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    dispatch(createProductThunk({ token, Product: values }));
    resetValues(initialState);
  };

  return (
    <form onSubmit={handlerCreateProductForm} className={style.form}>
      <h2>Form creator Product</h2>
      <label>
        Name
        <input
          value={values.name}
          onChange={handlerOnChange}
          type="text"
          name="name"
        />
      </label>
      <label>
        Stock
        <input
          value={values.stock}
          onChange={handlerOnChange}
          type="number"
          name="stock"
        />
      </label>
      <label>
        Price
        <input
          value={values.price}
          onChange={handlerOnChange}
          type="number"
          name="price"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
