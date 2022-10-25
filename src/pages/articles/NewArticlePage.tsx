import { useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";
import ArticleForm from "../../components/article/articleForm";
import { useFetch } from "../../hooks/useFetch";
import ApiService from "../../services/apiService/apiService";
import { apiEditArticleType } from "../../services/apiService/apiServiceTypes";

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

  const onSubmit = (article: apiEditArticleType) => {
    createArticle(article);
  };

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        errors={error?.response?.data.errors}
        submitTitle={"Publish Article"}
      />
    </div>
  );
};

export default NewArticlePage;
