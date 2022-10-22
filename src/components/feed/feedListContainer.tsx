import useFetch from "../../hooks/useFetch";
import ApiService, { getLimitOffset } from "../../services/apiService";
import { useEffect, useMemo } from "react";
import FetchStateContainer from "../helpers/fetchStateContainer";
import FeedList from "./feedList";

const PopularTagContainer = (props: {
  tag?: string;
  page?: string;
}): JSX.Element => {
  const { tag, page } = props;

  let urlOptions = useMemo(
    () => ({
      ...getLimitOffset(page),
      ...(tag && { tag }),
    }),
    [tag, page]
  );

  let [fetchState, doFetch] = useFetch<any>(ApiService.getFeed, urlOptions);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <FetchStateContainer fetchState={fetchState}>
      <FeedList data={fetchState.response} />
    </FetchStateContainer>
  );
};

export default PopularTagContainer;
