import { useState } from "react";
import { ChangeEvent } from "react";

const useInput = (val = "") => {
  let [value, setValue] = useState(val);

  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
