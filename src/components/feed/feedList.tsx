import WithData from "../hoc/withData";
import React from "react";

type propsType = {
  tag?: string | undefined;
  data: { tags: string[] };
};

const FeedList = ({ data }: propsType): JSX.Element => {
  // console.log(data);

  return (
    <div className={"feed-toggle"}>
      {data.tags.map((item, idx) => {
        console.log(item);
        return <div key={idx}>{item}</div>;
      })}
    </div>
  );
};

export default WithData<propsType>(FeedList);
