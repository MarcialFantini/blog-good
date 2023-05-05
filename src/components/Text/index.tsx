import React from "react";
import style from "./style.module.css";

interface props {
  Texts: string[];
}

export function Text({ Texts }: props) {
  return (
    <div className={style.containerText}>
      {Texts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
