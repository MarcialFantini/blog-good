import { useAppDispatch } from "@/store/hooks";
import { useState } from "react";

interface formReturn<T> {
  values: T;
  sendContactData: () => Promise<responseContact | undefined>;

  handlerOnChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  resetValues: (values: any) => void;
}

interface responseContact {
  message: string;
  status: number;
}

export const useFormHook = <T extends {}>(initialState: T): formReturn<T> => {
  const [values, setValues] = useState(initialState);
  const [sending, setSending] = useState(false);
  const [isError, setIsError] = useState(false);

  const handlerOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => setValues({ ...values, [event.target.name]: event.target.value });

  const sendContactData = async () => {
    try {
      setSending(true);
      const body = JSON.stringify(values);
      const res = await fetch("http://localhost:5000/api/v1/contact/", {
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: body,
      });

      if (!res.ok) {
        throw new Error();
      }

      setSending(false);

      const data = await res.json();

      if (!data) {
        throw new Error();
      }

      return data as responseContact;
    } catch (error) {
      setIsError(true);
    }
  };

  const resetValues = (values: any) => setValues(values);

  return { values, handlerOnChange, sendContactData, resetValues };
};
