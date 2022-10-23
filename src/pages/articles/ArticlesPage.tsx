import { Fragment, useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { CurrentTitleContext } from "../../context/titleContext";
import FeedToggler from "../../components/feed/feedToggler";
import FeedListContainer from "../../components/feed/feedListContainer";

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
      <FeedToggler />
      <FeedListContainer url={"/articles"} page={numberPage} />
    </Fragment>
  );
};

export default ArticlesPage;
