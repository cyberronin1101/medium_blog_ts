import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import Loading from "../helpers/loading";
import ErrorMessages from "../helpers/errorMessages";
import { Link } from "react-router-dom";

const PopularTags = () => {
  let [{ response, isLoading, error }, doFetch] = useFetch("/tags");

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !response) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessages />;
  }

  return (
    <div className={"sidebar"}>
      <p>Popular Tags</p>
      <div className={"tag-list"}>
        {response.tags.map((tag) => (
          <Link
            key={tag}
            to={"/tags/" + tag}
            className={"tag-default tag-pill"}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
