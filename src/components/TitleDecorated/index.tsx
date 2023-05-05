import React from "react";

import style from "./style.module.css";
import Image from "next/image";

import line from "../../public/images/line.webp";

interface prop {
  children: string;
}

export function TitleDecorated({ children }: prop) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{children}</h2>
      <picture className={style.sub}>
        <Image className={style.img} src={line} alt="linea"></Image>
      </picture>
    </div>
  );
}
