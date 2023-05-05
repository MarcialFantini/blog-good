"use client";
import TableProducts from "@/components/TableProducts";
import { useAppSelector } from "@/store/hooks";
import React from "react";

export default function AllPage() {
  const products = useAppSelector((state) => state.products.listProducts);

  return (
    <div>
      <TableProducts></TableProducts>
    </div>
  );
}
