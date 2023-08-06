"use client";
import { useAppDispatch } from "@/store/hooks";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React from "react";

import style from "./style.module.css";

export function Button({
  func,
  children,
  color,
  cant,
  id,
}: {
  cant: () => void;
  func:
    | ActionCreatorWithPayload<number, "products/plusOne">
    | ActionCreatorWithPayload<number, "products/leesOne">;
  children: string;
  color: number;
  id: number;
}) {
  const dispatch = useAppDispatch();

  const dispatchButton = () => {
    cant();
    dispatch(func(id));
  };

  return (
    <button
      className={style.button + " " + (color === 1 ? style.less : style.more)}
      onClick={dispatchButton}
    >
      {children}
    </button>
  );
}
