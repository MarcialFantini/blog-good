"use client";
import React from "react";
import { ListProducts } from "../ListProducts";
import { useAppSelector } from "@/store/hooks";
import { BarShopToCar } from "../BarShopToCar";

export function ShopPage() {
  const isCarNotEmpty = useAppSelector(
    (state) => state.products.productsForBuy.length > 0
  );

  return (
    <div>
      {isCarNotEmpty ? <BarShopToCar></BarShopToCar> : "empty"}
      <ListProducts page={0}></ListProducts>
    </div>
  );
}
