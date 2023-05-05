import NavBlog from "@/components/NavBlog";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBlog></NavBlog>
      {children}
    </div>
  );
}
