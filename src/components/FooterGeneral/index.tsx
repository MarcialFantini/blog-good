import React from "react";
import style from "./style.module.css";
import Link from "next/link";

export function FooterGeneral() {
  return (
    <footer className={style.footer}>
      <h2 className={style.titleNavbar}> All in One</h2>

      <ul className={style.listLink}>
        <li className={style.item}>
          <Link className={style.link} href="/">
            HOME
          </Link>
        </li>

        <li className={style.item}>
          <Link className={style.link} href="/shop">
            SHOP
          </Link>
        </li>
      </ul>
    </footer>
  );
}
