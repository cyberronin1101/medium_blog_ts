import FeedList from "./feedList";

type propsType = {
  tag?: string | undefined;
};

const FeedListContainer = ({ tag }: propsType): JSX.Element => {
  return <FeedList tag={tag} />;
};

export default FeedListContainer;
