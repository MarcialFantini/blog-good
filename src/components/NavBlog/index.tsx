import Link from "next/link";
import React from "react";

export default function NavBlog() {
  return (
    <div>
      <h2>Admin Blog</h2>
      <Link href={"/admin/blogs/create"}>Create Blog</Link>
      <Link href={"/admin/blogs/all"}>List Blogs</Link>
    </div>
  );
}
