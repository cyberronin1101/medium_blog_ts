import { useCallback, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import axios from "axios";

const BASE_URL = "https://conduit.productionready.io/api";

type fetchOptionsType = {};

type resultType = [{ response: any; loading: boolean; error: any }, Function];

const useFetch = (url: string): resultType => {
  let [response, setResponse] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  let [token] = useLocalStorage("token");

  let doFetch = useCallback(
    (options: fetchOptionsType = {}) => {
      setResponse(null);
      setLoading(true);
      setError(false);

      options = applyTokenToOptions(token, options);

      axios(BASE_URL + url, options)
        .then((res) => {
          setLoading(false);
          setResponse(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    },
    [token, url]
  );

  return [{ response, loading, error }, doFetch];
};

export default useFetch;

let applyTokenToOptions = (token: string, options: object): object => {
  if (!token) {
    return options;
  }

  return {
    ...options,
    ...{
      headers: {
        authorization: `Token ${token}`,
      },
    },
  };
};
