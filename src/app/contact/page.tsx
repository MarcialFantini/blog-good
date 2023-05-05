import ContainerImg from "@/components/ContainerImg";
import FormContact from "@/components/FormContact";
import React from "react";
import contactImg from "../../public/images/contact/contacts.jpg";
import ContactImg from "@/components/ContactImg";
import style from "./style.module.css";

export default function page() {
  return (
    <div className={style.grid}>
      <FormContact></FormContact>
      <ContactImg srcImg={contactImg} alt="Contact img"></ContactImg>
    </div>
  );
}
