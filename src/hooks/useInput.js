import { useState } from "react";

const useInput = (val = "") => {
  let [value, setValue] = useState(val);

  let onChange = (e) => {
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
