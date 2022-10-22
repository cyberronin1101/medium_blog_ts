import React from "react";
import FeedListItem from "./feedListItem";

type authorType = {
  username: string;
  image: string;
};
type feedType = {
  author: authorType;
  body: string;
  title: string;
  description: string;
  slug: string;
  tagList: string[];
  createdAt: string;
};

type respType = {
  articles: feedType[];
  articlesCount: number;
};

const FeedList = (props: { data: respType }): JSX.Element => {
  let data = props.data;

  return (
    <div className={""}>
      {data.articles.map((item, idx) => (
        <FeedListItem key={idx} article={item} />
      ))}
    </div>
  );
};

export default FeedList;
