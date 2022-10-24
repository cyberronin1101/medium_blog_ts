import { Link } from "react-router-dom";
import { apiTagType } from "../../services/apiService/apiServiceTypes";

const PopularTags = ({ tags = [] }: { tags?: apiTagType[] }) => {
  return (
    <div className={"sidebar"}>
      <p>Popular Tags</p>
      <div className={"tag-list"}>
        {tags.map((tag) => (
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
