export const saveProductImages = async (
  productId: string,
  files: File[]
): Promise<void> => {
  const formData = new FormData();

  files.forEach((file, index) => {
    formData.append("images", file);
  });

  formData.append("product_id", productId);

  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/products/images/save",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      console.log("Imágenes guardadas exitosamente");
    } else {
      console.error("Error al guardar las imágenes");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};
