import PopularTags from "./popularTags";
import useFetch from "../../hooks/useFetch";
import ApiService from "../../services/apiService";
import { useEffect } from "react";
import FetchStateContainer from "../helpers/fetchStateContainer";

const PopularTagContainer = (): JSX.Element => {
  let [fetchState, doFetch] = useFetch<any>(ApiService.getTag);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <FetchStateContainer fetchState={fetchState}>
      <PopularTags data={fetchState.response} />
    </FetchStateContainer>
  );
};

export default PopularTagContainer;
