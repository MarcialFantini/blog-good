import { productSelected } from "@/store/slice/products/products";

export const sendOrder = (
  token: string,
  id_product: number,
  amount: number
) => {
  const data = {
    id_product,
    token: token,
    amount,
  };
  const dataJson = JSON.stringify(data);

  return fetch("http://localhost:5000/api/v1/orders/products/", {
    cache: "no-cache",
    method: "POST",
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const sendOrders = async (list: productSelected[], tokenId: string) => {
  const listOfPromiseOrders = list.map((item) => {
    return sendOrder(tokenId, item.id, item.cant);
  });

  try {
    const response = await Promise.all(listOfPromiseOrders);

    const areOkResponse = response.find((item) => !item.ok);

    if (!areOkResponse) {
      throw new Error("error to send order");
    }
  } catch (error) {}
};
