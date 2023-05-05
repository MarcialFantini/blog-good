import { fetchStandardCreator } from "@/hooks/fetchStandardCreator";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Values {
  email: string;
  password: string;
  phone: string;
  name: string;
}
interface ResponseNormal {
  message: string;
  code: number;
}

export const RegisterCreateUser = createAsyncThunk(
  "register-created-user",
  async (values: Values, { rejectWithValue }) => {
    try {
      const data = await fetchStandardCreator<Values, ResponseNormal>(
        "http://localhost:5000/api/v1/user/create",
        "POST",
        values,
        ""
      );
      if (data.code !== 201) {
        throw new Error("error to created");
      }

      return data;
    } catch (error) {
      return rejectWithValue({ message: "Error to created" });
    }
  }
);
