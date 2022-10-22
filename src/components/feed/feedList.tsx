import WithData from "../hoc/withData";
import React from "react";

type tagType = string;

type respTagType = {
  tags: tagType[];
};

const FeedList = (props: { data: respTagType }): JSX.Element => {
  let data = props.data;

  return (
    <div className={""}>
      {data.tags.map((item, idx) => {
        return <div key={idx}>{item}</div>;
      })}
    </div>
  );
};

export default WithData<respTagType>(FeedList);
