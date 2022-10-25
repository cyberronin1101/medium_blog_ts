import { useState } from "react";
import { ChangeEvent } from "react";

const useInput = (val = "") => {
  if (!val) {
    val = "";
  }
  const [value, setValue] = useState(val);

  const onChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    let value = e.target.value;
    if (!value) {
      value = "";
    }
    setValue(value);
  };

  return {
    bind: { value, onChange },
    value,
    onChange,
    set: setValue,
  };
};

export default useInput;
