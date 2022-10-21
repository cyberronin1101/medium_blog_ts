import React, { Component, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

type propsType = {
  tag?: string;
};

const WithData = <T,>(Component: React.FC<T>) => {
  const Wrapper = (props: propsType) => {
    const [{ response, loading, error }, doFetch] = useFetch("/tags");

    useEffect(() => {
      doFetch();
    }, [doFetch]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    if (response) {
      return <Component {...(props as T)} data={response} />;
    }

    return null;
  };

  return Wrapper;
};

export default WithData;
