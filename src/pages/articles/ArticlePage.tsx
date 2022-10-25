import { ReactEventHandler, useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CurrentTitleContext } from "../../context/titleContext";

import Loading from "../../components/helpers/loading";
import ErrorMessage from "../../components/helpers/errorMessage";
import TagList from "../../components/tags/tagList";
import { useFetch } from "../../hooks/useFetch";
import apiService from "../../services/apiService/apiService";
import { CurrentUserContext } from "../../context/currentUserContext";

const TitleExt = ({
  slug = "",
  onDelete,
  isLoading,
}: {
  slug?: string;
  onDelete: ReactEventHandler;
  isLoading: boolean;
}) => {
  return (
    <>
      <span>
        <Link
          to={"/article/" + slug + "/edit"}
          className={"btn btn-outline-secondary btn-sm"}
        >
          <i className={"ion-edit"}></i> Edit article
        </Link>{" "}
        <button
          className={"btn btn-outline-danger btn-sm"}
          onClick={onDelete}
          disabled={isLoading}
        >
          <i className={"ion-trash-a"}></i> Delete article
        </button>
      </span>
    </>
  );
};

const ArticlePage = () => {
  const [currentUser] = useContext(CurrentUserContext);
  const [, setTitle] = useContext(CurrentTitleContext);
  const { slug } = useParams();
  const [{ response, loading, error }, doFetch] = useFetch(
    apiService.getArticle
  );

  const [{ response: deleteResponse, loading: deleteLoading }, deleteArticle] =
    useFetch(apiService.deleteArticle);

  let currentUserName = currentUser.currentUser?.username;
  let responseUserName = response?.article.author.username;

  const isAuthor =
    currentUserName && responseUserName && currentUserName === responseUserName;

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

    const { article } = response;
    setTitle({
      title: article.title,
      meta: {
        user: {
          username: article.author.username,
          image: article.author.image,
        },
        date: article.createdAt,
        ext: isAuthor ? (
          <TitleExt
            slug={slug}
            onDelete={() => deleteArticle(slug as string)}
            isLoading={deleteLoading}
          />
        ) : undefined,
      },
    });
  }, [response, setTitle, isAuthor, slug, deleteArticle, deleteLoading]);

  if (deleteResponse === "") {
    return <Navigate to={"/articles"} />;
  }

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
