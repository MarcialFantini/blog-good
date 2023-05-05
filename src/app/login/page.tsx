import LoginPage from "@/components/LoginPage";
import React from "react";

import style from "./style.module.css";
import RegistrationPage from "@/components/RegisterUser";

export default function Login() {
  return (
    <div className={style.grid}>
      <LoginPage></LoginPage>
      <RegistrationPage></RegistrationPage>
    </div>
  );
}
