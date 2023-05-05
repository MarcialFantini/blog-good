"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginThunk } from "@/store/actions/login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({ email: "", password: "" });

  const handlerIsLogin = () => router.push("/");

  const dispatch = useAppDispatch();
  const isToken = useAppSelector((state) => state.login.token !== "");

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginThunk(user));
  };

  useEffect(() => {
    if (isToken) {
      handlerIsLogin();
    }
  }, [isToken]);

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Login User</h2>
      <label className={styles.label}>
        Email:
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handlerOnChange}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Password:
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handlerOnChange}
          required
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Iniciar sesión
      </button>
    </form>
  );
}
