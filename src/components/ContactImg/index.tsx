import Image, { StaticImageData } from "next/image";
import React from "react";

import style from "./style.module.css";

interface props {
  srcImg: StaticImageData;
  alt: string;
}

function ContactImg({ srcImg, alt }: props) {
  return (
    <picture className={style.picture}>
      <Image className={style.img} alt={alt} src={srcImg}></Image>
    </picture>
  );
}

export default ContactImg;
