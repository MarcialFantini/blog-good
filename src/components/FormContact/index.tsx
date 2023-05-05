"use client";
import React from "react";

import style from "./style.module.css";
import { useFormHook } from "@/hooks/useFormHook";

const initialStateContact = {
  name: "",
  email: "",
  message: "",
};

export default function FormContact() {
  const { values, handlerOnChange, sendContactData } =
    useFormHook(initialStateContact);
  return (
    <form onSubmit={sendContactData} className={style.formContact}>
      <label>
        Name:
        <input
          onChange={handlerOnChange}
          name="name"
          value={values.name}
          type="text"
        />
      </label>
      <label>
        Email:
        <input
          onChange={handlerOnChange}
          name="email"
          value={values.email}
          type="email"
        />
      </label>
      <label>
        Message:
        <textarea
          onChange={handlerOnChange}
          name="message"
          value={values.message}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
