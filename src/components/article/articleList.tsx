import React from "react";
import { respFeedType } from "../../types/apiTypes";
import ArticleListItem from "./articleListItem";

const ArticleList = (props: { data: respFeedType }): JSX.Element => {
  const data = props.data;

  return (
    <div className={""}>
      {data.articles.map((item, idx) => (
        <ArticleListItem key={idx} article={item} />
      ))}
    </div>
  );
};

export default ArticleList;
