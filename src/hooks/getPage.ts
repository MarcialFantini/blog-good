export const getPage = async <T extends {}>(url: string) => {
  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error();
    }

    const parse = await response.json();
    const data = parse as T;

    return data;
  } catch (error) {
    console.log("error");
  }
};
