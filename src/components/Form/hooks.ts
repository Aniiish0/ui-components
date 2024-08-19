import { useState } from "react";
import { handleInputChange } from "./helper";

export const useForm = <T extends object>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    handleInputChange(e, setFormState);
  };

  return {
    formState,
    handleChange,
  };
};
