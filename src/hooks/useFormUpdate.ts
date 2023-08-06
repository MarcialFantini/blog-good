import { useState } from "react";

export const useFormUpdate = <T extends {}>(initialState: T) => {
  const [formValues, setFormValues] = useState<T>(initialState);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  return { formValues, handleInputChange, handleCheckboxChange, setFormValues };
};
