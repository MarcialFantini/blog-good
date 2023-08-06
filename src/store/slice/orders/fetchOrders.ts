export async function fetchData<Request, Response>(
  url: string,
  method: string,
  body?: Request
): Promise<Response> {
  const response = await fetch(url, {
    method: method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ha ocurrido un error en la solicitud.");
  }

  const responseData: Response = await response.json();
  return responseData;
}
