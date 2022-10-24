import Loading from "./loading";
import ErrorMessage from "./errorMessage";
import { ReactNode } from "react";

const FetchStateContainer = <T,>(props: {
  children: ReactNode;
  fetchState: { response: T | null; loading: boolean; error: any }; // todo errr
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
