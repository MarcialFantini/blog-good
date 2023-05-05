"use client";
import style from "./style.module.css";
import { customFormCreate } from "./customFormCreated";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { restore } from "@/store/slice/blog/blog";

interface Props {
  Blog?: Blog;
}

export interface Blog {
  title: string;
  content: string;
  author: string;
  published: boolean;
  category: string;
}

const initialBlog: Blog = {
  title: "",
  content: "",
  author: "",
  published: false,
  category: "",
};

export default function FormBlog({ Blog }: Props) {
  const { values, handlerOnChange, btnPublished, setValues, handleSubmit } =
    customFormCreate(initialBlog);

  const { isFetching, isFetchingOk, endFetch } = useAppSelector(
    (state) => state.blog
  );

  const dispatch = useAppDispatch();
  const restoreHandler = () => dispatch(restore());

  useEffect(() => {
    if (endFetch) {
      setTimeout(() => {
        setValues(initialBlog);
        restoreHandler();
        console.log(endFetch, isFetchingOk);
      }, 2000);
    }
  }, [endFetch]);

  return (
    <>
      <div className={style.states}>
        <div
          className={`${style["state"]} ${style["fetching"]} ${
            isFetching ? style["fetchingActive"] : ""
          }`}
        >
          Fetching
        </div>
        <div
          className={`${style["state"]} ${style["ok"]} ${
            isFetchingOk && endFetch ? style["okActive"] : ""
          }`}
        >
          Is Ok
        </div>
        <div
          className={`${style["state"]} ${style["noOk"]} ${
            !isFetchingOk && endFetch ? style["noActive"] : ""
          }`}
        >
          Isn't Ok
        </div>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <h3 className={style.textLabel}>
            {!isFetching ? "Title" : "Pending"}
          </h3>
          <input
            className={style.input}
            required
            onChange={handlerOnChange}
            value={values.title}
            type="text"
            name="title"
          />
        </label>
        <label>
          <h3 className={style.textLabel}>Content</h3>
          <textarea
            maxLength={240}
            className={style.input + " " + style.textArea}
            required
            onChange={handlerOnChange}
            value={values.content}
            name="content"
          />
        </label>
        <label>
          <h3 className={style.textLabel}>Author</h3>
          <input
            className={style.input}
            required
            onChange={handlerOnChange}
            value={values.author}
            type="text"
            name="author"
          />
        </label>
        <label className={style.checkBox}>
          <h3 className={style.textLabel}>Published</h3>
          <button
            className={style.btn}
            type="button"
            style={{ background: values.published ? "green" : "red" }}
            onClick={btnPublished}
          >
            {values.published ? "Published" : "No published"}
          </button>
        </label>
        <label>
          <h3 className={style.textLabel}>Category</h3>
          <input
            className={style.input}
            required
            onChange={handlerOnChange}
            value={values.category}
            type="text"
            name="category"
          />
        </label>
        <label>
          <button className={style.btn} type="submit">
            Submit
          </button>
        </label>
      </form>
    </>
  );
}
