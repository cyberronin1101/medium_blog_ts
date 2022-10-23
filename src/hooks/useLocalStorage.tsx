import { Dispatch, useState } from "react";

let useLocalStorage = (
  key: string,
  initialValue = ""
): [string, Dispatch<string>] => {
  let [storeValue, setStoreValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  let set = (string: string): void => {
    setStoreValue(string);
    localStorage.setItem(key, string);
  };

  return [storeValue, set];
};

export default useLocalStorage;
