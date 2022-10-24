import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { CurrentTitleContext } from "../../context/titleContext";

import Loading from "../../components/helpers/loading";
import ErrorMessage from "../../components/helpers/errorMessage";
import TagList from "../../components/tags/tagList";
import { useFetch } from "../../hooks/useFetch";
import apiService from "../../services/apiService/apiService";

const ArticlePage = () => {
  const [, setTitle] = useContext(CurrentTitleContext);
  const { slug } = useParams();
  const [{ response, loading, error }, doFetch] = useFetch(
    apiService.getArticle
  );

  useEffect(() => {
    slug && doFetch(slug);
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
