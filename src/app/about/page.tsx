import ContainerImg from "@/components/ContainerImg";
import { Text } from "@/components/Text";
import React from "react";
import style from "./style.module.css";

import srcUrl from "../../public/images/about/aboutUs.jpg";
import { TitleDecorated } from "@/components/TitleDecorated";

const txt = [
  "At All in One, our vision is to be the ultimate online destination for those seeking great blogs and top-quality products. We believe that everyone deserves access to inspiring blogs and exceptional products that enhance their everyday life. We are passionate about curating and showcasing the best blogs across a wide range of topics, from fashion and beauty to home and lifestyle. Our goal is to provide our visitors with an enriching and educational experience, offering them valuable content that inspires and informs.",
  "In addition to our commitment to quality content, we are also dedicated to selling products that excel in terms of quality, usefulness, and style. We work closely with trusted brands and suppliers to ensure that all the products we offer on our website are carefully selected to meet the needs and expectations of our visitors. We believe that everyone deserves access to high-quality products that enhance their daily life, and we take pride in offering a wide range of options to suit all tastes and needs. At All in One, we strive to be the go-to destination for those seeking top-quality blogs and products that enrich their lives.",
];

export default function page() {
  return (
    <div className={style.containerTotal}>
      <TitleDecorated>About Us</TitleDecorated>

      <div className={style.grid}>
        <Text Texts={txt}></Text>
        <ContainerImg srcImg={srcUrl} alt="About us"></ContainerImg>
      </div>
    </div>
  );
}
