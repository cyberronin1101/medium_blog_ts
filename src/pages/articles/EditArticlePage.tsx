import { useContext, useEffect } from "react";

import { CurrentTitleContext } from "../../context/titleContext";
import useFetch from "../../hooks/useFetch";
import apiService from "../../services/apiService";
import Loading from "../../components/helpers/loading";
import ErrorMessage from "../../components/helpers/errorMessage";
import { articleType } from "../../types/apiTypes";
import TagList from "../../components/tags/tagList";

const EditArticlePage = () => {
  const [, setTitle] = useContext(CurrentTitleContext);

  const [{ response, loading, error }] = useFetch<{
    article: articleType;
  }>(apiService.getArticle);

  useEffect(() => {
    setTitle({
      title: "New Article",
    });
  }, [setTitle]);

  useEffect(() => {
    if (!response) return () => {};
  }, [response]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (response) {
    return (
      <div className={"article-content"}>
        <div>
          <p>{response.article.body}</p>
        </div>
        <TagList tagList={response.article.tagList} asLink={true} />
      </div>
    );
  }

  return null;
};

export default EditArticlePage;
