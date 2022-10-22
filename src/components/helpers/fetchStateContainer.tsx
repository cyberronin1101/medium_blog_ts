import { useFetchStateType } from "../../hooks/useFetch";
import { ReactNode } from "react";
import Loading from "./loading";
import ErrorMessage from "./errorMessage";

type testType = {
  fetchState: useFetchStateType<any>;
  children: ReactNode;
};

const FetchStateContainer = (props: testType) => {
  let { response, loading, error } = props.fetchState;

  if (loading || (!error && !response)) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return <div>{props.children}</div>;
};

export default FetchStateContainer;
