import useFetch from "../../hooks/useFetch";
import ApiService from "../../services/apiService";
import { useEffect, useMemo } from "react";
import FetchStateContainer from "../helpers/fetchStateContainer";
import FeedList from "./feedList";
import Pagination from "../routing/pagination";
import { respFeedType } from "../../types/apiTypes";

const PopularTagContainer = (props: {
  tag?: string;
  page?: number;
  url?: string;
  your?: boolean;
}): JSX.Element => {
  const { tag, page, url = "" } = props;

  let urlOptions = useMemo(
    () => ({
      ...ApiService.helperLimitOffset(page),
      ...(tag && { tag }),
    }),
    [tag, page]
  );

  let self = props.your ? ApiService.getFeed : ApiService.getArticles;
  let [fetchState, doFetch] = useFetch<respFeedType>(self, urlOptions);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  const total = fetchState.response?.articlesCount || 0;
  const current = (page && +page) || 1;

  // todo bad?
  return (
    <FetchStateContainer fetchState={fetchState}>
      {fetchState.response && <FeedList data={fetchState.response} />}
      <Pagination total={total} current={current} url={url} />
    </FetchStateContainer>
  );
};

export default PopularTagContainer;
