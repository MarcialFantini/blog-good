"use client";
import { useFormUpdate } from "@/hooks/useFormUpdate";
import React, { useEffect } from "react";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateToggle } from "@/store/slice/blog/blog";
import { updateBlog } from "@/store/slice/blog/thunksBlogs";

function UpdateFormBlog() {
  const initialState = useAppSelector((state) => state.blog.blogSelected);

  const { formValues, handleInputChange, handleCheckboxChange } =
    useFormUpdate(initialState);

  const Token = useAppSelector((state) => state.login.token);

  const dispatch = useAppDispatch();
  const handlerAlterFormActive = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      updateBlog({ id: initialState.id, token: Token, blogUpdate: formValues })
    );
    dispatch(updateToggle());
  };

  return (
    <div className={style.modal}>
      <form onSubmit={handlerAlterFormActive} className={style.form}>
        <label htmlFor="title">
          Nombre:
          <input
            value={formValues.title}
            onChange={handleInputChange}
            type="text"
            id="title"
            name="title"
          />
        </label>

        <label htmlFor="content">
          Contenido:
          <textarea
            value={formValues.content}
            onChange={handleInputChange}
            id="content"
            name="content"
          ></textarea>
        </label>

        <label htmlFor="author">
          Autor:
          <input
            value={formValues.author}
            onChange={handleInputChange}
            type="text"
            id="author"
            name="author"
          />
        </label>

        <label htmlFor="category">
          Categoría:
          <input
            value={formValues.category}
            onChange={handleInputChange}
            type="text"
            id="category"
            name="category"
          />
        </label>

        <label htmlFor="published">
          Publicado:
          <input
            checked={formValues.published}
            onChange={handleCheckboxChange}
            type="checkbox"
            id="published"
            name="published"
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export { UpdateFormBlog };
