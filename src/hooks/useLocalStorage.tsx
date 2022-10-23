import { Dispatch, useState } from "react";

const useLocalStorage = (
  key: string,
  initialValue = ""
): [string, Dispatch<string>] => {
  const [storeValue, setStoreValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  const set = (string: string): void => {
    setStoreValue(string);
    localStorage.setItem(key, string);
  };

  return [storeValue, set];
};

export default useLocalStorage;
