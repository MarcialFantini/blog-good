import React from "react";

import style from "./style.module.css";

export default function SelectCategory() {
  return (
    <ul className={style.containerSelect}>
      <li>
        <button>TRAVEL</button>
      </li>
      <li>
        <button>HEALTH</button>
      </li>
      <li>
        <button>SHOPPING</button>
      </li>
      <li>
        <button>FINANCE</button>
      </li>
    </ul>
  );
}
