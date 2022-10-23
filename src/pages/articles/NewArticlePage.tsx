import { useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";
import ArticleForm from "../../components/article/articleForm";

const NewArticlePage = () => {
  const [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: "New Article",
    });
  }, [setTitle]);

  const onSubmit = () => {};

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
