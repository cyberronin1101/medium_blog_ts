import { useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";
import ArticleForm from "../../components/article/articleForm";
import { useFetch } from "../../hooks/useFetch";
import ApiService from "../../services/apiService/apiService";
import { Navigate, useParams } from "react-router-dom";
import Loading from "../../components/helpers/loading";
import ErrorMessage from "../../components/helpers/errorMessage";
import { CurrentUserContext } from "../../context/currentUserContext";

const EditArticlePage = () => {
  const [currentUser] = useContext(CurrentUserContext);

  const [, setTitle] = useContext(CurrentTitleContext);
  const { slug } = useParams();
  const [{ response, loading, error }, getArticle] = useFetch(
    ApiService.getArticle
  );
  const [
    { response: editResponse, loading: editLoading, error: editError },
    editArticle,
  ] = useFetch(ApiService.editArticle);

  useEffect(() => {
    setTitle({
      title: "",
    });
  }, [setTitle]);

  useEffect(() => {
    slug && getArticle(slug);
  }, [getArticle, slug]);

  useEffect(() => {
    if (!response) return () => {};

    setTitle({
      title: "Edit " + response.article.title,
      meta: {
        user: {
          username: response.article.author.username,
          image: response.article.author.image,
        },
        date: response.article.createdAt,
      },
    });
  }, [response, setTitle]);

  if (!slug) {
    throw new Error("Slug can by empty");
  }

  if (currentUser.currentUser?.username !== response?.article.author.username) {
    return <Navigate to={"/article/" + slug} />;
  }

  if (editResponse) {
    return <Navigate to={"/article/" + editResponse.article.slug} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (error && !error.response?.data.errors) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <ArticleForm
        onSubmit={(data) => editArticle(data, slug)}
        loading={editLoading}
        errors={editError?.response?.data.errors}
        initialValue={response?.article}
        submitTitle={"Edit Article"}
      />
    </div>
  );
};

export default EditArticlePage;
