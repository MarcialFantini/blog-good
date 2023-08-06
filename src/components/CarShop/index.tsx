"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";
import ItemCarShop from "../ItemCarShop";
import { reset } from "@/store/slice/products/products";
import { sendOrders } from "./sendOrder";

export function CarShop() {
  const dispatch = useAppDispatch();
  const carState = useAppSelector((state) => state.products.productsForBuy);
  const tokenUser = useAppSelector((state) => state.login.token);

  const sendAndResetCar = async () => {
    await sendOrders(carState, tokenUser);
    dispatch(reset());
  };

  return (
    <div>
      <h2>CAR SHOP</h2>

      {carState.map((item) => {
        return <ItemCarShop item={item} key={"item " + item.id}></ItemCarShop>;
      })}

      <div>
        <button onClick={sendAndResetCar}>Send order</button>
      </div>
    </div>
  );
}
