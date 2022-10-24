import { useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";
import ArticleForm from "../../components/article/articleForm";
import { useFetch } from "../../hooks/useFetch";
import ApiService from "../../services/apiService/apiService";

const NewArticlePage = () => {
  const [, setTitle] = useContext(CurrentTitleContext);
  const [{ response, loading, error }, doFetch] = useFetch(
    ApiService.createArticle
  );

  useEffect(() => {
    setTitle({
      title: "New Article",
    });
  }, [setTitle]);

  const onSubmit = () => {
    // doFetch({
    //   data: {},
    // } as { data: articleTypeEdit });
  };

  const errors = {};

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        errors={errors}
        submitTitle={"Publish Article"}
      />
    </div>
  );
};

export default NewArticlePage;
