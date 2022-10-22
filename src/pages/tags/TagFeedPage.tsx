import TopBanner from "../../components/header/TopBanner";
import FeedToggler from "../../components/feed/feedToggler";
import PopularTagsContainer from "../../components/tags/popularTagsContainer";
import { useParams } from "react-router-dom";
import ApiService, { getLimitOffset } from "../../services/apiService";
import useFetch from "../../hooks/useFetch";
import { useEffect, useMemo } from "react";

import FeedList from "../../components/feed/feedList";
import FetchStateContainer from "../../components/helpers/fetchStateContainer";

const TagFeedPage = (): JSX.Element => {
  let { tag, page } = useParams();

  let urlOptions = useMemo(() => {
    return {
      ...getLimitOffset(page),
      tag,
    };
  }, [tag, page]);

  let [fetchState, doFetch] = useFetch<any>(ApiService.getFeed, urlOptions);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className={"home-page"}>
      <TopBanner
        title={
          <>
            <i className={"ion-pound"}></i> {tag}
          </>
        }
      />

      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-9"} style={{ minWidth: 0 }}>
            <FeedToggler tagName={tag} />

            <FetchStateContainer fetchState={fetchState}>
              <FeedList data={fetchState.response} />
            </FetchStateContainer>
          </div>

          <div className={"col-md-3"}>
            <PopularTagsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagFeedPage;
