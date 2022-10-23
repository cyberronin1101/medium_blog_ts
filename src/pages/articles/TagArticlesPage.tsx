import ArticleToggler from "../../components/article/articleToggler";
import { useParams } from "react-router-dom";
import FeedListContainer from "../../components/article/articleListContainer";
import { Fragment, useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";

const TagArticlesPage = (): JSX.Element => {
  const { tag, page } = useParams();
  const numberPage = (page && +page) || 1;
  const url = `/tags/${tag}`;

  const [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: (
        <>
          <i className={"ion-pound"}></i> {tag}
        </>
      ),
      description: "i'm a description",
    });
  }, [setTitle, tag]);

  return (
    <Fragment>
      <ArticleToggler tagName={tag} />
      <FeedListContainer tag={tag} page={numberPage} url={url} />
    </Fragment>
  );
};

export default TagArticlesPage;
