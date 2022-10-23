import ArticleToggler from "../../components/article/articleToggler";
import { Navigate, useParams } from "react-router-dom";
import FeedListContainer from "../../components/article/articleListContainer";
import { Fragment, useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";
import useLocalStorage from "../../hooks/useLocalStorage";

const FeedArticlesPage = (): JSX.Element => {
  const { page } = useParams();
  const numberPage = (page && +page) || 1;

  const [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: "Your feeds",
      description: "i'm a description",
    });
  }, [setTitle]);

  const [token] = useLocalStorage("token");

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <Fragment>
      <ArticleToggler />
      <FeedListContainer page={numberPage} url={"/feed"} feed={true} />
    </Fragment>
  );
};

export default FeedArticlesPage;
