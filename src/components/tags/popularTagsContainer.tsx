import PopularTags from "./popularTags";

import { useEffect } from "react";
import FetchStateContainer from "../helpers/fetchStateContainer";
import { useFetch } from "../../hooks/useFetch";
import ApiService from "../../services/apiService/apiService";

const PopularTagContainer = (): JSX.Element => {
  const [fetchState, doFetch] = useFetch(ApiService.getTag);

  const tags = fetchState.response?.tags;

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <FetchStateContainer fetchState={fetchState}>
      <PopularTags tags={tags} />
    </FetchStateContainer>
  );
};

export default PopularTagContainer;
