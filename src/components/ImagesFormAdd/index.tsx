"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { useAppDispatch } from "@/store/hooks";
import { addImgToggle } from "@/store/slice/blog/blog";

export function ImagesFormAdd({ id }: { id: number }) {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);

  const dispatch = useAppDispatch();

  const handlerToggleForm = () => dispatch(addImgToggle(0));

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log(files);
    if (files) {
      setSelectedImages(files);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedImages) {
      const formData = new FormData();
      Array.from(selectedImages).forEach((file) => {
        formData.append("images", file);
      });
      formData.append("blog_id", `${id}`);
      fetch("http://localhost:5000/api/v1/images/save", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // Aquí puedes manejar la respuesta del servidor
          console.log(response);
          handlerToggleForm();
        })
        .catch((error) => {
          // Aquí puedes manejar los errores de la solicitud
          console.error(error);
        });
    }
  };

  return (
    <div className={style.modal}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image-upload">Selecciona una imagen:</label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            multiple
          />
        </div>
        <div>
          {selectedImages &&
            Array.from(selectedImages).map((file) => (
              <img
                key={file.name}
                src={URL.createObjectURL(file)}
                alt={file.name}
              />
            ))}
        </div>
        <button type="submit">Subir imagen</button>
      </form>
    </div>
  );
}
