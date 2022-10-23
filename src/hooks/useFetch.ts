import { useCallback, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { errorType } from "../components/helpers/errorMessage";
import { apiServiceOptionsType } from "../services/apiService";

export type useFetchStateType<T> = {
  response: T;
  loading: boolean;
  error: fetchErrorType;
};

type resultType<T> = [useFetchStateType<T>, Function];

type fetchErrorType = errorType | null;

const useFetch = <T>(
  doFetchCB: Function,
  options?: apiServiceOptionsType
): resultType<T | null> => {
  let [response, setResponse] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState<fetchErrorType>(null);

  let doFetch = useCallback(
    (data = {}) => {
      setResponse(null);
      setLoading(true);
      setError(null);

      doFetchCB(options, data)
        .then((res: AxiosResponse) => {
          setLoading(false);
          setResponse(res.data);
        })
        .catch(({ message, code, response }: AxiosError) => {
          setLoading(false);
          setError({
            message,
            code,
            response,
          });
        });
    },
    [doFetchCB, options]
  );

  return [{ response, loading, error }, doFetch];
};

export default useFetch;
