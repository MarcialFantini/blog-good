interface responseLogin {
  token: string;
  status: number;
  isAdmin: boolean;
}
export const loginUser = async (password: string, email: string) => {
  try {
    const formData = new FormData();

    formData.append("password", password);
    formData.append("email", email);

    const res = await fetch("http://localhost:5000/api/v1/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
      method: "POST",
      cache: "no-cache",
    });

    const data = (await res.json()) as responseLogin;
    console.log(data);
    console.log(data);

    if (data.status !== 200) {
      return { isLogin: false, token: "", isAdmin: data.isAdmin };
    }

    if (!data.token) {
      return { isLogin: false, token: "", isAdmin: data.isAdmin };
    }

    return { isLogin: true, token: data.token, isAdmin: data.isAdmin };
  } catch (error) {
    return { isLogin: false, token: "" };
  }
};
