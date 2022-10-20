import { useCallback, useState } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const BASE_URL = "https://conduit.productionready.io/api";

export let useFetch = (url = "") => {
  let [response, setResponse] = useState();
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(false);

  let [token] = useLocalStorage("token");

  let doFetch = useCallback(
    (options = {}) => {
      setResponse(null);
      setIsLoading(true);
      setError(false);

      let requestOptions = {
        ...options,
        ...{
          headers: {
            authorization: token ? `Token ${token}` : "",
          },
        },
      };

      axios(BASE_URL + url, requestOptions)
        .then((res) => {
          setIsLoading(false);
          setResponse(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.response.data);
        });
    },
    [token, url]
  );

  return [
    {
      response,
      isLoading,
      error,
    },
    doFetch,
  ];
};

export default useFetch;
