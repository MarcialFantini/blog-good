import Image from "next/image";
import React from "react";

import women from "../../public/images/women.jpg";
import style from "./style.module.css";
import { TitleDecorated } from "../TitleDecorated";

function HeaderHome() {
  return (
    <header className={style.containerHeader}>
      <div className={style.textContainer}>
        <p>
          <span className={style.line}></span>SHOPPING
        </p>
        <h2>7 Trends That Are Dominating Women's Fashion</h2>
        <button>Read Article</button>
      </div>
      <div className={style.imageContainer}>
        <picture className={style.picture}>
          <Image className={style.imgHeader} src={women} alt="women"></Image>
        </picture>
      </div>
    </header>
  );
}

export default HeaderHome;
