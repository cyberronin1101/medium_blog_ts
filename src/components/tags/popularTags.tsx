import { Link } from "react-router-dom";

type tagType = string;

type respTagType = {
  tags: tagType[];
};

const PopularTags = (props: { data: respTagType }) => {
  return (
    <div className={"sidebar"}>
      <p>Popular Tags</p>
      <div className={"tag-list"}>
        {props.data.tags.map((tag) => (
          <Link
            key={tag}
            to={"/tags/" + tag}
            className={"tag-default tag-pill"}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
