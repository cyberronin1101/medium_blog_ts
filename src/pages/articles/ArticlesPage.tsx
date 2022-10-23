import { Fragment, useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { CurrentTitleContext } from "../../context/titleContext";
import ArticleToggler from "../../components/article/articleToggler";
import FeedListContainer from "../../components/article/articleListContainer";

const ArticlesPage = () => {
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
      <FeedListContainer url={"/articles"} page={numberPage} />
    </Fragment>
  );
};

export default ArticlesPage;
