import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { CurrentTitleContext } from "../../context/titleContext";
import useFetch from "../../hooks/useFetch";
import apiService from "../../services/apiService";
import Loading from "../../components/helpers/loading";
import ErrorMessage from "../../components/helpers/errorMessage";
import { feedType } from "../../types/apiTypes";
import TagList from "../../components/tags/tagList";

const ArticlePage = () => {
  const [, setTitle] = useContext(CurrentTitleContext);
  const { slug } = useParams();
  const [{ response, loading, error }, doFetch] = useFetch<{
    article: feedType;
  }>(apiService.getArticle);

  useEffect(() => {
    doFetch(slug);
  }, [doFetch, slug]);

  useEffect(() => {
    setTitle({
      title: "",
    });
  }, [setTitle]);

  useEffect(() => {
    if (!response) return () => {};

    setTitle({
      title: response.article.title,
      meta: {
        user: {
          username: response.article.author.username,
          image: response.article.author.image,
        },
        date: response.article.createdAt,
      },
    });
  }, [response, setTitle]);

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

export default ArticlePage;
