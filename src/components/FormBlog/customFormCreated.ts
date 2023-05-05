import { dispatcherHook } from "@/hooks/dispatcherHook";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createBlogThunk } from "@/store/slice/blog/thunksBlogs";
import { useState } from "react";

interface Blog {
  title: string;
  content: string;
  author: string;
  published: boolean;
  category: string;
}

export const customFormCreate = (initialBlog: Blog) => {
  const [values, setValues] = useState<Blog>(initialBlog);

  const token = useAppSelector((state) => state.login.token);

  const dispatcher = dispatcherHook(createBlogThunk({ blog: values, token }));

  const handlerOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const btnPublished = () => {
    setValues((prevValues) => ({
      ...prevValues,
      published: !prevValues.published,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatcher();
    // Lógica para manejar el submit del formulario
  };

  return {
    values,
    setValues,
    handlerOnChange,
    btnPublished,
    handleSubmit,
  };
};
