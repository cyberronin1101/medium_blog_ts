import { useEffect, useMemo } from "react";
import FetchStateContainer from "../helpers/fetchStateContainer";
import ArticleList from "./articleList";
import Pagination from "../routing/pagination";
import ApiService from "../../services/apiService/apiService";
import { useFetch } from "../../hooks/useFetch";

const PopularTagContainer = (props: {
  tag?: string;
  page?: number;
  url?: string;
  feed?: boolean;
}): JSX.Element => {
  const { tag, page, url = "" } = props;

  const urlOptions = useMemo(
    () => ({
      ...ApiService.helperLimitOffset(page),
      ...(tag && { tag }),
    }),
    [tag, page]
  );

  const params = ApiService.helperObjToParams(urlOptions);

  const self = props.feed ? ApiService.getFeedArticles : ApiService.getArticles;
  const [fetchState, doFetch] = useFetch(self);

  useEffect(() => {
    doFetch(params);
  }, [doFetch, params]);

  const total = fetchState.response?.articlesCount || 0;
  const current = (page && +page) || 1;
  const data = fetchState.response?.articles;

  return (
    <FetchStateContainer fetchState={fetchState}>
      <ArticleList data={data} />
      <Pagination total={total} current={current} url={url} />
    </FetchStateContainer>
  );
};

export default PopularTagContainer;
