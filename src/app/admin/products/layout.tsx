import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Products admin</h2>
      <div>
        <Link href={"/admin/products/create"}>Creators</Link>
        <Link href={"/admin/products/all"}>List</Link>
      </div>
      {children}
    </div>
  );
}
