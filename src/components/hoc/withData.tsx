import React, { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import Loading from "../helpers/loading";
import ErrorMessage, {
  errorType as errorTypeCommon,
} from "../helpers/errorMessage";

type errorType = errorTypeCommon | null;

const WithData = <T,>(Component: React.FC<{ data: T }>) => {
  const Wrapper = (props: { getData: () => Promise<AxiosResponse<T>> }) => {
    let { getData } = props;

    let [response, setResponse] = useState<AxiosResponse<T> | null>(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState<errorType>(null);

    useEffect(() => {
      setResponse(null);
      setLoading(true);
      setError(null);

      getData()
        .then((response: AxiosResponse<T>) => {
          setResponse(response);
          setLoading(false);
        })
        .catch((error: AxiosError) => {
          setError(error as errorType);
          setLoading(false);
        });
    }, [getData]);

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <ErrorMessage error={error} />;
    }

    if (response) {
      return <Component data={response.data} />;
    }

    return null;
  };

  return Wrapper;
};

export default WithData;
