import { useCallback, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { errorType } from "../components/helpers/errorMessage";

type resultType<T> = [
  { response: T; loading: boolean; error: fetchErrorType },
  Function
];

type fetchErrorType = errorType | null;

const useFetch = <T>(
  doFetchCB: () => Promise<AxiosResponse>
): resultType<T | null> => {
  let [response, setResponse] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState<fetchErrorType>(null);

  let doFetch = useCallback(() => {
    setResponse(null);
    setLoading(true);
    setError(null);

    doFetchCB()
      .then((res: AxiosResponse) => {
        setLoading(false);
        setResponse(res.data);
      })
      .catch(({ message, code }: AxiosError) => {
        setLoading(false);
        setError({
          message,
          code,
        });
      });
  }, [doFetchCB]);

  return [{ response, loading, error }, doFetch];
};

export default useFetch;
