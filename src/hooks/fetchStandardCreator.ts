export const fetchStandardCreator = async <T extends {}, R extends {}>(
  url: string,
  method: string,
  values: T,
  token: string
): Promise<R> => {
  // Convertir los datos del objeto a formato JSON
  const body = JSON.stringify(values);

  // Realizar la solicitud HTTP utilizando la función fetch
  const response = await fetch(url, {
    method: method,
    body: body,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    cache: "no-cache",
  });

  // Verificar si la respuesta es exitosa
  if (!response.ok) {
    throw new Error(
      `Error al realizar la solicitud: ${response.status} ${response.statusText}`
    );
  }

  // Parsear la respuesta como JSON y retornarla
  const data = await response.json();
  return data as R; // Utilizar "as" para hacer una conversión de tipo segura
};
