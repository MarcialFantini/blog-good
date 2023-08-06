"use client";
import { useFormHook } from "@/hooks/useFormHook";
import React, { useState } from "react";

import style from "./style.module.css";
import { useAppSelector } from "@/store/hooks";
import { createProduct } from "@/store/slice/products/productSlice";
import { saveProductImages } from "./sendImages";
import { reset } from "@/store/slice/products/products";

const initialState = {
  name: "",
  stock: 0,
  price: 0,
};

export default function FormCreateProduct() {
  const { values, handlerOnChange, resetValues } = useFormHook(initialState);
  const [newId, setNewId] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    setSelectedFiles(Array.from(event.target.files));
  };

  const token = useAppSelector((state) => state.login.token);

  const handlerCreateProductForm = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (selectedFiles) {
      createProduct({ token, Product: values })
        .then((data) => saveProductImages(`${data.message.id}`, selectedFiles))
        .catch((err) => console.log(err));
    }
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

      <input onChange={handleFileChange} type="file" name="images" multiple />

      <button type="submit">Submit</button>
    </form>
  );
}
