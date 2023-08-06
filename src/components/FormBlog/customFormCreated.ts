import { dispatcherHook } from "@/hooks/dispatcherHook";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createBlogThunk } from "@/store/slice/blog/thunksBlogs";
import { ChangeEvent, useState } from "react";

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
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files);
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleUpload = async (idBlog: number) => {
    const formData = new FormData();
    selectedImages.forEach((image, index) => {
      formData.append("images", image);
    });
    formData.append("blog_id", String(idBlog));

    // Usa el objeto formData para lo que necesites, como enviarlo al servidor
    try {
      const response = await fetch("http://localhost:5000/api/v1/images/save", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        console.log("Error to request");
      }
    } catch (error) {
      console.error("Error al subir las imágenes", error);
    }
  };

  return {
    handleImageChange,
    handleUpload,
    values,
    setValues,
    handlerOnChange,
    btnPublished,
    handleSubmit,
  };
};
