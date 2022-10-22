import { useFetchStateType } from "../../hooks/useFetch";
import { ReactNode } from "react";
import Loading from "./loading";
import ErrorMessage from "./errorMessage";

type testType<T> = {
  fetchState: useFetchStateType<T>;
  children: ReactNode;
};

const FetchStateContainer = <T,>(props: testType<T>) => {
  let { response, loading, error } = props.fetchState;

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
