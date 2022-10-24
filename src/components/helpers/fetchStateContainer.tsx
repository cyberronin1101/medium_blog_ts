import Loading from "./loading";
import ErrorMessage from "./errorMessage";
import { ReactNode } from "react";
import { apiErrorType } from "../../services/apiService/apiServiceTypes";

const FetchStateContainer = <T,>(props: {
  children: ReactNode | null;
  fetchState: {
    response: T | null;
    loading: boolean;
    error: apiErrorType | null;
  };
}) => {
  const { response, loading, error } = props.fetchState;

  if (loading || (!error && !response)) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (response) {
    return <div>{props.children}</div>;
  }

  return null;
};

export default FetchStateContainer;
