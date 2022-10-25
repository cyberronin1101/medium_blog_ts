import { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import {
  apiBackendErrorsTypeData,
  apiErrorType,
} from "../services/apiService/apiServiceTypes";

type useFetchType = <T, A, Params extends A[]>(
  cb: (...args: Params) => Promise<AxiosResponse<T>>
) => [
  { response: T | null; loading: boolean; error: apiErrorType | null },
  (...args: Params) => void
];

export const useFetch: useFetchType = <T, A, Params extends A[]>(
  cb: (...args: Params) => Promise<AxiosResponse<T>>
) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<apiErrorType | null>(null);

  const doFetch = useCallback(
    (...data: Params) => {
      setResponse(null);
      setLoading(true);
      setError(null);

      cb(...data)
        .then((res: AxiosResponse<T>) => {
          setResponse(res.data);
          setLoading(false);
        })
        .catch(
          ({
            message,
            code,
            response,
          }: AxiosError<apiBackendErrorsTypeData>) => {
            setLoading(false);
            setError({
              message,
              code,
              response,
            });
          }
        );
    },
    [cb]
  );

  return [{ response, loading, error }, doFetch];
};
