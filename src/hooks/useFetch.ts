// import { useCallback, useState } from "react";
// import { AxiosError, AxiosResponse } from "axios";
// import { errorType } from "../components/helpers/errorMessage";
// import { apiServiceOptionsType } from "../services/apiService";
//
// export type useFetchStateType<T> = {
//   response: T;
//   loading: boolean;
//   error: fetchErrorType;
// };
//
// type resultType<T> = [useFetchStateType<T>, Function];
//
// type fetchErrorType = errorType | null;
//
// const useFetch = <T>(
//   doFetchCB: Function,
//   options?: apiServiceOptionsType
// ): resultType<T | null> => {
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<fetchErrorType>(null);
//
//   const doFetch = useCallback(
//     (data = {}) => {
//       setResponse(null);
//       setLoading(true);
//       setError(null);
//
//       doFetchCB(options, data)
//         .then((res: AxiosResponse) => {
//           setLoading(false);
//           setResponse(res.data);
//         })
//         .catch(({ message, code, response }: AxiosError) => {
//           setLoading(false);
//           setError({
//             message,
//             code,
//             response,
//           });
//         });
//     },
//     [doFetchCB, options]
//   );
//
//   return [{ response, loading, error }, doFetch];
// };
//
// export default useFetch;

import { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

type useFetchType = <T, A, Params extends A[]>(
  cb: (...args: Params) => Promise<AxiosResponse<T>>
) => [
  { response: T | null; loading: boolean; error: any },
  (...args: Params) => void
];

export const useFetch: useFetchType = <T, A, Params extends A[]>(
  cb: (...args: Params) => Promise<AxiosResponse<T>>
) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //     .catch(({ message, code, response }: AxiosError) => {
  //       setLoading(false);
  //       setError({
  //         message,
  //         code,
  //         response,
  //       });
  //     });

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
        .catch(({ message, code, response }: AxiosError) => {
          setLoading(false);
        });
    },
    [cb]
  );

  return [{ response, loading, error }, doFetch];
};
