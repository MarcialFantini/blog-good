"use client";
import React, { useEffect, useState } from "react";

import style from "./styled.module.css";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slice/login";

export function Navbar() {
  const dispatch = useAppDispatch();

  const logOutUserHandler = () => dispatch(logout());

  const [activeNavbar, setActiveNavbar] = useState(false);
  const [register, setRegister] = useState(false);
  const [isAdminState, setIsAdminState] = useState(false);

  const toggleNavbar = () => setActiveNavbar(!activeNavbar);

  const isRegister = useAppSelector((state) => state.login.token !== "");
  const isAdmin = useAppSelector((state) => state.login.isAdmin);

  useEffect(() => {
    setRegister(isRegister);
  }, [isRegister]);

  useEffect(() => {
    setIsAdminState(isAdmin);
  }, [isAdmin]);

  return (
    <nav className={style.navbar}>
      <h2 className={style.titleNavbar}> All in One</h2>
      <button onClick={toggleNavbar} className={style.btnActive}>
        navbar
      </button>

      <ul
        className={
          !activeNavbar
            ? style.listLink + " " + style.noActiveNavbar
            : style.listLink + " " + style.activeNavbar
        }
      >
        <li onClick={toggleNavbar} className={style.item}>
          <Link className={style.link} href="/">
            HOME
          </Link>
        </li>
        <li className={style.item}>
          <Link onClick={toggleNavbar} className={style.link} href="/about">
            ABOUT US
          </Link>
        </li>
        <li onClick={toggleNavbar} className={style.item}>
          <Link className={style.link} href="/contact">
            CONTACT US
          </Link>
        </li>
        <li onClick={toggleNavbar} className={style.item}>
          <Link className={style.link} href="/shop">
            SHOP
          </Link>
        </li>

        <li
          style={{ display: !isAdminState ? "none" : "block" }}
          className={style.item}
        >
          <Link href={"/admin"} className={style.button}>
            Admin
          </Link>
        </li>

        <Link
          style={{ display: register ? "none" : "" }}
          href={"/login"}
          className={style.button}
        >
          Login / Sing up
        </Link>
        <li>
          <button onClick={logOutUserHandler}>logOut</button>
        </li>
      </ul>
    </nav>
  );
}
