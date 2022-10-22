import ApiService from "../../services/apiService";
import PopularTags from "./popularTags";

const FeedListContainer = (): JSX.Element => {
  return <PopularTags getData={ApiService.getTag} />;
};

export default FeedListContainer;
