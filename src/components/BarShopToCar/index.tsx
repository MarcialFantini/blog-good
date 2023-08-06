import React from "react";

import style from "./style.module.css";
import Link from "next/link";

export function BarShopToCar() {
  return (
    <div className={style.bar}>
      <h2>GO to the car!</h2>
      <Link href={"/car"} className={style.button}>
        Car!
      </Link>
    </div>
  );
}
