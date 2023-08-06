import TableProducts from "@/components/TableProducts";
import { UpdateFormProduct } from "@/components/UpdateFormProduct";
import { useAppSelector } from "@/store/hooks";
import React from "react";

export default function AllPage() {
  return (
    <div>
      <TableProducts></TableProducts>
    </div>
  );
}
