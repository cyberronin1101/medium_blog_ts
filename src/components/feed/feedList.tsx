import React from "react";
import { respFeedType } from "../../types/apiTypes";
import FeedListItem from "./feedListItem";

const FeedList = (props: { data: respFeedType }): JSX.Element => {
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
