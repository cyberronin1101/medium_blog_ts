import FeedToggler from "../components/feed/feedToggler";
import FeedListContainer from "../components/feed/feedListContainer";
import { Fragment, useContext, useEffect } from "react";
import { CurrentTitleContext } from "../context/titleContext";
import { useParams } from "react-router-dom";

const GlobalFeedPage = () => {
  let [, setTitle] = useContext(CurrentTitleContext);

  const { page } = useParams();
  const numberPage = (page && +page) || 1;

  useEffect(() => {
    setTitle({
      title: "Medium clone",
      description: "A place to share knowledge",
    });
  }, [setTitle]);

  return (
    <Fragment>
      <FeedToggler />
      <FeedListContainer url={"/articles"} page={numberPage} />
    </Fragment>
  );
};

export default GlobalFeedPage;
