import { useState } from "react";

let useLocalStorage = (key: string, initialValue = ""): [string, Function] => {
  let [storeValue, setStoreValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  let set = (value: string): void => {
    setStoreValue(value);
    localStorage.setItem(key, value);
  };

  return [storeValue, set];
};

export default useLocalStorage;
