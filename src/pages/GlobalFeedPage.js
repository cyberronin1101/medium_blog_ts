import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Feed from "../components/feed/feed";
import Pagination from "../components/routing/pagination";
import Loading from "../components/helpers/loading";
import ErrorMessages from "../components/helpers/errorMessage";
import FeedToggler from "../components/feed/feedToggler";
import PopularTagsContainer from "../components/tags/popularTagsContainer";

const GlobalFeedPage = () => {
  // todo use
  let [searchParams] = useSearchParams();
  let page = searchParams.get("page");

  let offset = 0;
  let limit = 10;
  if (page) {
    offset = page * limit - limit;
  }

  let [{ response, error, isLoading }, doFetch] = useFetch(
    "/articles?limit=" + limit + "&offset=" + offset
  );

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className={"home-page"}>
      <div className={"banner"}>
        <div className={"container"}>
          <h1>Medium clone</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-9"} style={{ minWidth: 0 }}>
            <FeedToggler />

            {isLoading && <Loading />}
            {error && <ErrorMessages />}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination
                  {...{
                    total: response.articlesCount,
                    limit,
                    url: "/",
                    current: page,
                  }}
                />
              </>
            )}
          </div>
          <div className={"col-md-3"}>
            <PopularTagsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeedPage;
