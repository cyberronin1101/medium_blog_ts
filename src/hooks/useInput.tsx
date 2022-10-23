import { useState } from "react";
import { ChangeEvent } from "react";

const useInput = (val = "") => {
  const [value, setValue] = useState(val);

  const onChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return {
    bind: { value, onChange },
    value,
    onChange,
    set: setValue,
  };
};

export default useInput;
