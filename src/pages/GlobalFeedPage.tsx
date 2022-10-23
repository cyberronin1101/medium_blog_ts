import ArticleToggler from "../components/article/articleToggler";
import FeedListContainer from "../components/article/articleListContainer";
import { Fragment, useContext, useEffect } from "react";
import { CurrentTitleContext } from "../context/titleContext";
import { useParams } from "react-router-dom";

const GlobalFeedPage = () => {
  const [, setTitle] = useContext(CurrentTitleContext);

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
      <ArticleToggler />
      <FeedListContainer url={""} page={numberPage} />
    </Fragment>
  );
};

export default GlobalFeedPage;
