"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import { updateProductThunk } from "@/store/slice/products/productSlice";

function UpdateFormProduct({
  id,
  setActiveUpdateForm,
}: {
  id: number;
  setActiveUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [active, setActive] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    stock: 0,
    price: 0,
  });

  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.login.token);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      updateProductThunk({ token: token, id: id, updatedProduct: formValues })
    );
    setActiveUpdateForm(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 300);
  }, []);

  return (
    <div
      key={"container-form-update " + id}
      className={style.containerUpdateForm}
    >
      <form
        className={
          active
            ? style.containerForm + " " + style.active
            : style.containerForm
        }
        onSubmit={handleSubmit}
      >
        <h2>Form Update Product</h2>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            className={style.input}
          />
        </label>
        <label>
          <p>Stock</p>
          <input
            type="number"
            name="stock"
            value={formValues.stock}
            onChange={handleInputChange}
            className={style.input}
          />
        </label>
        <label>
          <p>Price</p>
          <input
            type="number"
            name="price"
            value={formValues.price}
            onChange={handleInputChange}
            className={style.input}
          />
        </label>
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export { UpdateFormProduct };
