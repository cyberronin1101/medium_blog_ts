import { useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";
import ArticleForm from "../../components/article/articleForm";
import { useFetch } from "../../hooks/useFetch";
import ApiService from "../../services/apiService/apiService";
import { Navigate } from "react-router-dom";

const NewArticlePage = () => {
  const [, setTitle] = useContext(CurrentTitleContext);
  const [{ response, loading, error }, createArticle] = useFetch(
    ApiService.createArticle
  );

  useEffect(() => {
    setTitle({
      title: "New Article",
    });
  }, [setTitle]);

  if (response) {
    return <Navigate to={"/article/" + response.article.slug} />;
  }

  return (
    <div>
      <ArticleForm
        onSubmit={createArticle}
        loading={loading}
        errors={error?.response?.data.errors}
        submitTitle={"Publish Article"}
      />
    </div>
  );
};

export default NewArticlePage;
