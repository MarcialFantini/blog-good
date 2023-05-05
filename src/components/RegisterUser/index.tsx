"use client";
import React, { useEffect } from "react";
import styles from "./style.module.css";
import { useFormHook } from "@/hooks/useFormHook";
import { fetchStandardCreator } from "@/hooks/fetchStandardCreator";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RegisterCreateUser } from "@/store/slice/register/thunksRegister";
import { toggleFail } from "@/store/slice/register/register";

const initialState = {
  email: "",
  password: "",
  phone: "",
  name: "",
};

export default function RegistrationPage() {
  const { values, handlerOnChange } = useFormHook(initialState);

  const dispatch = useAppDispatch();
  const { fail, isFetching, isRegister } = useAppSelector(
    (state) => state.register
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(RegisterCreateUser(values));
  };

  useEffect(() => {
    if (fail) {
      setTimeout(() => {
        dispatch(toggleFail());
      }, 2000);
    }
  }, [fail]);

  return (
    <form
      style={{ transition: "all 0.3s", display: isRegister ? "none" : "" }}
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <h2
        style={{ color: fail ? "red" : "", transition: "all 0.3s" }}
        className={styles.title}
      >
        {" "}
        {!fail ? "Register User" : "Error to created"}
      </h2>

      <h2
        style={{ transition: "all 0.3s", opacity: isFetching ? 1 : 0 }}
        className={styles.title}
      >
        {" "}
        Creating User
      </h2>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          value={values.email}
          onChange={handlerOnChange}
          name="email"
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Password:
        <input
          type="password"
          value={values.password}
          onChange={handlerOnChange}
          name="password"
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Phone:
        <input
          type="tel"
          value={values.phone}
          onChange={handlerOnChange}
          name="phone"
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          value={values.name}
          onChange={handlerOnChange}
          name="name"
          required
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Register
      </button>
    </form>
  );
}
