import FeedList from "./feedList";
import ApiService from "../../services/apiService";

type propsType = {
  tag?: string | undefined;
};

const FeedListContainer = (props: propsType): JSX.Element => {
  return <FeedList getData={ApiService.getTag} />;
};

export default FeedListContainer;
