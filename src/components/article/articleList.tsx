import React from "react";

import ArticleListItem from "./articleListItem";
import { apiArticleType } from "../../services/apiService/apiServiceTypes";

const ArticleList = ({
  data = [],
}: {
  data: apiArticleType[] | undefined;
}): JSX.Element => {
  return (
    <div className={""}>
      {data.map((item, idx) => {
        return <ArticleListItem key={idx} article={item} />;
      })}
    </div>
  );
};

export default ArticleList;
