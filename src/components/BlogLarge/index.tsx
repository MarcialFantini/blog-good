import Image from "next/image";
import React from "react";

import style from "./style.module.css";

interface props {
  smallType?: boolean;
}

export default function BlogLarge({ smallType }: props) {
  return (
    <div className={style.containerBlog}>
      <picture>
        <Image
          className={style.img}
          src="http://localhost:5000/api/v1/images/one/5"
          width={1200}
          height={1200}
          alt=""
        />
      </picture>
      <div className={style.textContainer}>
        <h2 className="title">
          4 Reasons Why You Should Opt for the Amtrak Experience
        </h2>
        {smallType !== undefined ? (
          <p>
            Breast cancer occurs when cells in the breast mutate and grow out of
            control.
          </p>
        ) : (
          ""
        )}
        <button className={style.readArticle}>Read Article</button>
      </div>
    </div>
  );
}
