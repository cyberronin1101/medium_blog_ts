import FeedToggler from "../components/feed/feedToggler";
import FeedListContainer from "../components/feed/feedListContainer";
import { Fragment, useContext, useEffect } from "react";
import { CurrentTitleContext } from "../context/titleContext";

const GlobalFeedPage = () => {
  let [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: "Medium clone",
      description: "A place to share knowledge",
    });
  }, [setTitle]);

  return (
    <Fragment>
      <FeedToggler />
      <FeedListContainer url={"/articles"} />
    </Fragment>
  );
};

export default GlobalFeedPage;
